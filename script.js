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
    logo.classList.add('cor-primaria')
    linkHeader.style.color = 'black'
  }
  else{
    header.style.background = 'none'
    conteudoTopo.classList.add('container-conteudo-header-topo')
    conteudoTopo.classList.remove('desaparecer')
    logo.classList.remove('cor-primaria')
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

