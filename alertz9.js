var notify = "notify";
var ask = "ask";
var question = "question";
var alertz9 = function(funct, alcode) {
    if (funct === notify) {
        window.alert("This page with the help from alertz9 says,\"" + alcode + "\"");
    } else if (funct === ask) {
        var out = window.confirm("This page with the help from alertz9 asks you,\"" + alcode + "\".");
    } else if (funct === question) {
        window.prompt("This page with the help from alertz9 wants to know,\"" + alcode + "\".")
    }
}
