
let phone = document.querySelectorAll(".Phone");
let laptop = document.querySelectorAll(".Laptop");
let speaker = document.querySelectorAll(".Speaker");
let tv = document.querySelectorAll(".TV");
let computer = document.querySelectorAll(".Computer");
let drone = document.querySelectorAll(".Drone");
let headphone = document.querySelectorAll(".Headphone");
let Tablet = document.querySelectorAll(".Tablet");
let cooler = document.querySelectorAll(".Cooler");
let washing = document.querySelectorAll(".Washing");
let watch = document.querySelectorAll(".Watch");



let allclass = document.querySelectorAll(".data_item");

let head_title = document.querySelector("#view_title");

const all_f = document.querySelector("#all_f");
const phone_f = document.querySelector("#mobile_f");
const laptop_f = document.querySelector("#laptop_f");
const speaker_f = document.querySelector("#speaker_f")
const tv_f = document.querySelector("#tv_f");
const computer_f = document.querySelector("#computer_f");
const drone_f = document.querySelector("#drone_f");
const headphone_f = document.querySelector("#headphone_f");
const tablet_f = document.querySelector("#tablet_f");
const watch_f = document.querySelector("#watch_f");
const cooler_f = document.querySelector("#cooler_f");
const washin_f = document.querySelector("#washin_f")

// All Product
all_f.addEventListener("click",()=>{
    head_title.innerText ="All Products";

        for(let i=0; i< allclass.length; i++){
        allclass[i].style.display="block";
    }
});

// Computer
computer_f.addEventListener("click",()=>{
    head_title.innerText="Computer";

        for(let i=0; i< allclass.length; i++){
        allclass[i].style.display="none";
    }

        for(let i=0; i< computer.length; i++){
        computer[i].style.display="block";
    }
});

// Drone & Cemeras
drone_f.addEventListener("click",()=>{
    head_title.innerText="Drone & Cemeras";

        for(let i=0; i< allclass.length; i++){
        allclass[i].style.display="none";
    }

        for(let i=0; i< drone.length; i++){
        drone[i].style.display="block";
    }
});

// Headphone
headphone_f.addEventListener("click",()=>{
    head_title.innerText="Headphone";

        for(let i=0; i< allclass.length; i++){
        allclass[i].style.display="none";
    }

        for(let i=0; i< headphone.length; i++){
        headphone[i].style.display="block";
    }
});


// Mobile 
phone_f.addEventListener("click",()=>{
    head_title.innerText="Mobile";

        for(let i=0; i< allclass.length; i++){
        allclass[i].style.display="none";
    }

        for(let i=0; i< phone.length; i++){
        phone[i].style.display="block";
    }
});

// Laptop
laptop_f.addEventListener("click",()=>{
    head_title.innerText="Laptop";

        for(let i=0; i< allclass.length; i++){
        allclass[i].style.display="none";
    }

        for(let i=0; i< laptop.length; i++){
        laptop[i].style.display="block";
    }
});

// Speaker
speaker_f.addEventListener("click",()=>{
    head_title.innerText="Bluetooth Speaker";

        for(let i=0; i< allclass.length; i++){
        allclass[i].style.display="none";
    }

        for(let i=0; i< speaker.length; i++){
        speaker[i].style.display="block";
    }
});

// Tablet
tablet_f.addEventListener("click",()=>{
    head_title.innerText="Tablet";

        for(let i=0; i< allclass.length; i++){
        allclass[i].style.display="none";
    }

        for(let i=0; i< Tablet.length; i++){
        Tablet[i].style.display="block";
    }
});

// TV
tv_f.addEventListener("click",()=>{
    head_title.innerText="Smart Android T.V";

        for(let i=0; i< allclass.length; i++){
        allclass[i].style.display="none";
    }

        for(let i=0; i< tv.length; i++){
        tv[i].style.display="block";
    }
});

// Watch
watch_f.addEventListener("click",()=>{
    head_title.innerText="Smart Watch";

        for(let i=0; i< allclass.length; i++){
        allclass[i].style.display="none";
    }

        for(let i=0; i< watch.length; i++){
        watch[i].style.display="block";
    }
});

// cooler
cooler_f.addEventListener("click",()=>{
    head_title.innerText="Cooler";

        for(let i=0; i< allclass.length; i++){
        allclass[i].style.display="none";
    }

        for(let i=0; i< cooler.length; i++){
        cooler[i].style.display="block";
    }
});

// Washing Machine
washin_f.addEventListener("click",()=>{
    head_title.innerText="Washing Machine";

        for(let i=0; i< allclass.length; i++){
        allclass[i].style.display="none";
    }

        for(let i=0; i< washing.length; i++){
        washing[i].style.display="block";
    }
});