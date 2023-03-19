<?php

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_FILES['resume'])) {
    $file = $_FILES['resume'];
    $fileName = $file['name'];
    $fileTmpName = $file['tmp_name'];
    $fileSize = $file['size'];
    $fileError = $file['error'];
    $fileType = $file['type'];

    // Check if the uploaded file is a PDF or DOCX file
    $allowedTypes = ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    if (!in_array($fileType, $allowedTypes)) {
        echo 'Error: Only PDF and DOCX file types are allowed';
        exit;
    }

    // Check if there was an error uploading the file
    if ($fileError !== UPLOAD_ERR_OK) {
        echo 'Error: There was a problem uploading your file';
        exit;
    }

    // Move the uploaded file to a folder on the server
    $uploadDir = 'uploads/';
    $newFileName = uniqid('', true) . '.' . pathinfo($fileName, PATHINFO_EXTENSION);
    $destination = $uploadDir . $newFileName;
    if (move_uploaded_file($fileTmpName, $destination)) {
        echo 'Your resume has been uploaded successfully';
    } else {
        echo 'Error: There was a problem uploading your file';
    }
} else {
    echo 'Error: Invalid request';
}

?>
