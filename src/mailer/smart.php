<?php 


$name = $_POST['user_name'];
$phone = $_POST['user_phone'];

$locationFrom = $_POST['user_loc_From'];
$locationTo = $_POST['user_loc_To'];

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'a.turchin.krastbiz@gmail.com';                 // Наш логин
$mail->Password = 'krastbiz2308';                           // Наш пароль от ящика
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                    // TCP port to connect to
 
$mail->setFrom('a.turchin.krastbiz@gmail.com', 'Alexandr Turchin');   // От кого письмо 
$mail->addAddress('krastbiz@gmail.com');     // Add a recipient
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Новая заявка';


$messageBody = '';
if ($locationFrom != '' || $locationTo != ''){
	$messageBody = 'Пользователь оставил заявку <br> 
		Имя: ' . $name . ' <br>
		Телефон: ' . $phone . '<br>
		Откуда: ' . $locationFrom . ' <br>
		Куда: ' . $locationTo . '';
} else {
	$messageBody =  '
		Пользователь оставил заявку <br> 
		Имя: ' . $name . ' <br>
		Телефон: ' . $phone . '';
}

$mail->Body    = $messageBody;

$mail->AltBody = 'Альтернативный текст';

if(!$mail->send()) {
    return false;
} else {
    return true;
}

?>