const version = "1.3";
const betaguis = false; // Debug enable new menus. This only works if this is changed before being run. It's a constant variable anyway so good luck changing in the dev console.

var playerX = 50;
var playerY = 50;

var inLock = false;
var invincible = false;
var drawmode = true;
var cheatmode = true;
var enterMode = false;
var lastMessage = null;
var spr = false;
var sne = false;
var spp = [50, 50];
var spectator = false;
var infsc = false;
var hudbin = true;

var orientation = (screen.orientation || {}).type || screen.mozOrientation || screen.msOrientation;

var vs = document.getElementsByClassName("v");

for (var i = 0; i < vs.length; i++) {
	vs[i].textContent = version;
}

var col0 = "#ff0000";
var col1 = "#00af05";
var col2 = "#0000ff";
var col3 = "#ffff00";
var col4 = "#000000";

var html = document.querySelector("#html");
var area = document.getElementById("area");
var dotconst = document.getElementById("dotconst");
var puffyThingy = document.getElementById("puffy-thingy");
var pauseMenu12341 = document.getElementById("pause-menu");
var background = document.getElementById("background");
var colcng = document.getElementById("colcng");
var youDied = document.getElementById("you-died");
var start = document.getElementById("start");
var help1 = document.getElementById("help1");
var help2 = document.getElementById("help2");
var chat = document.getElementById("chat");
var chatMessage = document.getElementById("chatmessage");
var settings = document.getElementById("settings");
var plus = document.getElementsByClassName("plus");
var coord = document.getElementById("coord");
var informat = document.getElementById("informat");
var libimport = document.getElementById("libimport");
var titletitle = document.getElementById("titletitle");
var titleaction = document.getElementById("titleaction");
var codemenu = document.getElementById("codemenu");
var background2 = document.getElementById("background2");
var closeit = document.getElementById("closeit");
var notification = document.getElementById("notification");
var modes = document.getElementById("modes");
var blendinen = document.getElementById("blendinen");
var chatbutton = document.getElementById("chatbutton");
var appendChat = document.getElementById("append-chat");
var cotosa = document.getElementById("cotosa");
var cotolo = document.getElementById("cotolo");
var onload = document.getElementById("onload");
var cnglog = document.getElementById("changelog");

var huds = document.getElementsByClassName("hud");

colcng.style.display = "none";
youDied.style.display = "none";
background.style.display = "none";
pauseMenu12341.style.display = "none";
help1.style.display = "none";
help2.style.display = "none";
chatMessage.style.display = "none";
settings.style.display = "none";
coord.style.display = "none";
informat.style.display = "none";
libimport.style.display = "none";
titletitle.style.display = "none";
titleaction.style.display = "none";
codemenu.style.display = "none";
background2.style.display = "none";
notification.style.display = "none";
modes.style.display = "none";
blendinen.style.display = "none";
chat.style.display = "none";
cotosa.style.display = "none";
cotolo.style.display = "none";
cnglog.style.display = "none";

window.setTimeout(function() {
	onload.style.display = "none";
}, 50);

window.setInterval(function() {
	if (orientation === 90 || orientation === -90 || orientation === "landscape-primary" || orientation === "landscape-secondary" || orientation === undefined) {
		document.getElementById("roto").style.display = "none";
	} else {
		roto.style.display = "block";
		background.style.display = "block";
		pauseMenu12341.style.display = "block";
	}
}, 10);

document.addEventListener("pointerlockchange", function() {
	if (inLock === false) {
		inLock = true;
		background.style.display = "none";
	} else if (inLock === true) {
		inLock = false;
		background.style.display = "block";
		pauseMenu12341.style.display = "block";
	}
});

document.addEventListener("fullscreenchange", function() {
	if (infsc === false) {
		infsc = true;
	} else if (infsc === true) {
		infsc = false;
		background.style.display = "block";
		pauseMenu12341.style.display = "block";
	}
});

