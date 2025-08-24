
let res = document.querySelector(".responsive");
let logo = document.querySelector("#manu");
let icon = document.querySelector("#cross");
logo.addEventListener("click",()=>{
    res.style.marginLeft = "0px";
    logo.style.display = "none";
    icon.style.display = "inline";
     
})

icon.addEventListener("click",()=>{
   res.style.marginLeft = "-300px";
   res.style.transition= "0.5s";
   logo.style.display = "inline";
   icon.style.display = "none";
})

/* Card */
const swiper = new Swiper('.slider-wrapper', {
    loop:true,
    grabCurson: true,
    spaceBetween: 30,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
      dynamicBullects:true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints:{
        0: {
            slidesPerView: 1
        },
        450: {
            slidesPerView: 2
        },
        800: {
            slidesPerView: 3
        },
        1200: {
            slidesPerView: 4
        },
        1600: {
            slidesPerView: 5
        }
    }
  });

  const swiper2 = new Swiper('.slider-wrapper2', {
    loop:true,
    grabCurson: true,
    spaceBetween: 30,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
      dynamicBullects:true,
    },
  
    // Navigation arrows
    navigation: {
      nextE2: '.swiper-button-next',
      prevE2: '.swiper-button-prev',
    },

    breakpoints:{
        0: {
            slidesPerView: 1
        },
        450: {
            slidesPerView: 2
        },
        800: {
            slidesPerView: 3
        },
        1200: {
            slidesPerView: 4
        },
        1600: {
            slidesPerView: 5
        }
    }
  });

const add_card = document.querySelector("#add_to_card_div");
const show = document.querySelector(".add_cast_place");
const hide = document.querySelector(".cross_card");

const add_btn = document.querySelectorAll(".btn-dark");

add_card.addEventListener("click",()=>{
    show.style.display="block";
});

hide.addEventListener("click",()=>{
    show.style.display="none";
})


add_btn.forEach(button=>{
   button.addEventListener("click",(e)=>{
   let card_div = document.createElement("div");
   show.appendChild(card_div);
   card_div.innerHTML=`
                        <div class="add_card_format">
                         <img src="/Image/Phone_image/image_1_iPhone.jpg" class="add_card_imgSize">
                         <p>Add to iPhone </p>
                         <i class="fa-solid fa-trash" id="del"></i>
                        </div>
   `;
   
    const del = document.querySelectorAll("#del");
    del.forEach(i=>{
        i.addEventListener("click",(e)=>{
        card_div.style.display="none";
        console.log(e);
    })
    })
    
   });
    
});

