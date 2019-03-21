var itemFull = document.querySelector('.gallery-full');
console.log(itemFull);
function testclick (id){
	
itemFull.style.display="block";
itemFull.style.backgroundImage = document.getElementById(id).style.backgroundImage;
}
function galClose() {
	itemFull.style.display="none";
}