if (betaguis === false) {
	var closes = document.getElementsByClassName("close");
	for (var i = 0; i < closes.length; i++) {
		closes[i].style.display = "none";
	}
	var notcloses = document.getElementsByClassName("bh");
	for (var i = 0; i < notcloses.length; i++) {
		notcloses[i].style.display = "none";
	}
	document.getElementById("warn").style.display = "none";
}

if (betaguis === true) {
	var menus = document.getElementsByClassName("menu");
	for (var i = 0; i < menus.length; i++) {
		menus[i].style.background = "#2f4f4f88";
		menus[i].style.backdropFilter = "blur(4px)";
		menus[i].style.border = "solid 2px white";
		menus[i].style.borderRadius = "0px";
	}
	pauseMenu12341.classList.add("newmenu");
	document.getElementById("showlab").style.display = "none";
}

var help_text = `
<h4>Introduction</h4>
Welcome to The Random Puffy Thingy and the Big Scary Void! This is a quick overview on how to play!<br><br>
This new guide that I'm apparently so proud of has sections, so if you ever need to learn more about a specific thing, you can look here for that section.
<h4>Platforms</h4>
You can start a default platform by tapping "Empty Platform". This is probably the best option if you're new. You can also "Import From Library" which will import a pre-made level for you.
<h4>Controls</h4>
Once you're in, you can use the on-screen controls to move.
<br><br>
<ul>
<li>Use the left d-pad to move the puffy thingy</li>
<li>Use the right d-pad to move the viewport.</li>
<li>Press the minus (<code>-</code>) to slow down and the plus (<code>+</code>) to speed up. Note that this only applies to the puffy thingy.</li>
<li>Use the buttons in the top right to pause, open the modes menu, and open the settings menu</li>
<li>Use the chat button in the top left to open the chat.</li>
</ul>
<h4>Drawing</h4>
Something else you will notice is the bar of colours at the bottom of the screen. Tap on the colours to draw them on the platform.
<br><br>
There is little square marker next to your player. Dots will always be drawn underneath this so use it as a guide.
<br><br>
If you want to change colours, tap the last button on the colour bar (•••). This will open the edit colours meni where you can choose the colours from the colour pickers. The colours will change when you click "set".
<h4>Navigation</h4>
Menu navigation is very simple. So simple I don't even know why I made a whole section about it. Just click outside the menu. It will then close. Everything else should be pretty self-explanatory.
<h4>The Big Scary Void</h4>
Death. There really is no consequence for it here but it exists anyway. The only way to naturally die is the void. Going into it will kill you, but there are ways to circumvent that. You can stay alive in the void by
<h4>Modes</h4>
There are three modes:<br><br>
<ul>
<li>Default - Void go brrr</li>
<li>Invincible - You can't die. Survive in the void</li>
<li>Spectator - Useless but I wanted to add it anyway.</li>
</ul>
The way you change these is by pressing the modes (<code>=</code>) button.
<h4>Chat & Commands</h4>
In the top left of the screen, you will see a chat button, and clicking it will open the chat.<br><br>
This game does not have multiplayer, so what's the point of the chat? There are a few things:<br><br>
<ul>
<li>Commands</li>
<li>Libraries</li>
</ul>
You can use commands in the chat. If the first character you type is a slash (/), then a box will appear which displays all the possible commands.
<h4>Libraries</h4>
Libraries are pre-made levels that you can play! All you need to do is enter the web address of the library.<br><br>
Libraries are programmed in JavaScript and there are some here that you can try! Visit the <a href="about:blank">import library list</a> to learn more.
<h4>Conclusion</h4>
Congratulations on reading this all the way through! Now you know how to play, feel free to get started!
`;

var helpme = document.getElementsByClassName("helpme");
for (var i = 0; i < helpme.length; i++) {
	helpme[i].innerHTML = help_text;
}

var play = function() {
	document.getElementById("innimg").innerHTML = "Please Wait...";
		document.body.requestFullscreen();
	window.setTimeout(function(){
		start.style.display = "none";
		resume();
	}, 1000);
	syncPos();
}

