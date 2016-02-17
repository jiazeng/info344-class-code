<<<<<<< HEAD
<?php
=======
<?php 
>>>>>>> 278f399a03f67ccb40c80ec9fe59b166249f0dbb
function getConnection() {
    require_once 'secret/db-credentials.php';
    
    try {
<<<<<<< HEAD
        $conn = new PDO("mysql:host={$dbHost};dbname={$dbDatabase}",
            $dbUser, $dbPassword);
            
        return $conn;

=======
        $conn = new PDO("mysql:host={$dbHost};dbname={$dbDatabase}", 
              $dbUser, $dbPassword);
        
        return $conn;
>>>>>>> 278f399a03f67ccb40c80ec9fe59b166249f0dbb
        
    } catch(PDOException $e) {
        die('Could not connect to database ' . $e);
    }
}

<<<<<<< HEAD
?>
=======
?>
>>>>>>> 278f399a03f67ccb40c80ec9fe59b166249f0dbb
