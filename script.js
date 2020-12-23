var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.getElementsByTagName("li");
var deleteBtn = document.getElementsByTagName("button");

function createDeleteBtn() {
	for(var i = 0; i < li.length; i++) {
		var btn = document.createElement("button");
		btn.appendChild(document.createTextNode("Delete"));
		li[i].appendChild(btn);
		li[i].style.margin = "10px";
	}
}

function deleteItem(event) {
	var item = event.target;
	if(item.tagName === "BUTTON") {
		item.parentNode.remove(ul);
		// console.log(item.parentNode);
	}
}

function lineThrough(event) {
	var item = event.target;
	if(item.tagName === "LI") {
		item.classList.toggle("done");
	}
}

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	var btn = document.createElement("button");
	btn.appendChild(document.createTextNode("Delete"));
	li.appendChild(btn);
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", lineThrough);

createDeleteBtn();

ul.addEventListener("click", deleteItem);