var resume = function() {
	background.style.display = "none";
	if (start.style.display === "none" && youDied.style.display === "none") {
		pauseMenu12341.style.display = "none";
		colcng.style.display = "none";
		help1.style.display = "none";
		help2.style.display = "none";
		settings.style.display = "none";
		codemenu.style.display = "none";
		modes.style.display = "none";
		cotosa.style.display = "none";
	} else {
		help1.style.display = "none";
		informat.style.display = "none";
		libimport.style.display = "none";
		background2.style.display = "none";
		cotolo.style.display = "none";
		cnglog.style.display = "none";
	}
}

var mayberesume = function() {
	if (betaguis === false) {
		resume();
	}
}

var you_died = function(how_you_died) {
	if (invincible === false) {
		if (youDied.style.display === "none") {
			resume();
			logChatMessage("system", how_you_died);
		}

		giveon2();
		document.getElementById("how-you-died").textContent = how_you_died;
		youDied.style.display = "block";
	}
}

var respawn = function() {
	ax = 50;
	ay = 50;
	playerX = 50;
	playerY = 50;
	area.style.left = ax + "px";
	area.style.top = ay + "px";
	puffyThingy.style.left = playerX + "px";
	puffyThingy.style.top = playerY + "px";
	youDied.style.display = "none";
	syncPos();
}

var giveon = function() {
	window.setTimeout(function(){
		pauseMenu12341.style.display = "none";
	}, 10);
}

var giveon2 = function() {
	window.setTimeout(function(){
		pauseMenu12341.style.display = "none";
		background.style.display = "none";
	}, 10);
}

var setColours = function() {
	col0 = document.getElementById("col0").value;
	col1 = document.getElementById("col1").value;
	col2 = document.getElementById("col2").value;
	col3 = document.getElementById("col3").value;
	col4 = document.getElementById("col4").value;
}

var editPlusSettings = function(numba) {
	notify("", "Function is permanently disabled.")
	/*
	for (var i = 0; i < plus.length; i++) {
		if (numba === 1) {
			plus[i].style.background = "white";
			plus[i].style.backdropFilter = "none";
		} else if (numba === 2) {
			plus[i].style.background = "rgba(0, 0, 0, 0)";
			plus[i].style.backdropFilter = "invert(100%)";
		} else if (numba === 3) {
			plus[i].style.background = "rgba(0, 0, 0, 0)";
			plus[i].style.backdropFilter = "none";
		} else if (numba === 4) {
			plus[i].style.background = "black";
			plus[i].style.backdropFilter = "none";
		}
	}
	*/
}

var draw = function(int) {
	if (drawmode === true) {
		var newdot = document.createElement("div");
			newdot.classList.add("dot");
			newdot.style.left = playerX - 10 + "px";
			newdot.style.top = playerY - 10 + "px";
			if (int === 0) {
				newdot.style.background = col0;
			} else if (int === 1) {
				newdot.style.background = col1;
			} else if (int === 2) {
				newdot.style.background = col2;
			} else if (int === 3) {
				newdot.style.background = col3;
			} else if (int === 4) {
				newdot.style.background = col4;
			}
		dotconst.appendChild(newdot);
	}
}

var logChatMessage = function(type, message, sender, colour) {
	var chatmessage = document.getElementById("chatmessage").value;
	var n = document.createElement("div");
		n.classList.add("chat");
	if (type === "system") {
		n.classList.add("chat-system");
		n.innerHTML = message;
	} else if (type === "from") {
		n.classList.add("chat-from");
		n.textContent = "YOU> " + chatmessage;
		lastMessage = chatmessage;
	} else if (type === "error") {
		n.classList.add("chat-error");
		n.innerHTML = "&#10060;ERROR: " + message; 
	} else if (type === "for") {
		n.style.color = colour;
		n.innerHTML = sender + "> " + message;
	}
	appendChat.appendChild(n);
	chat.scrollBy(0, 1000);
	if (chat.style.display === "none") {
		chatbutton.style.background = "rgba(255, 0, 0, 0.5)";
	}
}

