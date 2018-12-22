<?php
if( $_POST ){
	require_once('PHPMailerAutoload.php');
	$mail = new PHPMailer;
	$mail->CharSet = 'utf-8';

	$companyName    = $_POST['name'];
	$companyYear    = $_POST['year'];
	$companySite    = $_POST['site'];
	$companyField   = $_POST['field'];
	$companySubject = $_POST['subject'];
	$companyCity    = $_POST['city'];

	$contactName   = $_POST['fio'];
	$contactPhone  = $_POST['phone'];
	$contactEmail  = $_POST['email'];
	$clientMessage = $_POST['message'];

	$htmlBody = '
	<head>
	<title>Сообщение с сайта НЕО_ИН_ТЕК</title>
	</head>
	<body>
	<table style="width: 100%">
		<tr style="background-color: #f8f8f8">
			<td style="padding: 10px; border: #e9e9e9 1px solid"><b>Название компании</b></td>
			<td style="padding: 10px; border: #e9e9e9 1px solid">' .$companyName . '</td>
		</tr>
		<tr style="background-color: #f8f8f8">
			<td style="padding: 10px; border: #e9e9e9 1px solid"><b>Год создания компании</b></td>
			<td style="padding: 10px; border: #e9e9e9 1px solid">' .$companyYear . '</td>
		</tr>
		<tr style="background-color: #f8f8f8">
			<td style="padding: 10px; border: #e9e9e9 1px solid"><b>Сайт компании</b></td>
			<td style="padding: 10px; border: #e9e9e9 1px solid">' .$companySite . '</td>
		</tr>
		<tr style="background-color: #f8f8f8">
			<td style="padding: 10px; border: #e9e9e9 1px solid"><b>Сфера деятельности компании</b></td>
			<td style="padding: 10px; border: #e9e9e9 1px solid">' .$companyField . '</td>
		</tr>
		<tr style="background-color: #f8f8f8">
			<td style="padding: 10px; border: #e9e9e9 1px solid"><b>Субъект РФ</b></td>
			<td style="padding: 10px; border: #e9e9e9 1px solid">' .$companySubject . '</td>
		</tr>
		<tr style="background-color: #f8f8f8">
			<td style="padding: 10px; border: #e9e9e9 1px solid"><b>Город</b></td>
			<td style="padding: 10px; border: #e9e9e9 1px solid">' .$companyCity . '</td>
		</tr>
		<br />
		<tr style="background-color: #f8f8f8">
			<td style="padding: 10px; border: #e9e9e9 1px solid"><b>ФИО контактного лица</b></td>
			<td style="padding: 10px; border: #e9e9e9 1px solid">' .$contactName . '</td>
		</tr>
		<tr style="background-color: #f8f8f8">
			<td style="padding: 10px; border: #e9e9e9 1px solid"><b>Телефон</b></td>
			<td style="padding: 10px; border: #e9e9e9 1px solid">' .$contactPhone . '</td>
		</tr>
		<tr style="background-color: #f8f8f8">
			<td style="padding: 10px; border: #e9e9e9 1px solid"><b>E-mail</b></td>
			<td style="padding: 10px; border: #e9e9e9 1px solid">' .$contactEmail . '</td>
		</tr>
		<tr style="background-color: #f8f8f8">
			<td style="padding: 10px; border: #e9e9e9 1px solid"><b>Вопрос или предложение</b></td>
			<td style="padding: 10px; border: #e9e9e9 1px solid">' .$clientMessage . '</td>
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

	$mail->Subject = '[НЕО_ИН_ТЕК] Новое сообщение';
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
