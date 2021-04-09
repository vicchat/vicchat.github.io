enterMode = true;
logChatMessage("for", "Hello! Press <i>W</i> to start!", "Host", "lightgreen");
window.setInterval(function(){
	if (playerY === 40) {
		openMenu("<h1>CONGRATULATIONS!</h1>You did as you were told!<br><br><br><br><br>Hi.,<br><br><br><button onclick=\"resume();\">K</button> <button onclick=\"resume(); you_died('Do not be rude!');\">No!</button>");
		playerY = 50;
	}
});
