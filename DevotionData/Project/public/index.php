<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <title>Devotion Record</title>
    
</head>
<body>
    <h1>This is the record page of your daily devotion..</h1>

    <form action="submitdata.php" method="get">
        <label for="devotionToday">Devotion Today:</label>
        <input type="text" name="devotionToday" id="devotionToday">

        
        <label for="devotionText">Devotion Text:</label>
        <input type="text" name="devotionText" id="devotionText">
        
        <label for="devotionDate">Devotion Date:</label>
        <input type="text" name="devotionDate" id="devotionDate">
        
        <input type="submit" value="GO">
    </form>

</body>
</html>