<<<<<<< HEAD
<?php
=======
<?php 
<<<<<<< HEAD
>>>>>>> 278f399a03f67ccb40c80ec9fe59b166249f0dbb
=======
>>>>>>> dd127347d12c8bb16a0f6d7fa4d2cd6133701c08
>>>>>>> 73c3867c7416c8f5a2bba02c279db1b1d04edbda
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
<<<<<<< HEAD
>>>>>>> 278f399a03f67ccb40c80ec9fe59b166249f0dbb
=======
>>>>>>> dd127347d12c8bb16a0f6d7fa4d2cd6133701c08
>>>>>>> 73c3867c7416c8f5a2bba02c279db1b1d04edbda
        
    } catch(PDOException $e) {
        die('Could not connect to database ' . $e);
    }
}

<<<<<<< HEAD
?>
=======
?>
<<<<<<< HEAD
>>>>>>> 278f399a03f67ccb40c80ec9fe59b166249f0dbb
=======
>>>>>>> dd127347d12c8bb16a0f6d7fa4d2cd6133701c08
>>>>>>> 73c3867c7416c8f5a2bba02c279db1b1d04edbda
