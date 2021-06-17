enterMode = true;
area.style.background = "brown";
area.style.outlineColor = "rgb(163, 138, 102)";
cheatmode = false;
drawMode(false);

var isone = false;

logChatMessage("for", "What are you doing here? This is supposed to be a bad library!", "John", "magenta");
logChatMessage("for", "<br><ins id=idk>I don't know!</ins> <ins id=idn>I want to be here!</ins>", "YOU", "orange");

var conpro = function() {
	clearChat();
	logChatMessage("for", "Boo! Fine, whatever. Just go to 1000 1000.", "John", "magenta");
	isone = true;
}
var conone = function() {
	clearChat();
	logChatMessage("system", "Congratulations on completing the map!<br><br><button id=rtt>Back to Title Screen</button>");
	id("rtt").onclick = function() {
		logChatMessage("system", "<span style='color: white;'>vicchat.github.io</span><br><span style='color: yellow; font-size: 18px; text-decoration: underline;'>The Random Puffy Thingy and the Big Scary Void</span><br><span style='color: white;'>Electron Edition</span><br><br><span style='color: grey;'><ins id=bad1>Empty Platform</ins><br><ins id=bad2>Import from Library</ins><br><ins id=bad3>Information</ins><br><ins id=bad4>Quit</ins></span>");
		id("bad1").onclick = function() {
			logChatMessage("system", "<span style='color: red;'>&times; Cannot do this now.</span>");
		}
		id("bad2").onclick = function() {
			logChatMessage("system", "<span style='color: red;'>&times; Cannot do this now.</span>");
		}
		id("bad3").onclick = function() {
			logChatMessage("system", "<span style='color: red;'>&times; Cannot do this now.</span>");
		}
		id("bad4").onclick = function() {
			logChatMessage("system", "Leaving the game...");
			window.setTimeout(function() {
				logChatMessage("for", "WHAT DID YOU JUST DO!?!?", "John", "magenta");
				window.setTimeout(function() {
					clearChat();
					area.style.background = "black";
					area.style.outlineColor = "black";
					window.setTimeout(function() {
						conblk();
					}, 1000);
				}, 1000);
			}, 500);
		}
	}
}
var conblk = function() {
	logChatMessage("for", "Where are we now?", "John", "magenta");
	logChatMessage("for", "<ins id=iad>I don't know!</ins> <ins id=idd>The middle of the void</ins>", "YOU", "orange");
	id("iad").onclick = function() {
		clearChat();
		logChatMessage("for", "You Clicked \"Quit\" in the first place!\"", "John", "magenta");
		keebgo();
	}
	id("idd").onclick = function() {
		clearChat();
		logChatMessage("for", "You're smart!", "John", "magenta");
		keebgo();
	}
	var keebgo = function() {
		window.setTimeout(function() {
			logChatMessage("for", "Well, let's see what we can do about our little problem. Any suggestions?", "John", "magenta");
			logChatMessage("for", "<ins id=deb>Run /debug area</ins> <ins id=det>Figure it out yourself!</ins>", "YOU", "orange");
			id("deb").onclick = function() {
				logChatMessage("for", "That sounds like a great idea! Let's see if it works!", "John", "magenta");
				window.setTimeout(function() {
					teleport(50, 50);
					area.style.background = "rgb(0, 175, 5";
					area.style.outlineColor = "grey";
					clearChat();
					logChatMessage("for", "Ahh, there we go! Much better, but still not as cool as the other platform. I will fix it. Hang on a second...", "John", "magenta");
					logChatMessage("for", "<ins id=kkk>Ok</ins>", "YOU", "orange");
					id("kkk").onclick = function() {
						clearChat();
						area.style.background = "brown";
						area.style.outlineColor = "rgb(163, 138, 102)";
						logChatMessage("for", "Good. Anyways, I hope this was a fun library!", "John", "magenta");
						logChatMessage("for", "<ins id=end>This is the end?</ins>", "YOU", "orange");
						id("end").onclick = function() {
							logChatMessage("for", "Yes! It is what were you hoping for? This wasn't even supposed to be a library! If you want, you could get a <span style='color: orange;'><ins id=bom>bonus</ins></span>...", "John", "magenta");
							id("bom").onclick = function() {
								closeChat();
								resume();
								window.setTimeout(function() {
									openMenu("<h1>Go Away!</h1>Go Away! Go Away! Go Away! Go Away! Go Away! Go Away! Go Away! Go Away! Go Away! Go Away! Go Away! Go Away! Go Away! Go Away! Go Away! Go Away! Go Away! Go Away! Go Away! Go Away! Go Away! Go Away! Go Away! Go Away! Go Away! Go Away! Go Away! Go Away! Go Away! Go Away! Go Away! Go Away! Go Away! Go Away! Go Away! Go Away! Go Away! Go Away! Go Away! Go Away! Go Away! Go Away! Go Away! Go Away! Go Away! Go Away! Go Away! Go Away! Go Away! Go Away! Go Away! Go Away! Go Away! Go Away! Go Away! Go Away! Go Away! Go Away! Go Away! Go Away! Go Away! Go Away! Go Away! Go Away! Go Away! Go Away! Go Away! Go Away! Go Away! Go Away! Go Away! Go Away! Go Away! Go Away! Go Away! Go Away! Go Away! Go Away! Go Away! Go Away! Go Away! Go Away! Go Away! Go Away! Go Away! Go Away! Go Away! Go Away! Go Away! Go Away! Go Away! Go Away! Go Away! Go Away! Go Away! Go Away! Go Away! Go Away! Go Away! Go Away! Go Away! Go Away! Go Away! Go Away! Go Away! Go Away! Go Away! Go Away! Go Away! Go Away! Go Away! Go Away! Go Away! Go Away! Go Away! Go Away! Go Away! Go Away! Go Away! Go Away! Go Away! Go Away! Go Away! Go Away! Go Away! Go Away! Go Away! Go Away! Go Away! Go Away! Go Away! Go Away! Go Away! Go Away! Go Away! Go Away! Go Away! Go Away! Go Away! Go Away! Go Away!<br><br><button onclick='window.location.reload();'>Ok!</button>")
								}, 500);
							}
						}
					}
				}, 1000);
			}
			id("det").onclick = function() {
				logChatMessage("for", "Oh, I see how it is. Let me think. Hmm...", "John", "magenta");
				window.setTimeout(function() {
					logChatMessage("for", "I could try killing you and see if it works when you respawn!", "John", "magenta");
					window.setTimeout(function(){
						you_died("Just testing to see if this works! Looks like it didn't!");
					}, 1000);
				}, 2999);
			}
		}, 1000);
	}
}

id("idn").onclick = function() {
	clearChat();
	logChatMessage("for", "Sorry but that is not allowed. Or is it?", "John", "magenta");
	logChatMessage("for", "<ins id=pro>Probably</ins>", "YOU", "orange");
	id("pro").onclick = function() {
		conpro();
	}
}
id("idk").onclick = function() {
	clearChat();
	logChatMessage("for", "Good! Because I don't know why I'm here either! Is this fun or what?", "John", "magenta");
	logChatMessage("for", "<ins id=pro2>What</ins>", "YOU", "orange");
	id("pro2").onclick = function() {
		conpro();
	}
}

window.setInterval(function() {
	if (isone === true) {
		if (playerX === 1000 && playerY === 1000) {
			conone();
			isone = false;
		}
	}
}, 10);
