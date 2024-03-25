<!-- resources/views/emails/reset_password_email.blade.php -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Password Reset</title>
</head>
<body>
    <p>Hello,</p>
    <p>You are receiving this email because we received a password reset request for your account.</p>
    <p>
        Please click the following link to reset your password:
        <a href="{{ $resetUrl }}">{{ $resetUrl }}</a>
    </p>
    <p>If you did not request a password reset, no further action is required.</p>
    <p>Regards,</p>
    <p>Your App Team</p>
</body>
</html>
