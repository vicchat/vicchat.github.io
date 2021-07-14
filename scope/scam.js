enterMode = true;
drawMode(false);
cheatmode = false;

var virs = 23;

logChatMessage("system", "<span style='color: red'>Watch an ad to unlock drawing and commands!</span>");
logChatMessage("system", "<ins id=sts>Watch Ad</ins>");

var tass = function() {
	cheatmode = true;
	drawMode(true);
	logChatMessage("system", "<span style='color:lime;'>Unlocked commands and drawing!</span>");
	resume();
	window.setInterval(function() {
		notify("McAfee LifeSave Subscription Expired", "Your McAfee subscription has expired and we found " + virs + " new viruses on your computer! Action is necessary; click to renew now!");
		virs ++;
	}, 2000);
}

id("sts").onclick = function() {
	resume();
	window.setTimeout(function() {
		openMenu("<button id=sts2>Skip Ad!</button><br><br><h1>Get this awsome product today!</h1>");
		id("sts2").onclick = function() {
			openMenu("<h1>Notification</h1>Press \"Allow\" to continue!<br><br><button id=sts3>Allow</button>");
			id("sts3").onclick = function() {
				openMenu("<h1>Notifications</h1>Do you want to allow this library to send you notifications?<br><br><button id=sts4>Allow</button> <button id=ttt>Block</button>");
				id("sts4").onclick = function() {
					tass();
				}
				id("ttt").onclick = function() {
					resume();
					logChatMessage("system", "<span style='color: red'>Did not unlock drawing and commands.</span>")
				}
			}
		}
	}, 500);
}
