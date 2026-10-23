<?php
// Recibe el formulario de contacto de la web y lo manda por mail.
// Vite copia este archivo tal cual a dist/, así que se sube al hosting junto con el resto del sitio.

// Configuración: cambiá estos dos valores antes de subir la web.
// MAIL_DESTINO: la casilla donde querés recibir las consultas.
// MAIL_REMITENTE: conviene que sea una casilla de tu propio dominio (creala en el panel de Hostinger),
// si no, muchos proveedores mandan los mails a spam.
const MAIL_DESTINO = 'example@example.com';
const MAIL_REMITENTE = 'no-reply@example.com';

const TIPOS = [
    'wordpress' => 'Sitio en WordPress',
    'medida' => 'Aplicación a medida',
    'redes' => 'Community manager',
    'ads' => 'Google Ads',
    'nose' => 'Todavía no sé',
];

header('Content-Type: application/json; charset=utf-8');

function responder(int $status, array $body): void
{
    http_response_code($status);
    echo json_encode($body, JSON_UNESCAPED_UNICODE);
    exit;
}

function campo(string $nombre, int $max): string
{
    $valor = trim((string) ($_POST[$nombre] ?? ''));
    return mb_substr($valor, 0, $max);
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    responder(405, ['ok' => false, 'error' => 'Método no permitido.']);
}

// Campo trampa: las personas no lo ven, los bots lo completan. Fingimos éxito para no darles pistas.
if (campo('website', 200) !== '') {
    responder(200, ['ok' => true]);
}

// Se sacan los saltos de línea del nombre porque va en el asunto del mail.
$nombre = str_replace(["\r", "\n"], ' ', campo('nombre', 100));
$email = campo('email', 150);
$tipo = campo('tipo', 20);
$mensaje = campo('mensaje', 3000);

if ($nombre === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    responder(422, ['ok' => false, 'error' => 'Revisá tu nombre y tu email.']);
}

$tipoTexto = TIPOS[$tipo] ?? TIPOS['nose'];

$asunto = '=?UTF-8?B?' . base64_encode("Nueva consulta de $nombre: $tipoTexto") . '?=';

$cuerpo = "Llegó una consulta desde la web de Raven Design.\n\n"
    . "Nombre: $nombre\n"
    . "Email: $email\n"
    . "Necesita: $tipoTexto\n\n"
    . "Mensaje:\n" . ($mensaje !== '' ? $mensaje : '(sin mensaje)') . "\n";

$headers = implode("\r\n", [
    'From: Raven Design <' . MAIL_REMITENTE . '>',
    'Reply-To: ' . $email,
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'Content-Transfer-Encoding: 8bit',
]);

if (!mail(MAIL_DESTINO, $asunto, $cuerpo, $headers)) {
    responder(500, ['ok' => false, 'error' => 'No pudimos enviar tu consulta. Probá de nuevo en un rato.']);
}

responder(200, ['ok' => true]);
