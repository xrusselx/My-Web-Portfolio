<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <?php
        $devotionToday = $_GET['devotionToday'];
        $devotionText = $_GET['devotionText'];
        $devotionDate = $_GET['devotionDate'];

        try {
            $pdo = new PDO('mysql:host=Homestead;dbname=devotionrecord;
            charset=utf8', 'admin', 'password');
            $pdo->setAttribute(PDO::ATTR_ERRMODE,
            PDO::ERRMODE_EXCEPTION);

            // $sql = 'SELECT * FROM `Daily Record`';
            // $sql = 'UPDATE `Daily Record` SET `id`="2" WHERE `id`="9"';
            // $sql = 'DELETE FROM `Daily Record` WHERE id=15';
            // $sql = 'INSERT INTO `Daily Record` SET
            // `devotiontoday` = "1",
            // `devotionsummarize` = "Russel",
            // `devotiondate` = "2020-01-26"';
            // // $sql = 'SELECT `devotionsummarize` FROM `Daily Record`';

            // $out = $pdo->exec($sql);
            // $result = $pdo->query($sql);
            $pdo->query($sql);
            // for ($i = 0; $row = $result->fetch(); $i++) {
                // $jokes[] = $row['devotionsummarize'];
                // $output = 'Query Executed!<br />' . $jokes[$i];
                $output = 'Query Executed!<br />';
                include __DIR__ . '/output.html.php';
            // }
        }
        catch (PDOException $e) {
            $output = 'Database error:' . $e->getMessage() . ' in ' .
            $e->getFile() . ':' . $e->getLine();
            include __DIR__ . '/output.html.php';
        }

        // echo 'Welcome to our website, ' .
        // htmlspecialchars($devotionToday, ENT_QUOTES, 'UTF-8') . ' ' .
        // htmlspecialchars($devotionText, ENT_QUOTES, 'UTF-8') . ' ' .
        // htmlspecialchars($devotionDate, ENT_QUOTES, 'UTF-8') . ' ';
    ?>
</body>
</html>


    