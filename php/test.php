Hey this is some content above the code
<<<<<<< HEAD

<?php
$name = 'Sophie'; //php require every value starts with $
$fullName = $name . 'Zeng'; //php use . instead of + for strings
=======
<?php
$name = 'Dave';
$fullName = $name . 'Stearns';
>>>>>>> 278f399a03f67ccb40c80ec9fe59b166249f0dbb

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
>>>>>>> 278f399a03f67ccb40c80ec9fe59b166249f0dbb
