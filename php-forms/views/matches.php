<h1>Possible Matches</h1>
<<<<<<< HEAD
<ul>  
    <?php foreach($matches as $match): ?>  
    <li> 
        <?= htmlentities($match['primary_city']) ?>    
        <?= htmlentities($match['state']) ?>
        <?= htmlentities($match['zip']) ?>
        <?= htmlentities($match['country']) ?>        
    </li>
    <?php endforeach; ?>
</ul>




=======
<ul>
    <?php foreach($matches as $match): ?>
    <li>
        <?= htmlentities($match['primary_city']) ?>,
        <?= htmlentities($match['state']) ?>
        <?= htmlentities($match['zip']) ?>
        <?= htmlentities($match['country']) ?>
    </li>
    <?php endforeach; ?>
</ul>
<<<<<<< HEAD
>>>>>>> 278f399a03f67ccb40c80ec9fe59b166249f0dbb
=======
>>>>>>> dd127347d12c8bb16a0f6d7fa4d2cd6133701c08
>>>>>>> 73c3867c7416c8f5a2bba02c279db1b1d04edbda
