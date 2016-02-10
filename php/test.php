Hey this is some content above the code
<<<<<<< HEAD

<?php
$name = 'Sophie'; //php require every value starts with $
$fullName = $name . 'Zeng'; //php use . instead of + for strings
=======
<?php
$name = 'Dave';
$fullName = $name . 'Stearns';
>>>>>>> dd127347d12c8bb16a0f6d7fa4d2cd6133701c08

class Person {
    protected $name;
    
    public function __construct($n) {
        $this->name = $n;
    }
    
    public function getName() {
        return $this->name;
    }
}

<<<<<<< HEAD
//declare functions
function foo($bar) { //param needs $ too
    echo "Hey this is the foo fighting function\n";
}

//echo 'Hello World\n'; //single quote
echo "Hello {$name}s\n"; //double quote, php look inside
foo(NULL);
?>

And this is some content below
=======
function foo($bar) {
    echo "Hey this is the foo fighting function\n";
}

echo "Hello {$name}s\n";
foo(NULL);
?>
And this is some content below
>>>>>>> dd127347d12c8bb16a0f6d7fa4d2cd6133701c08
