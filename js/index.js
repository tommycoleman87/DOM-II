// Your code goes here
var btn = document.querySelectorAll('.btn');
var modal = document.querySelector(".modal");
var modalText = document.querySelector('.modal-content p')



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

let navs = document.querySelectorAll('a');

navs.forEach(a => a.addEventListener('dblclick', () => {
    modal.style.display = "block";
    modalText.textContent = 'Same Modal, different text';
}));

navs.forEach(a => a.addEventListener('click', () => {
    event.preventDefault();
}))

var headerTxt = document.querySelector('.content-destination h2');
var content = document.querySelector('.content-destination')

headerTxt.addEventListener('mousedown', () => {
    event.target.style.background = 'yellow';
    event.stopPropagation();
}) 

content.addEventListener('mousedown', () => {
    event.target.style.background = 'red';
})


const headerLogo = document.querySelector('.logo-heading');

headerLogo.addEventListener('drag', () => {
    event.target.textContent = 'Struggle Bus';
})

headerLogo.addEventListener('dragend', () => {
    event.target.textContent = 'Fun Bus';
})












