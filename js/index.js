// Your code goes here
var btn = document.querySelectorAll('.btn');
var modal = document.querySelector(".modal");



btn.forEach(btn => btn.addEventListener('mousedown', event => {
    modal.style.display = 'block';
   
}));

var span = document.getElementsByClassName("close")[0];



span.onclick = function() {
  modal.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

const pageImages = document.querySelectorAll('img');

pageImages.forEach(image => image.addEventListener('mouseenter', event =>{
    event.target.style.filter = 'invert(1)';
    
}));

pageImages.forEach(image => image.addEventListener('mouseout', event =>{
    event.target.style.filter = 'none';
    
}));











