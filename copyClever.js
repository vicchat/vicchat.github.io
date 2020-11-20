var copy = function(text) {
    var a = document.createElement("textarea");
        a.value = text;
    document.body.appendChild(a);
    a.select();
    document.execCommand("copy");
    document.body.removeChild(a);
};
