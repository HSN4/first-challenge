let x =document.querySelector('.toggler')
let ull = document.querySelector('nav ul')
x.onclick=function(){
    x.classList.toggle('active')
    ull.classList.toggle('active')
}
