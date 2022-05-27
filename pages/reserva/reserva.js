
const conteudoTopo = document.querySelector('.container-conteudo-header-topo')

const header = document.querySelector('header')

const nav = document.querySelector('header nav')


const toggle = document.querySelectorAll('header nav div.toggle')

const itensMenu = document.querySelectorAll('header nav ul li')

const linkHeader = document.querySelectorAll('header nav ul li a')


window.addEventListener('scroll',function(){
  if(scrollY >= 50){
  
    header.style.boxShadow = '#11111170 1px 1px 8px'
    conteudoTopo.classList.remove('container-conteudo-header-topo')
    conteudoTopo.classList.add('desaparecer')
    linkHeader.style.color = 'black'
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
