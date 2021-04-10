enterMode = true;
area.style.background = "rgba(0, 0, 0, 0.5)";
area.style.outlineColor = "rgba(0, 0, 0, 0.7)";
html.style.backgroundImage = "url(https://media.istockphoto.com/photos/lava-background-picture-id1012404208?k=6&m=1012404208&s=612x612&w=0&h=wSHyFUfLdTpN2p635FHTxwlVkiSxFkLUSd7P20ji7cU=)";
html.style.backgroundSize = "1500px";
logChatMessage("for", "THE FLOOR IS LAVA!!!", "Panicking Guy", "rgb(255, 140, 0)");
logChatMessage("for", "AHHHHHHH!!!", "Panicking Guy", "rgb(255, 140, 0)");
drawMode(false);
var titlethingy = function() {
	title("main", "Help,");
	window.setTimeout(function() {
		title("main", "We need you,");
		window.setTimeout(function() {
			title("main", "This map is deadly,");
			window.setTimeout(function() {
				title("main", "Get out,");
				title("action", "No! Stay!");
				window.setTimeout(function() {
					coord.style.display = "none";
					html.style.backgroundImage = "none";
					html.style.background = "black";
					ax = 50;
					ay = 50;
					playerX = 50;
					playerY = 50;
					area.style.left = ax + "px";
					area.style.top = ay + "px";
					puffyThingy.style.left = playerX + "px";
					puffyThingy.style.top = playerY + "px";
					title("main", "I told you to get out,");
					title("action", "HAHAHAHAHAHAHAHAHAHAHAHAHAHA!");
					window.setInterval(function() {
						if (playerX != 50 || playerY != 50) {
							you_died("The Random Puffy Thingy fell off the world.");
						}
					}, 10);
				}, 1000);
			}, 1000);
		}, 1000);
	}, 1000);
}
window.setTimeout(function() {
	logChatMessage("for", "GO TO X=2300 Y=2300 FOR HELP!!!", "Panicking Guy", "rgb(255, 140, 0)");
	window.setTimeout(function() {
		coord.style.display = "block";
		window.setInterval(function() {
			if (playerX === 2300 && playerY === 2300) {
				playerX = 2310;
				playerY = 2310;
				titlethingy();
			}
		}, 10);
	}, 750);
}, 3000);
