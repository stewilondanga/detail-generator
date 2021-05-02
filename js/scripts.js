/*var navigate = (function() {
	$('.dd').toggle();
	$('.dd_btn').click(function() {
		var dataName = $(this).attr('data-name');
		$('.dd').hide();
		$('.' + dataName).toggle();
	});
})();

var main = document.getElementById("main");
var generator = document.getElementById("generator");
var gallery = document.getElementById("gallery");

function switchGenerator() {
	gallery.style.display = "none";
	generator.style.display = "block";
}

function switchGallery() {
	generator.style.display = "none";
	gallery.style.display = "block";
}

function switchMenu1() {
	main.style.display = "none";
	gallery.style.display = "block";
}

function switchMenu2() {
	main.style.display = "none";
	generator.style.display = "block";
}

//GENERATOR
var details = document.getElementById("details");
var summary = document.getElementById("summary");

function range() {
	heightD.value=value;
}

//Change Width
function changeW() {
	var widthR = document.getElementById("widthR").value;
	details.style.width = widthR + "px";
}

//Change Height
function changeH() {
	var heightR = document.getElementById("heightR").value;
	details.style.height = heightR + "px";
}

//Change Padding
function changePD() {
	var paddingR = document.getElementById("paddingR").value;
	details.style.padding = paddingR + "px";
}

//Change border
function changeBorder() {
	var select = document.getElementById("border");
	if (select.selectedIndex == "1") {
		details.style.borderStyle = "none";
	} else if (select.selectedIndex == "2") {
		details.style.borderStyle = "hidden";
	} else if (select.selectedIndex == "3") {
		details.style.borderStyle = "solid";
	} else if (select.selectedIndex == "4") {
		details.style.borderStyle = "double";
	} else if (select.selectedIndex == "5") {
		details.style.borderStyle = "dotted";
	} else if (select.selectedIndex == "6") {
		details.style.borderStyle = "dashed";
	} else if (select.selectedIndex == "8") {
		details.style.borderStyle = "groove";
	} else if (select.selectedIndex == "9") {
		details.style.borderStyle = "ridge";
	} else if (select.selectedIndex == "10") {
		details.style.borderStyle = "inset";
	} else if (select.selectedIndex == "11") {
		details.style.borderStyle = "outset";
	}
}

//Change Border Width
function changeBorderW() {
	var borderW = document.getElementById("borderW").value;
	details.style.borderWidth = borderW + "px";
}

//Change Border Color
function changeBorderC() {
var colorpicker = document.getElementById("borderC");

details.style.borderColor = colorpicker.value;
}

//Change Font
function changeFont() {
	var select = document.getElementById("font");
	if (select.selectedIndex == "1") {
		details.style.fontFamily = "serif";
	} else if (select.selectedIndex == "2") {
		details.style.fontFamily = "sans-serif";
	} else if (select.selectedIndex == "3") {
		details.style.fontFamily = "monospace";
	} else if (select.selectedIndex == "4") {
		details.style.fontFamily = "cursive";
	} else if (select.selectedIndex == "5") {
		details.style.fontFamily = "fantasy";
	} else if (select.selectedIndex == "6") {
		details.style.fontFamily = "system-ui";
	}
}

//Change Font Size
function changeFontS() {
var rangeF = document.getElementById("fontR");

details.style.fontSize = rangeF.value + "px";
}

//Change Font Color
function changeFontC() {
var colorpicker = document.getElementById("fontC");

details.style.color = colorpicker.value;
}

//Change Background Color
function changeBgC() {
var colorpicker = document.getElementById("bgC");

details.style.backgroundColor = colorpicker.value;
}

//Change content of the tag
function changeC1() {
	var input = document.getElementById("summaryC");
	summary.innerHTML = input.value;
}
function changeC2() {
	var input = document.getElementById("detailsC");
	var detailsContent = document.getElementById("detailsContent");
	detailsContent.innerHTML = input.value;
}

//Generate code inside the textarea
function generateCode() {
	var textarea = document.getElementById("textarea");
	var details = document.getElementById("detailsDIV");

	textarea.value = details.innerHTML;
}
