var swiper=new Swiper(".home-slider",{
    grabCursor:true,
    loop:true,
    centredSlides:true,
    autoplay:{
        delay:5000,
        disableOnInteraction:false,
    },

})

var swiper=new Swiper(".room-slider",{
    spaceBetween:20,
    grabCursor:true,
    loop:true,
    centredSlides:true,
    autoplay:{
        delay:7500,
        disableOnInteraction:false,
    },
pagination:{
   el:".swiper-pagination",
   clikable:true,
},
breakpoints:{
    0:{
        slidesPerView:1,
    },
    768:{
        slidesPerView:2,
    },
    991:{
        slidesPerView:3,
    },
},
})

let accordions =document.querySelectorAll('.faqs .row .content .box')

accordions.forEach(acco =>{
    acco.onclick=()=>{
        accordions.forEach(subAcco=>{
            subAcco.classList.remove('active')
        })
        acco.classList.add('active')
    }
})