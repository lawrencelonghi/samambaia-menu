// mantem botao ativo depois de clicado
const btns = document.querySelectorAll('.nav-btn')

  
 function handleBtn() {
    this.classList.toggle('active-btn')

    btns.forEach(btn => {
    if(btn !== this) btn.classList.remove('active-btn');
    });
  }
  
  btns.forEach((btn) =>{
  btn.addEventListener('click', handleBtn)
 })