var quit = function() {
	window.close();
	window.setTimeout(function(){
		notify("", "This function is not supported for your browser."); // Tell user thier browser is either stupid or it's the Acode in-app browser
		// document.body.innerHTML = ""; // If browser does not close window make window go bye-bye anyway
	}, 500);
}

var home = function() {
	document.getElementById("onload").style.display = "block";
	window.location.reload();
}

const libinfo = document.getElementById("libimport").innerHTML;
var bypassMode = false;
var prifli = function() {
	var library = document.getElementById("library").value;
	libimport.innerHTML = "Validating...";
	background2.style.display = "block";
	if (library === "/dbg:load") {
		cotolo.style.display = "block";
		libimport.style.display = "none";
		libimport.innerHTML = `<h1>Import from Library</h1>
	<br><br>
	<input type="text" id="library" placeholder="Library Adress" onautocomplete="return false;" spellcheck="false"><br><br><br>
	<button onclick="prifli();">Play!</button>`;
	} else if (library === "/dbg:bypass") {
		enterMode = true;
		libimport.innerHTML = libinfo;
		bypassMode = true;
	} else {
	window.setTimeout(function() {
		library = library + ".js";
		var lib_ry = document.createElement("script");
			lib_ry.setAttribute("src", library);
		document.body.appendChild(lib_ry);
		window.setTimeout(function() {
			// enterMode = true; // debug disabe library verification
			if (enterMode === true || bypassMode === true) {
				background2.style.display = "none";
				libimport.style.display = "none";
				play();
			} else {
				window.setInterval(function(){
					libimport.style.display = "block";
					background2.style.display = "block";
				}, 10);
				lib_ry.setAttribute("src", "");
				document.body.removeChild(lib_ry);
				libimport.style.display = "block";
				background2.style.display = "block";
				libimport.innerHTML = "<h1>Invalid Library</h1>Please check the adress is correct and try again.<br><br><br><br><br><button onclick=\"home();\">Okay</button>";
			}
		}, 1000);
	}, 10);}
}

var title = function(type, text, colour) {
	if (type === "main") {
		titletitle.textContent = text;
		titletitle.style.color = colour;
		titletitle.style.display = "block";
		window.setTimeout(function() {
			titletitle.style.display = "none";
		}, 2000);
	} else if (type === "action") {
		titleaction.textContent = text;
		titleaction.style.color = colour;
		titleaction.style.display = "block";
		window.setTimeout(function() {
			titleaction.style.display = "none";
		}, 2000);
	}
}

var dot = function(colour, xpos, ypos) {
	var newdot = document.createElement("div");
		newdot.classList.add("dot");
		newdot.style.left = xpos + "px";
		newdot.style.top = ypos + "px";
		newdot.style.background = colour;
	dotconst.appendChild(newdot);
}

var drawMode = function(trueorfalse) {
	if (trueorfalse === true) {
		drawmode = true;
		document.getElementById("bar").style.display = "block";
		document.getElementById("plus").style.display = "block"
	} else if (trueorfalse === false) {
		drawmode = false;
		document.getElementById("bar").style.display = "none";
		document.getElementById("plus").style.display = "none";
	}
}

var cotololilo = function() {
	var cotolot = document.getElementById("cotolot").value;
	dotconst.innerHTML = cotolot;
	resume();
	respawn();
	play();
	window.setTimeout(function() {
		pauseMenu12341.style.display = "none";
		background.style.display = "none";
	}, 500);
}

var openMenu = function(text) {
	codemenu.innerHTML = text;
	background.style.display = "block";
	codemenu.style.display = "block";
}

var openChat = function() {
	chatMessage.style.display = "block";
	chat.style.display = "block";
}

