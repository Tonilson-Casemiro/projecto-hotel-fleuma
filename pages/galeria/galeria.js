const conteudoTopo = document.querySelector('.container-conteudo-header-topo')



window.addEventListener('scroll',function(){
  if(scrollY >= 50){
  
    header.style.boxShadow = '#11111170 1px 1px 8px'
    conteudoTopo.classList.remove('container-conteudo-header-topo')
    conteudoTopo.classList.add('desaparecer')
    logo.classList.add('cor-primaria')
    linkHeader.style.color = 'black'
  }
  else{
    conteudoTopo.classList.add('container-conteudo-header-topo')
    conteudoTopo.classList.remove('desaparecer')
    header.style.boxShadow = ''
  

  }
})
