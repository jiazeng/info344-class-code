<?php 
class Zips {
    protected $conn;
<<<<<<< HEAD
    //constructer
=======
    
>>>>>>> dd127347d12c8bb16a0f6d7fa4d2cd6133701c08
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
>>>>>>> dd127347d12c8bb16a0f6d7fa4d2cd6133701c08
            var_dump($stmt->errorInfo());
            return false;
        } else {
            return $stmt->fetchAll();
        }
    }
}
?>