var closeChat = function() {
	chatMessage.style.display = "none";
	chatMessage.blur();
	chatMessage.value = "";
	blendinen.style.display = "none";
	chat.style.display = "none";
}

var teleport = function(x, y) {
	playerX = x;
	playerY = y;
	puffyThingy.style.left = playerX + "px";
	puffyThingy.style.top = playerY + "px";
}

var nodismiss = 0;
var notify = function(mai, bod) {
	nodismiss = 0;
	document.getElementById("not-tit").textContent = mai;
	document.getElementById("not-bod").textContent = bod;
	notification.style.display = "block";
}

window.setInterval(function() {
	nodismiss++
	if (nodismiss >= 500) {
		notification.style.display = "none";
	}
}, 10);

var spectate = function() {
	if (cheatmode === true) {
		drawMode(false);
		puffyThingy.style.display = "none";
		invincible = true;
		spp = [playerX, playerY];
		spectator = true;
	}
}

var despectate = function() {
	if (spectator === true) {
		drawMode(true);
		playerX = spp[0];
		playerY = spp[1];
		puffyThingy.style.top = playerY + "px";
		puffyThingy.style.left = playerX + "px";
		puffyThingy.style.display = "block";
		spectator = false;
	} else if (spectator === false) {
		return null;
	}
}

var id = function(idee) {
	var theid = document.getElementById(idee);
	return theid;
}

var ax = 0;
var ay = 0;

var loook = function(d, f) {
	if (f === 0 && d !== 0) {
		area.style.transitionProperty = "left";
	} else if (d === 0 && f !== 0) {
		area.style.transitionProperty = "top";
	} else {
		area.style.transitionProperty = "opacity";
	}
	ax += d;
	ay += f;
	area.style.left = ax + "px";
	area.style.top = ay + "px";
	syncPos();
}

var mooove = function(d, f) {
	if (!spr && !sne) {
		playerX += d*10;
		playerY += f*10;
	} else if (spr && !sne) {
		playerX += d*30;
		playerY += f*30;
	} else if (!spr && sne) {
		playerX += d;
		playerY += f;
	} else {
		playerX += d*5;
		playerY += f*5;
	}
	syncPos();
}

var syncPos = function() {
	puffyThingy.style.left = playerX + "px";
	puffyThingy.style.top = playerY + "px";
	document.getElementById("plus").style.left = playerX-21 + "px";
	document.getElementById("plus").style.top = playerY-21 + "px";
	if (playerX * 0 !== 0) {
		playerX = 50;
	}
	if (playerY * 0 !== 0) {
		playerY = 50;
	}
}

var togglehud = function() {
	if (hudbin === false) {
		for (var i = 0; i < huds.length; i++) {
			huds[i].style.opacity = "100%";
		}
		hudbin = true;
		document.getElementById("hudhide").innerHTML = "Hide";
	} else if (hudbin === true) {
		for (var i = 0; i < huds.length; i++) {
			huds[i].style.opacity = "0%"
		}
		hudbin = false;
		document.getElementById("hudhide").innerHTML = "Show";
	}
}

var speed = {
	togglespr: function() {
		var df = document.getElementById("fast");
		if (spr) {
			spr = false;
			df.innerHTML = "+";
		} else if (!spr) {
			spr = true;
			df.innerHTML = "±"
		}
	},
	togglesne: function() {
		var df = document.getElementById("slow");
		if (sne) {
			sne = false;
			df.innerHTML = "-";
		} else if (!sne) {
			sne = true;
			df.innerHTML = "—";
		}
	}
}

var oldnum = 0;
var svchytchten = function() {
	var num = Math.round(Math.random()*12);
	while (num === oldnum) {
		num = Math.round(Math.random()*12);
	}
	var arr = ["none", "invert(100%)", "blur(1px)", "blur(2rem)", "contrast(500%);", "sepia(100%)", "grayscale(100%)", "invert(100%) grayscale(100%)", "saturate(8)", "hue-rotate(27deg)"];
	html.style.filter = arr[num];
	oldnum = num;
}

