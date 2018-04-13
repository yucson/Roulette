<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <link rel="shortcut icon" href="">
    <link rel="apple-touch-icon" href=""/>
    <meta name="keywords" content=""/>
    <meta name="description" content=""/>
    <script type="text/javascript" src="js/jquery-1.11.3.min.js"></script>
    <script type="text/javascript" src="js/wow.js"></script>
    <script type="text/javascript" src="js/jquery.cookie.js"></script>
    <script type="text/javascript" src="js/script.js"></script>
    <link rel="stylesheet" type="text/css" href="css/animate.css"/>
    <link rel="stylesheet" type="text/css" href="css/common_style.css"/>
    <link rel="stylesheet" type="text/css" href="css/roulette.css"/>
    <title>ルーレット</title>
    <script>
        $(function(){
            $('.roulette').roulette({
                'roulette_table' : '.num',
                'speed' : 50,
                'loop_animate' : '',
                'result_animate' : 'fadeIn',
                'result_history' : 'fadeIn',
                'count' : 16,
                'img_path' : 'images/photo/',
            });
        });
    </script>
</head>
<body>

<div id="controler">
    <input type="button" value="スタート [ ↑ ]" id="start" class="button" />
    <input type="button" value="ストップ [ ↓ ]" id="stop" class="button" />
    <input type="button" value="リセット [ shift ]" id="reset" class="button" />
</div>

<div id="result"></div>

<div id="history"></div>

</body>
<script type="text/javascript" src="js/roulette.js"></script>
</html>