        
        var reDesign = function(html) {
            document.body.innerHTML = html;
        }
        
        var editHtmlById = function(id, html) {
            document.getElementById(id).innerHTML = html;
        }
        
        var editHtmlByClass = function(_class, html) {
            var a = document.getElementsByClassName(_class);
            for (var i = 0; i < a.length; i++) {
                a[i].innerHTML = html;
            }
        }
        
        var editHtmlByTag = function(tag, html) {
            var a = document.getElementsByTagName(tag);
            for (var i = 0; i < a.length; i++) {
                a[i].innerHTML = html;
            }
        }
        
        var editTextById = function(id, html) {
            document.getElementById(id).textContent = html;
        }
        
        var editTextByClass = function(_class, html) {
            var a = document.getElementsByClassName(_class);
            for (var i = 0; i < a.length; i++) {
                a[i].textContent = html;
            }
        }
        
        var editTextByTag = function(tag, html) {
            var a = document.getElementsByTagName(tag);
            for (var i = 0; i < a.length; i++) {
                a[i].textContent = html;
            }
        }
        
        var editStyleById = function(id, html) {
            document.getElementById(id).style = html;
        }
        
        var editStyleByClass = function(_class, html) {
            var a = document.getElementsByClassName(_class);
            for (var i = 0; i < a.length; i++) {
                a[i].style = html;
            }
        }
        
        var editStyleByTag = function(tag, html) {
            var a = document.getElementsByTagName(tag);
            for (var i = 0; i < a.length; i++) {
                a[i].style = html;
            }
        }
        
        var editId = function(id, attr, html) {
            var a = document.getElementById(id).attr = html;
            console.log(attr);
        }
        
        var editClass = function(_class, attr, html) {
            var a = document.getElementsByClassName(_class);
            for (var i = 0; i < a.length; i++) {
                a[i].attr = html;
            }
        }
        
        var editTag = function(tag, attr, html) {
            var a = document.getElementsByTagName(tag);
            for (var i = 0; i < a.length; i++) {
                a[i].attr = html;
            }
        }
        
        var append = function(html) {
            var a = document.createElement("JavaScript-append-element");
            a.innerHTML = html;
            document.body.appendChild(a);
        }
        
        var addText = function(html) {
            var a = document.createElement("JavaScript-append-element");
            a.textContent = html;
            document.body.appendChild(a);
        }
        
        var appendCustomTag = function(tag, html) {
            var a = document.createElement(tag);
            a.innerHTML = html;
            document.body.appendChild(a);
        }
        
        var appendCustomTagWithClass = function(tag, _class, html) {
            var a = document.createElement(tag);
            a.innerHTML = html;
            a.className = _class;
            document.body.appendChild(a);
        }
        
        var interact = function(id, interaction, funct) {
            var a = document.getElementById(id);
            var b = funct;
            a.addEventListener(interaction, b);
        }
        
        var test = function(me) {
            console.log(me);
        }
        
        var getElementIdValue = function(id) {
            var a = document.getElementById(id).value;
            return a;
        }
        
        var popup = function(link, html) {
            myWindow = window.open(link, "myWindow", html);
        }
        
        var targetBlank = function() {
            window.open();
        }
