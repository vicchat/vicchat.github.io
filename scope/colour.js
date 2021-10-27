enterMode = true;

var newVoidColourMenu = document.createElement("div");
	newVoidColourMenu.classList.add("menu");
	newVoidColourMenu.style.zIndex = 12;
	newVoidColourMenu.setAttribute("id", "voidColourMenu");
	newVoidColourMenu.innerHTML = `
<div class="h1">Custom Colours</div>
<input type="color" value="#000000" id="custom-void-colour">
<label for="custom-void-colour">Void Colour</label>

<br><br><input type="color" value="#00af05" id="custom-area-colour">
<label for="custom-area-colour">Platform Background Colour</label>

<br><br><input type="color" value="#808080" id="custom-outline-colour">
<label for="custom-outline-colour">Platform Outline Colour</label>

<br><br>
Choose a colour from the colour picker. No need to remember to set it &mdash; it will save automatically`;
document.body.appendChild(newVoidColourMenu);

var voidColourMenu = document.getElementById("voidColourMenu");
voidColourMenu.style.display = "none";

window.setInterval(function() {
	html.style.background = document.getElementById("custom-void-colour").value;
	area.style.background = document.getElementById("custom-area-colour").value;
	area.style.outlineColor = document.getElementById("custom-outline-colour").value;
}, 10);

settings.innerHTML += `<br><br><h3>Custom Colours</h3><button onclick="voidColourMenu.style.display = 'block'">Custom Colours</button>`;

background.ontouchend = function() {
	document.getElementById("voidColourMenu").style.display = "none";
}

window.onkeydown = function(e) {
	if (e.key === "Escape") {
		document.getElementById("voidColourMenu").style.display = "none";
	}
}
