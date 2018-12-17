<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$_POST = json_decode(file_get_contents('php://input'), true);
$data = $_POST['data'];

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    if(!empty($data['capcha']) && isset($data['capcha'])) {
        $secret = '6Le2KYEUAAAAAMwcDn5z0kN-tBc99bpFDOQ5Blgf';
        $verifyResponse = file_get_contents('https://www.google.com/recaptcha/api/siteverify?secret=' . $secret . '&response=' . $_POST['g-recaptcha-response']);
        $responseData = json_decode($verifyResponse);
        if ($responseData->success) {
            $name = strip_tags(trim($data['name']));
            $name = str_replace(array("\r", "\n"), array(" ", " "), $name);
            $email = filter_var(trim($data['email']), FILTER_SANITIZE_EMAIL);
            $message = trim($data['message']);

            // Check that data was sent to the mailer.
            if (empty($name) OR empty($message) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
                // Set a 400 (bad request) response code and exit.
                http_response_code(400);
                echo "Prašau, baigti pilyti formą";
                exit;
            }


            $recipient = "svajunas_kaseta@yahoo.com";//"andrius.chaziachmetovas@ktu.lt, dobisdobis@gmail.com, sviesa@gisa.lt, garsas@gisa.lt";


            // Set the email subject.
            $subject = "Žinutė nuo $name";

            // Build the email content.
            $email_content = "Name: $name\n";
            $email_content .= "Email: $email\n\n";
            $email_content .= "Message:\n$message\n";

            // Build the email headers.
            $email_headers = "From: $name <$email>";

            // Send the email.

            if (mail($recipient, $subject, $email_content, $email_headers)) {
                // Set a 200 (okay) response code.
                http_response_code(200);
                echo "Ačiū, žinutė buvo išsiųsta.";
            } else {
                // Set a 500 (internal server error) response code.
                http_response_code(500);
                $response = "Žinutės išsiųsti nepavyko";
                echo $response;
            }
        } else {
            echo "Klaida";
        }
    }else{
        echo 'capcha klaida';
    }
}
?>
