enterMode = true;
cheatmode = false;

if (version !== "1.3_s4billion") {
	enterMode = false;
}

logChatMessage("for", "Mmm Mmm Mmm! Yummy cake!", "Doe", "lime");
logChatMessage("for", "Would you like to go for an eat?", "Doe", "lime");
logChatMessage("for", "<ins id=yeat>Yes</ins> <ins id=neat>No</ins>", "YOU", "orange");

var fetc = function() {
	resume();
	window.setTimeout(function() {
		openMenu("<h1 style='color: darkred;'>WARNING:</h1>Eating the cake will cost you 1 cake because when you eat it you don't have the cake anymore because you ate it.<br><br><ins id='whaocon'>&Gt;</ins>", "Eat the cake");
		id("whaocon").onclick = function() {
			openMenu("<h1 style='color: darkred'>WARNING:</h1> No? Ok. Well, you'll see what I mean...<br><br><ins id=whaocon2>&Gt;</ins>", "Eat the cake");
			id("whaocon2").onclick = function() {
				home();
			}
		}
	}, 500);
}

id("yeat").onclick = function() {
	clearChat();
	logChatMessage("for", "Cool! But, you have to do your homework first!", "Doe", "lime");
	logChatMessage("system", "<ins style='color: white' id=doho>Do homework</ins>");
	id("doho").onclick = function() {
		logChatMessage("for", "I'm getting your homework ready...", "Doe", "lime");
		resume();
		closeChat();
		window.setTimeout(function() {
			openMenu("Welcome to your homework!<br><br><br>Question 1:<br>What is my favourite number?<input placeholder=\"Enter it here please...\"> <button id=enter>Go</button>", "Homework");
			id("enter").onclick = function() {
				resume();
				clearChat();
				logChatMessage("for", "You know what, I really don't care.", "Doe", "lime");
				logChatMessage("for", "Just start by eating the cake!", "Doe", "lime");
				logChatMessage("for", "<ins id=etc>I want to eat The Cake</ins>", "YOU", "orange");
				id("etc").onclick = function() {
					fetc();
				}
			}
		}, 500);
	}
}

id("neat").onclick = function() {
	logChatMessage("for", "Eat Cake!", "Doe", "lime");
	window.setTimeout(function() {
		home();
	}, 1000);
}