var parsetp = function(cmd) {
	var num1 = "";
	var num2 = "";
	var num = false;
	for (var i = 4; i < cmd.length; i++) {
		if (cmd[i] === " ") {
			num = true;
			i++;
		}
		
		if (!num) {
			num1 += cmd[i];
		} else if (num) {
			num2 += cmd[i]
		}
	}
		
	return [parseInt(num1), parseInt(num2)];
}

document.getElementById("library").onkeydown = function(e) {
	if (e.key === "Enter") {
		prifli();
	}
}

/*
document.getElementById("cotolot").onkeydown = function(e) {
	if (e.key === "Enter") {
		cotololilo();
	}
}

*/

var cmdtp = function(chatmessage) {
	var doNotLogError = false;
	if (chatmessage === "/tp space") {
		you_died("The Random Puffy Thingy teleported into space");
	} else if (parsetp(chatmessage)[0] * 0 !== 0 || parsetp(chatmessage)[1] * 0 !== 0) {
		doNotLogError = false;
	} else {
		playerX = parsetp(chatmessage)[0];
		playerY = parsetp(chatmessage)[1];
		logChatMessage("system", "Teleported to " + parsetp(chatmessage));
		doNotLogError = true;
		syncPos();
	}
	return doNotLogError;
}

chatMessage.onkeydown = function(e) {
	if (e.key === "Enter") {
		var chatmessage = document.getElementById("chatmessage").value;
		if (chatmessage[0] === "/") {
			var doNotLogError = false;
			if (cheatmode === true) {
				if (chatmessage[0] === "/" && chatmessage[1] === "t" && chatmessage[2] === "p" && chatmessage[3] === " ") {
					doNotLogError = cmdtp(chatmessage);
				}
				if (chatmessage === "/help") {
					window.setTimeout(function() {
		
						giveon();
						help2.style.display = "block";
					}, 500);
				} else if (chatmessage === "/quit") {
					quit();
				} else if (chatmessage === "/set stats true") {
					coord.style.display = "block";
				} else if (chatmessage === "/set stats false") {
					coord.style.display = "none";
				} else if (chatmessage === "/kill") {
					you_died("The Random Puffy Thingy died for no reason.");
					chatMessage.style.display = "none";
				} else if (chatmessage === "/clear") {
					clearChat();
				} else if (chatmessage === "/title") {
					home();
				} else if (chatmessage === "/mode default" || chatmessage === "/mode d" || chatmessage === "/mode 0") {
					despectate();
					invincible = false;
				} else if (chatmessage === "/mode invincible" || chatmessage === "/mode i" || chatmessage === "/mode 1") {
					despectate();
					invincible = true;
				} else if (chatmessage === "/mode spectator" || chatmessage === "/mode s" || chatmessage === "/mode 2") {
					spectate();
				} else if (chatmessage === "/dbg:save") {
					title("action", "Please Wait...");
					window.setTimeout(function() {
						var cotosat = document.getElementById("cotosat");
						cotosat.value = dotconst.innerHTML;
						cotosa.style.display = "block";
						background.style.display = "block";
					}, 1500);
				} else if (chatmessage === "/r" || chatmessage === "/l") {
					playerX = 50;
					playerY = 50;
					puffyThingy.style.top = playerX + "px";
					puffyThingy.style.top = playerY + "px";
					ax = 50;
					ay = 50;
					area.style.left = ax + "px";
					area.style.top = ay + "px";
					logChatMessage("system", "Platfrom Reset");
				} else if (chatmessage === "/hud") {
					togglehud();
				} else if (chatmessage === "/set crosshair") {
					editPlusSettings(0);
				} else {
					if (!doNotLogError) {
						logChatMessage("error", "Invalid command syntax.");
					}
				}
			} else if (cheatmode === false) {
				logChatMessage("error", "Commands disabled.!");
			}
			closeChat();
			resume();
		} else {
			logChatMessage("from");
		}
		chatMessage.value = "";
	}
}

