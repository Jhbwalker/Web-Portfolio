<?php
/**
 * Created by PhpStorm.
 * User: Jarrell H. Walker
 * Date: 9/1/2016
 * Time: 4:45 PM
 */
if( isset($_POST['Name']) && isset($_POST['Email']) && isset($_POST['Message'])){
    $n = $_POST['Name'];
    $e = $_POST['Email'];
    $m = nl2br($_POST['Message']);
    $to = "jarrel62@gmail.com";
    $from = $e;
    $subject = "A message from " .$n.".";
    $message = '<b>Name:</b> '.$n.' <br><b>Email:</b> '.$e.' <p>'.$m.'</p>';
    $headers = "From: $from\n";
    $headers .= "MIME-Version: 1.0\n";
    $headers .= "Content-type: text/html; charset=iso-8859-1\n";
    if(mail($to, $subject, $message, $headers)){
        echo "Success!";
    }else{
        echo "The server failed to send the message. Please try again later.";
    }
}
?>