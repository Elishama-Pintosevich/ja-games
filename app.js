let btn = document.querySelector(".button-menu")
let check =1;

btn.addEventListener('click', ()=>{
    if(check==1){
        btn.innerHTML=`<ul class="list-unstyled fs-5">
        <li><a style="text-decoration-line:none ;" class="link-body-emphasis" href="#about">about</a></li>
        <li><a style="text-decoration-line:none ;" class="link-body-emphasis" href="#contact">contact</a></li>
        </ul>`,
     check=0
    }
    else[
        btn.innerHTML=`<button class="btn btn-dark text-uppercase"><div class="btn-line">
        <div class="line"></div>
        <div class="line my-1"></div>
        <div class="line"></div>
    </div></button>`,
        check=1
    ]

})


