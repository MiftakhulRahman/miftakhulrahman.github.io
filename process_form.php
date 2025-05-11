<?php
// Konfigurasi
$to = "miftakhul03@gmail.com"; // Email tujuan
$subject = "Pesan Baru dari Website Portofolio";

// Tangkap data form
$name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
$email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
$phone = filter_var($_POST['phone'], FILTER_SANITIZE_STRING);
$address = filter_var($_POST['address'], FILTER_SANITIZE_STRING);
$message = filter_var($_POST['message'], FILTER_SANITIZE_STRING);

// Validasi data
if(empty($name) || empty($email) || empty($message)) {
    header("Location: index.html?status=error#kontak");
    exit;
}

// Format pesan email
$body = "Nama: $name\n";
$body .= "Email: $email\n";
$body .= "No. HP: $phone\n";
$body .= "Alamat: $address\n\n";
$body .= "Pesan:\n$message\n";

// Header email
$headers = "From: $email\r\n";
$headers .= "Reply-To: $email\r\n";

// Kirim email
if(mail($to, $subject, $body, $headers)) {
    header("Location: index.html?status=success#kontak");
} else {
    header("Location: index.html?status=error#kontak");
}
?>