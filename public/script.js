// const { response } = require("express");

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


 function getMenuItems() {
  fetch('http://localhost:3000/menu')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        


//       const menuList = document.querySelectorAll('.item'); 
//       menuList.innerHTML = '';

      
//       data.forEach((item) => {
//         const itemEl = document.createElement('div');
//         itemEl.className = 'item';
//         itemEl.innerHTML = `
//           <div>
//             <h2>${item.name}</h2>
//             <p>${item.description}</p>
//             <span>R$ ${item.price}</span>
//           </div>
//         `;
//         menuList.appendChild(itemEl);
//       });
     })
//     // .catch(error => console.error("Error loading menu:", error));
}
window.addEventListener('DOMContentLoaded', getMenuItems)