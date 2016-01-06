<?php
$url = parse_url($_SERVER['REQUEST-URI']);
$name = substr($url['path'], 1);
if (strlen($name) == 0) {
    $name = 'World';
}
?>

<!DOCTYPE html>  <!--! + tab -->
<html lang="en">
<head>
    <!--shortcut, meta:vp + tab -->
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta charset="UTF-8">
    <title>Hello <?= htmlentities($name) ?></title>
</head>
<body>
    <h1>Hello <?= htmlentities($name) ?>!</h1>
    
</body>
</html>