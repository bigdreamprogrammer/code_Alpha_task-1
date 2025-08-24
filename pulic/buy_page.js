let p_info = document.querySelector("#p_info");
let data = document.querySelector(".show_data1");

let p_info2 = document.querySelector("#p_info2");
let data2 = document.querySelector(".show_data2");

let p_info3 = document.querySelector("#p_info3");
let data3 = document.querySelector(".show_data3");

let plus = document.querySelector("#plus1");
let minus = document.querySelector("#minus1");

let plus2 = document.querySelector("#plus2");
let minus2 = document.querySelector("#minus2");

let plus3 = document.querySelector("#plus3");
let minus3 = document.querySelector("#minus3");

let clickCount = 0;

p_info.addEventListener("click",()=>{
    clickCount++;
    if (clickCount % 2){
    data.style.display="block";
    plus.style.display="none";
    minus.style.display="block";
    }
    else{
        data.style.display="none";
        minus.style.display="none";
        plus.style.display="block";
    }  
    
});

let clickCount2 = 0;

p_info2.addEventListener("click",()=>{
    clickCount2++;
    if (clickCount2 % 2){
    data2.style.display="block";
    plus2.style.display="none";
    minus2.style.display="block";
    }
    else{
        data2.style.display="none";
        minus2.style.display="none";
        plus2.style.display="block";
    }  
    
});

let clickCount3 = 0;

p_info3.addEventListener("click",()=>{
    clickCount3++;
    if (clickCount3 % 2){
    data3.style.display="block";
    plus3.style.display="none";
    minus3.style.display="block";
    }
    else{
        data3.style.display="none";
        minus3.style.display="none";
        plus3.style.display="block";
    }  
    
});


const zoom = document.querySelector("#image_size");
const myresult_in = document.querySelector("#myresult");
const myresult_out = document.querySelector("#myresult");
const myresult = document.querySelector("#myresult");

zoom.addEventListener("mouseenter",()=>{
    myresult_in.style.display="block";
    
    zoom.addEventListener("mousemove",(event)=>{
       
        const x = event.offsetX;
        const y = event.offsetY;
        myresult_in.style.backgroundSize="100%";
        myresult.style.setProperty("background-position-x",x + "%");
        myresult.style.setProperty("background-position-y",y + "%");

    })

});

zoom.addEventListener("mouseout",()=>{
    myresult_out.style.display="none";
});