var clearChat = function() {
	appendChat.innerHTML = "<br><button id='closeit' onmousedown='closeChat();'>Close</button>";
}

window.setInterval(function() {
	var chval = document.getElementById("chatmessage").value;
	if (cheatmode === true) {
		var shcom = chval.includes("/");
		var chelp = chval.includes("/help");
		var ckill = chval.includes("/kill");
		var cclear = chval.includes("/clear");
		var ctitle = chval.includes("/title");
		var cquit = chval.includes("/quit");
		var cset = chval.includes("/set");
		var csstat = chval.includes("/set stats");
		var cmode = chval.includes("/mode");
		var chud = chval.includes("/hud");
		var ctp = chval.includes("/tp");

		if (shcom === true) {
			blendinen.style.display = "block";
			blendinen.innerHTML = "Where COMMAND is one of:<br><br>/help - Display the help menu<br>/set - Change a setting<br>/kill - Kill yourself<br>/clear - Clear from something<br>/mode - Change the Mode<br>/l or /r - Reset platfrom<br>/hud - Toggle HUD Visibility<br>/tp - Teleport<br>/title - Return to title screen<br>/quit - Quit the game";
		}

		if (chelp === true) {
			blendinen.style.display = "block";
			blendinen.innerHTML = "Command: /help<br><br>Command will succsessfully display the help menu<br><br>Press ENTER to exicute the command";
		} else if (ckill === true) {
			blendinen.style.display = "block";
			blendinen.innerHTML = "Command: /kill<br><br>Command will succsessfully kill you<br><br>Press ENTER to exicute the command";
		} else if (cclear === true) {
			blendinen.style.display = "block";
			blendinen.innerHTML = "Command: /clear<br><br>Execute - Clears the chat";
		} else if (ctitle === true) {
			blendinen.style.display = "block";
			blendinen.innerHTML = "Command: /title<br><br>Command will succsessfully return to the title screen<br><br>Press ENTER to exicute the command";
		} else if (cquit === true) {
			blendinen.style.display = "block";
			blendinen.innerHTML = "Command: /quit<br><br>Deprecated - Quit the game";
		} else if (cset === true) {
			blendinen.style.display = "block";
			blendinen.innerHTML = "Command: /set <br><br>stats - Show or hide the stats";
		} else if (cmode === true) {
			blendinen.style.display = "block";
			blendinen.innerHTML = "Command: /mode<br><br>default / d / 0<br>invincible / i / 1<br>spectator / s / 2";
		}

		if (csstat === true) {
			blendinen.style.display = "block";
			blendinen.innerHTML = "Command: /set stats<br><br>true<br>false";
		} else if (chud === true) {
			blendinen.style.display = "block";
			blendinen.innerHTML = "Command: /hud<br><br>Toggle Hud";
		} else if (ctp === true) {
			blendinen.style.display = "block";
			blendinen.innerHTML = "Command: /tp &lt;x&gt; &lt;y&gt;<br><br> Replace x and y with position values to teleport.";
		}

		if (shcom !== true) {
			blendinen.style.display = "none";
		}
	}
}, 10);

window.setInterval(function(){
	if (playerX < -90 || playerX > 3040 || playerY < -90 || playerY > 3040) {
		you_died("The Random Puffy Thingy fell off the world.");
	}
}, 10);

window.setInterval(function(){
	document.getElementById("coll0").style.background = col0;
	document.getElementById("coll1").style.background = col1;
	document.getElementById("coll2").style.background = col2;
	document.getElementById("coll3").style.background = col3;
	document.getElementById("coll4").style.background = col4;
	document.getElementById("coordx").textContent = playerX;
	document.getElementById("coordy").textContent = playerY;
	document.getElementById("arx").textContent = ax;
	document.getElementById("ary").textContent = ay;
}, 0);