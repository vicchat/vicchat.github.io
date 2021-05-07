enterMode = true;
drawMode(false);
cheatmode = false;
area.style.background = "blue";
area.style.outlineColor = "green";
window.setInterval(function() {
	if (playerX === 60 && playerY === 50) {
		playerX = 50;
		logChatMessage("for", "Hello! This is a message!", "Example Guy", "white");
	} else if (playerX === 40 && playerY === 50) {
		playerX = 50;
		title("main", "Hello!", "green");
		title("action", "HOW U?", "red");
	}
}, 10);
