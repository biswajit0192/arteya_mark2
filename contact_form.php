<?php
//Import PHPMailer classes into the global namespace
//These must be at the top of your script, not inside a function
// use mail\vendor\phpmailer\phpmailer\src\PHPMailer;
// use mail\vendor\phpmailer\phpmailer\src\SMTP;
// use mail\vendor\phpmailer\phpmailer\src\Exception;
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader
require 'mail/vendor/autoload.php';
if(count($_POST)==0){
    exit();
}
ob_start();
$dt=date("m-d-Y H:i A");
//Instantiation and passing `true` enables exceptions
$mail = new PHPMailer(true);

    //Server settings
    $mail->SMTPDebug = 1;                      //Enable verbose debug output
    $mail->isSMTP();                                            //Send using SMTP
    $mail->Host       = 'mail.atreyaassociates.com';                     //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->Username   = 'info@atreyaassociates.com';                     //SMTP username
    $mail->Password   = 'AIz$2Eebw3lX';                               //SMTP password
    $mail->SMTPSecure = 'ssl';         //Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
    $mail->Port       = 465;                                    //TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

    //Recipients
    $mail->setFrom('info@atreyaassociates.com', 'Atreya Associates');
    $mail->addAddress('associatesatreya@gmail.com', 'Atreya Associates');     //Add a recipient
//    $mail->addAddress('ellen@example.com');               //Name is optional
//    $mail->addReplyTo('info@example.com', 'Information');
//    $mail->addCC('cc@example.com');
//    $mail->addBCC('bcc@example.com');

    //Attachments
//    $mail->addAttachment('/var/tmp/file.tar.gz');         //Add attachments
//    $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    //Optional name

    //Content
    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = 'Contact form submitted on website';
    $mail->Body    = "An user with below details has submmitted the contact form on our website on Date: $dt.<br><b>Name : ".$_POST['name']."</b><br><b>Email : ".$_POST['email']."</b><br><b>Subject : ".$_POST['subject']."</b><br><b>Message : ".$_POST['message']."</b><br>";
    $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';
    if(!$mail->send()){
        ob_end_clean();
        echo 0;
    }else{
        ob_end_clean();
        echo 1;
    }
