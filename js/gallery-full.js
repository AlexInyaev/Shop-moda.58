var itemFull = document.querySelector('.gallery-full');


function testclick (id){
	console.log (id);
	
itemFull.style.display="block";
itemFull.style.backgroundImage = document.getElementById(id).style.backgroundImage;
}
function galClose() {
	itemFull.style.display="none";
}
