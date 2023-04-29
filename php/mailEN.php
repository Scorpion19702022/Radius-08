<?php

$name = $_POST["name"];
$from = $_POST["email"];
$subject = "A message from the Radius 08 website";
$to = "xxxx@xxxxx.pl";
$message = $_POST["msg"];

$txt = "Name: " . $name . "\r\n" . "Email " . $from . "\r\n" . "\r\n" . "Content: " . $message;

$headers = "From: " . $from . "\r\n";
$headers .= "Reply-to: " . $from . "\r\n";

$mail_status = mail($to, $subject, $txt, $headers);

if ($mail_status) {
    header("Location: /index.html?mail_status=sent");
    # code...
} else{
    header("Location: /index.html?mail_status=sent");
}