<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');

function respond(int $status, string $message): void
{
    http_response_code($status);
    echo json_encode(['message' => $message], JSON_UNESCAPED_UNICODE);
    exit;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    header('Allow: POST');
    respond(405, 'Método no permitido.');
}

$allowedHosts = ['kilometroclaro.com', 'www.kilometroclaro.com'];
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if ($origin !== '') {
    $originHost = strtolower((string) parse_url($origin, PHP_URL_HOST));
    if (!in_array($originHost, $allowedHosts, true)) {
        respond(403, 'Origen no permitido.');
    }
}

if (trim((string) ($_POST['website'] ?? '')) !== '') {
    respond(200, 'Mensaje enviado.');
}

$name = trim(strip_tags((string) ($_POST['name'] ?? '')));
$email = trim((string) ($_POST['email'] ?? ''));
$message = trim(strip_tags((string) ($_POST['message'] ?? '')));
$consent = (string) ($_POST['privacyConsent'] ?? '');

if ($name === '' || strlen($name) > 400 || $message === '' || strlen($message) > 20000 || strlen($email) > 254 || !filter_var($email, FILTER_VALIDATE_EMAIL) || $consent !== 'yes') {
    respond(400, 'Revisa los campos obligatorios y acepta la política de privacidad.');
}

$recipient = 'asv.webs.contact@gmail.com';
$subject = '=?UTF-8?B?' . base64_encode('Contacto desde Kilómetro Claro') . '?=';
$senderName = '=?UTF-8?B?' . base64_encode('Kilómetro Claro') . '?=';
$safeName = preg_replace('/[\r\n]+/', ' ', $name) ?? '';
$body = "Mensaje recibido desde el formulario de kilometroclaro.com\n\nNombre: {$safeName}\nCorreo: {$email}\n\nMensaje:\n{$message}\n";
$headers = [
    'From: ' . $senderName . ' <web@kilometroclaro.com>',
    'Reply-To: ' . $email,
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
];

if (!mail($recipient, $subject, $body, implode("\r\n", $headers))) {
    respond(500, 'El servidor no ha podido aceptar el mensaje.');
}

respond(200, 'Mensaje enviado.');
