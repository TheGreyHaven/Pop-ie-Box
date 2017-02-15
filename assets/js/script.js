
// window.addEventListner("load", drag_start, false);

function _(id) {
		return document.getElementById(id);
	} 
	// this allows us to just write _() instead of getElementById

function drag_start(event) {
	event.dataTransfer.dropEffect ="move";
	event.dataTransfer.setData("text", event.target.getAttribute('id'));
}

function drag_drop(event) {
	event.preventDefault();
	var elem_id = event.dataTransfer.getData("text");
	//here we are retreiving the data that we set earlier in the drag_start function. This gives us the element id that is being dropped into the drop zone. 
	event.target.appendChild( _(elem_id) );
	//event.target is the drop zone object. appendChild is adding the element to it (vie it's id) now that element lives in the drop zone. 
	// _(elem_id).removeAttribute("draggable");
	//this makes it so that the element which is now in place in the drop zone can't be draged back out. 
	// _(elem_id).style.cursor = "default";
	//now the curser is back to it's default and no longer telling people that the object can be moved. 
}


// function readDropZone () {
// 	for (var i = 0; i < _("canvas").children.length; i++) {
// 		alert(_("canvas").children[i].id+" is in the drop zone");
// 	}
// }
