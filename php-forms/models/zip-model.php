<?php 
class Zips {
    protected $conn;
<<<<<<< HEAD
    //constructer
=======
    
>>>>>>> 278f399a03f67ccb40c80ec9fe59b166249f0dbb
    public function __construct($conn) {
        $this->conn = $conn;
    }
    
    public function search($q) {
        $sql = 'select * from zips where zip=? or primary_city=?';
        $stmt = $this->conn->prepare($sql);
        $success = $stmt->execute(array($q,$q));
<<<<<<< HEAD
        if (!$success) {
            //trigger_error($stmt->errorInfo());
=======
        if (!$success) {            
>>>>>>> 278f399a03f67ccb40c80ec9fe59b166249f0dbb
            var_dump($stmt->errorInfo());
            return false;
        } else {
            return $stmt->fetchAll();
        }
    }
}
?>