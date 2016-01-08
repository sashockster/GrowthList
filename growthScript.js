function addItem(){
var hello=document.getElementById("entry").value;
	if(hello==""){
		//if entry is blank then alert
		alert("This is blank, please try again")
	}
	else{
		addItemFunction(hello)
	}
}

function addItemFunction(hello){
//maybe add an id so when we delete a div, it will delete automatically
 var html = '<div class="entry"><input type="checkbox" onclick="entryComplete(this)" />'+hello+'<input id="remove-btn" type="image"  src="edit-icon.png" onclick="removeItem(this)"/></div>';
 $(".container").append(html)
}
function removeItem(btnItem){
    var r = confirm("Are you sure you would like to delete this?");
	
    if (r == true) {
		$(btnItem.parentElement).remove();
}
}

function entryComplete(entryName){
alert("Good Job!")
//Move the div to Completed
	$(entryName.parentElement).appendTo(".completed");
	$(entryName.parentElement).removeClass('entry').addClass('completed-entry');
	$(entryName.parentElement.children).remove();
}
