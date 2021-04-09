enterMode = true;
chat.style.background = "blue";
area.style.background = "black";
area.style.outlineColor = "yellow";
html.style.background = "darkred";
chatmessage.style.background = "white";
chatmessage.style.color = "black";
drawMode(false);
logChatMessage("for", "Do you like this map?", "Dev", "white");
logChatMessage("for", "Green = Yes, Red = No.", "Dev", "white");
dot("rgb(0, 255, 0)", 150, 150);
dot("rgb(255, 0, 0)", 150, 200);
window.setInterval(function(){
	if (playerX === 150 && playerY === 150) {
		you_died("Don't lie");
		title("main", "Don't lie");
	} else if (playerX === 150 && playerY === 200) {
		you_died("I don't like you either");
		title("main", "I don't like you either");
	}
});
