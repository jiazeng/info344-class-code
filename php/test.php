Hey this is some content above the code

<?php
$name = 'Sophie'; //php require every value starts with $
$fullName = $name . 'Zeng'; //php use . instead of + for strings

class Person {
    protected $name;
    
    public function __construct($n) {
        $this->name = $n;
    }
    
    public function getName() {
        return $this->name;
    }
}

//declare functions
function foo($bar) { //param needs $ too
    echo "Hey this is the foo fighting function\n";
}

//echo 'Hello World\n'; //single quote
echo "Hello {$name}s\n"; //double quote, php look inside
foo(NULL);
?>

And this is some content below