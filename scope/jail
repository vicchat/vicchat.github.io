if (version > 1) {
	enterMode = true;
} else {
	enterMode = false;
}
drawMode(false);
cheatmode = false;
window.setInterval(function(){
	invincible = false;
}, 10);
logChatMessage("for", "Type <i>start</i> in the chat to start!", "AI", "blue");
var yes$  = function() {
	logChatMessage("for", "Great. Too bad we already found someone else for the job.", "AI", "blue");
	window.setTimeout(function() {
		area.style.background = "rgb(50, 50, 50)";
		logChatMessage("for", "You are never getting out of this prision! Hahahah!", "GUARD", "red");
		window.setTimeout(function() {
			logChatMessage("for", "NO! Type <i>escape</i> to get out of the prision!", "AI", "blue");
			window.setTimeout(function() {
				logChatMessage("for", "HA! But did you <i>really</i> think I am going to let that happen?", "GUARD", "red");
				window.setInterval(function(){
					if (lastMessage === "escape") {
						you_died("GAURD did not let you escape");
					}
				});
			}, 1000);
		}, 2000);
	}, 2000);
}
window.setInterval(function(){
	if (lastMessage === "start" || lastMessage === "Start") {
		lastMessage = null;
		resume();
		closeChat();
		title("main", "Welcome!");
		window.setTimeout(function() {
			title("main", "Let's Start...");
			window.setTimeout(function() {
				title("main", "Here you will go on a journey...");
				window.setTimeout(function() {
					title("main", "One that will take you to a far off place...");
					window.setTimeout(function() {
						title("main", "And ya. Ready to start?");
						window.setTimeout(function() {
							title("action", "Type \"yes\", \"no\", or \"repeat\".");
							window.setInterval(function() {
								if (lastMessage === "yes") {
									lastMessage = null;
									resume();
									closeChat();
									yes$();
								} else if (lastMessage === "no") {
									lastMessage = null;
									resume();
									closeChat();
									you_died("The whole point of the library is to say yes!");
								} else if (lastMessage === "repeat") {
									lastMessage = null;
									logChatMessage("for", "Welcome! Let's Start. Here you will go on a journey, one that will take you to a far off place, and ya. Ready to start?", "AI", "Blue");
									logChatMessage("for", "Type \"yes\", \"no\", or \"repeat\".", "AI", "blue");
								}
							});
						}, 1000);
					}, 2000);
				}, 2000);
			}, 2000);
		}, 2000);
	}
});
