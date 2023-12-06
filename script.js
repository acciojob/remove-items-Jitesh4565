//your JS code here. If required.
function removeColor(){
	const options=document.getElementById('colorSelect');
	const color=options.selectedIndex;
	options.remove(color);
	
}