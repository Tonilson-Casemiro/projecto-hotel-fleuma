const header = document.querySelector('header')

const conteudoTopo = document.querySelector('.container-conteudo-header-topo')

const nav = document.querySelector('header nav')

const logo = document.querySelector('#logotipo')

const toggle = document.querySelectorAll('header nav div.toggle')

const itensMenu = document.querySelectorAll('header nav ul li')

const linkHeader = document.querySelectorAll('header nav ul li a')



window.addEventListener('scroll',function(){
  if(scrollY >= 50){
    header.style.background = ''
    header.style.boxShadow = '#11111170 1px 1px 8px'
    conteudoTopo.classList.remove('container-conteudo-header-topo')
    conteudoTopo.classList.add('desaparecer')
  }
  else{
    conteudoTopo.classList.add('container-conteudo-header-topo')
    conteudoTopo.classList.remove('desaparecer')
    header.style.boxShadow = ''
  

  }
})



for(const element of toggle){
  element.addEventListener('click',function(){
    nav.classList.toggle('show')
  })
}

for(const element of itensMenu){
  element.addEventListener('click', function(){
    nav.classList.remove('show')
  })
}




// parte da galeria de fotos dos quartos


let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}





















      
