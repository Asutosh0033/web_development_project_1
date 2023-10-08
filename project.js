burger = document.querySelector('.burger')
navbar = document.querySelector('#navbar')
middle = document.querySelector('#middle')
logo = document.querySelector('#logo')
 


burger.addEventListener('click', ()=>{
    logo.classList.toggle('v-class');
    middle.classList.toggle('v-class');
    navbar.classList.toggle('v-height');
    
})