const center = document.getElementById('menu-center');
right = document.getElementById('menu-right');
left = document.getElementById('menu-left');
up = document.getElementById('menu-top');
bottom = document.getElementById('menu-bottom');

const theme = document.getElementById('theme');
const nav = document.getElementById('navbar');
const menu = document.getElementById('menu');
const view = document.getElementById('menu-right');

const hview = document.getElementById('view');
const help = document.getElementById('help');

 center.addEventListener('click', ()=>{
     
     right.classList.toggle('inactive');
     up.classList.toggle('inactive');
     bottom.classList.toggle('inactive');
     left.classList.toggle('inactive');

     right.classList.toggle('active');
     up.classList.toggle('active');
     bottom.classList.toggle('active');
     left.classList.toggle('active');
 })

 theme.addEventListener('click', () => {
     document.body.classList.toggle('dark');
     nav.classList.toggle('dark');
     theme.classList.toggle('dark');
     menu.classList.toggle('dark');
 })

 hview.addEventListener('mouseover', () =>{
    hview.classList.toggle('hide')
 })

 window.setInterval(() =>{
    //  if(hview.classList.contains('hide')){
    //      help.classList.add('hide')
    //  }
    //  else{
    //      help.classList.remove('hide')
    //  }
     if(hview.offsetHeight >= "400"){
        help.classList.remove('hide')
    }
    else{
        help.classList.add('hide')
    }
 }, 500)