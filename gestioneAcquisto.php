<!DOCTYPE html>
<html>
    <body>
        <?php
            $prezzi = [
                "curva"            => 30,
                "tribuna centrale" => 80,
                "tribuna donore"   => 120
            ];

            $nome    = $_POST["nome"];
            $cognome = $_POST["cognome"];
            $cf      = $_POST["CF"];
            $settore = $_POST["settore"];
            $numAggiuntivi = $_POST["numAggiuntivi"];
            $dataCorrente = date("Y-m-d H:i:s");

            echo "<p>Acquisto effettuato</p>";
            echo "<p>$nome $cognome $cf ha acquistato $numAggiuntivi biglietto  al prezzo di $prezzi[$settore]€ in data e ora $dataCorrente </p>";
            
            
        ?>
    </body>
</html>