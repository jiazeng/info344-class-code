<?php
<<<<<<< HEAD
$url = parse_url($_SERVER['REQUEST-URI']);
=======
$url = parse_url($_SERVER['REQUEST_URI']);
>>>>>>> 278f399a03f67ccb40c80ec9fe59b166249f0dbb
$name = substr($url['path'], 1);
if (strlen($name) == 0) {
    $name = 'World';
}
?>
<<<<<<< HEAD

<!DOCTYPE html>  <!--! + tab -->
<html lang="en">
<head>
    <!--shortcut, meta:vp + tab -->
=======
<!DOCTYPE html>
<html lang="en">
<head>
>>>>>>> 278f399a03f67ccb40c80ec9fe59b166249f0dbb
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta charset="UTF-8">
    <title>Hello <?= htmlentities($name) ?></title>
</head>
<body>
    <h1>Hello <?= htmlentities($name) ?>!</h1>
    
</body>
</html>