<?php
// Secure route guarding: Redirect back if someone tries to view the page without submitting
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    header("Location: index.html"); // Change to your landing page filename if it's index.php
    exit();
}

// Capture and sanitize input data
$fullname = htmlspecialchars(trim($_POST['fullname'] ?? ''));
$email    = htmlspecialchars(trim($_POST['email'] ?? ''));
$location = htmlspecialchars(trim($_POST['location'] ?? ''));
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>XO Syndicate - Transcription Success</title>
    <link rel="stylesheet" href="style.css">
    <style>
        /* Custom styles matching your dark Red & Yellow UI theme */
        body {
            background-color: #000;
            color: #fff;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            margin: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
        }
        .result-container {
            background-color: #990000; /* Rich red background from your form UI */
            padding: 40px;
            width: 100%;
            max-width: 500px;
            box-shadow: 10px 10px 0px #000000, 13px 13px 0px #990000; /* Emulating your layered offset frame */
            border: 1px solid #ff0000;
        }
        .result-title {
            color: #ffff00; /* Electric yellow text */
            text-transform: uppercase;
            font-size: 1.6rem;
            letter-spacing: 2px;
            margin-top: 0;
            margin-bottom: 25px;
            text-align: center;
            border-bottom: 2px solid #000;
            padding-bottom: 10px;
        }
        .data-box {
            background-color: rgba(0, 0, 0, 0.4);
            padding: 15px;
            margin-bottom: 15px;
            border-radius: 2px;
        }
        .data-label {
            display: block;
            font-size: 0.75rem;
            font-weight: bold;
            color: #ffff00;
            margin-bottom: 5px;
            letter-spacing: 1px;
        }
        .data-value {
            font-size: 1.1rem;
            color: #fff;
            font-family: monospace;
        }
        .btn-return {
            display: block;
            width: 100%;
            box-sizing: border-box;
            background-color: #ffff00;
            color: #000;
            text-align: center;
            padding: 15px;
            text-decoration: none;
            font-weight: bold;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-top: 25px;
            transition: transform 0.1s ease;
        }
        .btn-return:hover {
            transform: scale(1.02);
            background-color: #e6e600;
        }
    </style>
</head>
<body>

    <div class="result-container">
        <h2 class="result-title">XO Transcription Logged</h2>
        
        <div class="data-box">
            <span class="data-label">FULLNAME</span>
            <div class="data-value"><?php echo $fullname; ?></div>
        </div>

        <div class="data-box">
            <span class="data-label">EMAIL ADDRESS</span>
            <div class="data-value"><?php echo $email; ?></div>
        </div>

        <div class="data-box">
            <span class="data-label">LOCATION / CITY</span>
            <div class="data-value"><?php echo $location; ?></div>
        </div>

        <a href="index.php" class="btn-return">Back to home</a>
    </div>

</body>
</html>