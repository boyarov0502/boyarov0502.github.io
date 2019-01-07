<?php
if( $_POST ){
	require_once('PHPMailerAutoload.php');
	$mail = new PHPMailer;
	$mail->CharSet = 'utf-8';

	$userName = $_POST['name'];
	$userEmail = $_POST['email'];
	$userMessage = $_POST['message'];
	$userPhone = $_POST['phone'];
	$userCompany = $_POST['company'];
	$userPost = $_POST['post'];

	$htmlBody = '
	<head>
	<title>Сообщение с сайта monomocolo.com</title>
	</head>
	<body>
	<table style="width: 100%">
		<tr style="background-color: #f8f8f8">
			<td style="padding: 10px; border: #e9e9e9 1px solid"><b>Имя</b></td>
			<td style="padding: 10px; border: #e9e9e9 1px solid">' .$userName . '</td>
		</tr>
		<tr style="background-color: #f8f8f8">
			<td style="padding: 10px; border: #e9e9e9 1px solid"><b>Электронная почта</b></td>
			<td style="padding: 10px; border: #e9e9e9 1px solid">' .$userEmail . '</td>
		</tr>
		<tr style="background-color: #f8f8f8">
			<td style="padding: 10px; border: #e9e9e9 1px solid"><b>Сообщение</b></td>
			<td style="padding: 10px; border: #e9e9e9 1px solid">' .$userMessage . '</td>
		</tr>
		<tr style="background-color: #f8f8f8">
			<td style="padding: 10px; border: #e9e9e9 1px solid"><b>Имя</b></td>
			<td style="padding: 10px; border: #e9e9e9 1px solid">' .$userPhone . '</td>
		</tr>
		<tr style="background-color: #f8f8f8">
			<td style="padding: 10px; border: #e9e9e9 1px solid"><b>Электронная почта</b></td>
			<td style="padding: 10px; border: #e9e9e9 1px solid">' .$userCompany . '</td>
		</tr>
		<tr style="background-color: #f8f8f8">
			<td style="padding: 10px; border: #e9e9e9 1px solid"><b>Сообщение</b></td>
			<td style="padding: 10px; border: #e9e9e9 1px solid">' .$userPost . '</td>
		</tr>
	</table>';

	//$mail->SMTPDebug = 3;	// Enable verbose debug output

	$mail->isSMTP();	// Set mailer to use SMTP
	$mail->Host = 'smtp.gmail.com';	// Specify main and backup SMTP servers
	$mail->SMTPAuth = true;	// Enable SMTP authentication
	$mail->Username = 'forfl.eproject@gmail.com'; // Ваш логин от почты с которой будут отправляться письма
	$mail->Password = 'sp1d3rGG'; // Ваш пароль от почты с которой будут отправляться письма
	$mail->SMTPSecure = 'ssl';	// Enable TLS encryption, `ssl` also accepted
	$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров

	// Прикрепление файлов
	// for ($ct = 0; $ct < count($_FILES['userfile']['tmp_name']); $ct++) {
	//  $uploadfile = tempnam(sys_get_temp_dir(), sha1($_FILES['userfile']['name'][$ct]));
	//  $filename = $_FILES['userfile']['name'][$ct];
	//  if (move_uploaded_file($_FILES['userfile']['tmp_name'][$ct], $uploadfile)) {
	//  	$mail->addAttachment($uploadfile, $filename);
	//  } else {
	//  	$msg .= 'Failed to move file to ' . $uploadfile;
	//  }
	// }

	$mail->setFrom('forfl.eproject@gmail.com');	// от кого будет уходить письмо?
	$mail->addBCC('poluboiarov@gmail.com');
	$mail->isHTML(true);	// Set email format to HTML

	$mail->Subject = '[monomocolo.com] Новое сообщение';
	$mail->Body = $htmlBody;
	$mail->AltBody = '';

	if( $mail->send() ){
		$answer = '1';
	} else {
		$answer = '0';
	}
	die( $answer );
}
?>
