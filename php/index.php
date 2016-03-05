<?php
<<<<<<< HEAD
$url = parse_url($_SERVER['REQUEST-URI']);
=======
$url = parse_url($_SERVER['REQUEST_URI']);
<<<<<<< HEAD
>>>>>>> 278f399a03f67ccb40c80ec9fe59b166249f0dbb
=======
>>>>>>> dd127347d12c8bb16a0f6d7fa4d2cd6133701c08
>>>>>>> 73c3867c7416c8f5a2bba02c279db1b1d04edbda
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
<<<<<<< HEAD
>>>>>>> 278f399a03f67ccb40c80ec9fe59b166249f0dbb
=======
>>>>>>> dd127347d12c8bb16a0f6d7fa4d2cd6133701c08
>>>>>>> 73c3867c7416c8f5a2bba02c279db1b1d04edbda
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta charset="UTF-8">
    <title>Hello <?= htmlentities($name) ?></title>
</head>
<body>
    <h1>Hello <?= htmlentities($name) ?>!</h1>
    
</body>
</html>