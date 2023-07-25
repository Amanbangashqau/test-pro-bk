var bracketAside;



function finished() {

	var bracketAside = document.getElementsByClassName("brackets");

	


	var j;

	for (j = 0; j < bracketAside.length; j++) {

		



		var i;

		for (i = 0; i < 4; i++) {

			var bracketDiv = document.createElement("DIV");

			bracketDiv.classList.add('corner-bracket');

			bracketAside[j].appendChild(bracketDiv);

		}

		i = 0;

	}



};

var i, panels, tabs;

function changeTabs(tabName) {


	var currentTab = document.getElementById(tabName);
	
	panels = document.querySelectorAll('.tab-box');

	for (i = 0; i < panels.length; i++) {

		panels[i].style.display = 'none';
		currentTab.classList.remove("active");

	}

	currentTab.style.display = 'block';
	currentTab.classList.add("active");

};



$(document).ready(function() {

var form = document.getElementById('p_form');

console.log(form);





	// ini_messages();



});




function ini_messages() {
	
    var bskt_messages = document.querySelectorAll('.message_item');   

    for (let i = 0; i < bskt_messages.length; i++) {

        bskt_messages[i].style.cursor = 'pointer';
        bskt_messages[i].addEventListener("click", function (event) {
            event.preventDefault();
        	event.stopImmediatePropagation()
            return_value(i);
        }
        
        );
    };

};






function return_value(i) {

    console.log("clicked " + i);
    p_form.elements["os3"].value = i;
}

function ini_msgs() {
	var pop_imgs = document.getElementById("message-list");

	// for (i = 0; i < pop_imgs.length; i++) {
	// 	pop_imgs[i].style.display = "none";
	// 				console.log(pop_imgs[i]);

	// }
}


$.fancybox.defaults.loop = "true";
$.fancybox.defaults.scrolling = "false";

// document.getElementById("try").addEventListener("click", function(){document.getElementById("text").innerText = "GeeksforGeeks";});
$(document).ready(function() {
// Create the div element
var secureTransactionDiv = $('<div class="secure_transaction"></div>');

// Insert the div element at the top of the right-aside element
$('.right-aside').prepend(secureTransactionDiv);
});