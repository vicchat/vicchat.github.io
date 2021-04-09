enterMode = true;
area.style.background = "grey";
area.style.outlineColor = "red";
window.setInterval(function() {
	if (playerX > 899 && playerX < 901 && playerY > 599 && playerY < 601) {
		you_died("You went into the death zone!");
	}
});
logChatMessage("for", "Go to x=900 y=600 for fun!", "Random Guy", "rgb(255, 81, 81)");
logChatMessage("for", "Tip: Press F3 to show coordinates.", "Random Guy", "rgb(255, 81, 81)");
