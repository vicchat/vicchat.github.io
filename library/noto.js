        var _01_01_01 = document.createElement("notification-code");
            _01_01_01.innerHTML = '<div id="alertz9plus8"><div id="alert-header"><span id="header-text"></span></div><div id="alert-body"><div id="alert-content"></div></div><button id="alert-submit" onclick="closeNotifyPLUS012();">OK</button></div><style>#alertz9plus8 {position: fixed;width: 400px;height: 200px;left: 50%;top: 50%;margin-left: -200px;margin-top: -100px;background: white;outline: solid 1px black;box-shadow: 0 0 10px black;font-family: sans-serif;}#alert-header {position: absolute;left: 0px;top: 0px;width: 100%;height: 25px;outline: solid 1px black;}#header-text {position: relative;top: 4px;left: 7px;font-size: 15px;}#alert-body {position: relative;top: 60px;left: 20px;}#alert-submit {position: absolute;bottom: 5px;left: 5px;background: lightgrey;border: outset 5px #555555;outline: none !important;width: 390px;padding: 5px;font-size: 18px;}#alert-submit:active {border-style: inset;}</style>';
            document.body.appendChild(_01_01_01);
        
        var alertBoxyayyay = document.getElementById("alertz9plus8");
        var headTextyayyay = document.getElementById("header-text");
        var bodyTextyayyayt = document.getElementById("alert-content");
        
        alertBoxyayyay.style.display = "none";
        headTextyayyay.textContent = "Notification from Website";
        
        var notify = function(altext, title) {
            alertBoxyayyay.style.display = "block";
            bodyTextyayyayt.textContent = altext;
            if (title != undefined) {
                headTextyayyay.textContent = title;
            } else {
                headTextyayyay.textContent = "Notification from Website";
            }
        }
        
        var closeNotifyPLUS012 = function() {
            alertBoxyayyay.style.display = "none";
        }
