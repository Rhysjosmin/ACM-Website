
// setInterval(()=>changeImg(),4500);
const img =document.getElementById('Heroimg');
let i=2;
const MAXIMG=9
const MINIMG=2
const ending =".webp"
function changeImg(){
    //img.classList.remove('ani1');
    //void img.offsetWidth;
    //img.classList.add('ani1');
    
    img.src='./media/Img/Slideshow/Img_'+i.toString().concat(ending)
    i++;

 
    if(i>MAXIMG){
        i=MINIMG;
    }
}

function NextImg(){
    img.src='./media/Img/Slideshow/Img_'+i.toString().concat(ending)
    i++;

 
    if(i>MAXIMG){
        i=MINIMG;
    }

}

function PrevImg(){
    img.src='./media/Img/Slideshow/Img_'+i.toString().concat(ending)
    i--;

 
    if(i<MINIMG){
        i=MAXIMG;
    }
}

//Hero

const Hero=document.getElementById('Hero')

// Hero.onmousedown=e=>{
//     Hero.dataset.mouseDownAt=e.clientX;

// }

// Hero.onmousemove=e=>{
//     if(Hero.dataset.mouseDownAt==="0") return;
//     const mouseDelta = parseFloat(Hero.dataset.mouseDownAt)-e.clientX,
//         maxDelta=window.innerWidth/2;

//     const percentage =Math.abs(Math.round((mouseDelta/maxDelta)*(MAXIMG-MINIMG)))
//     if(MINIMG<percentage<(MAXIMG)){
//         i=percentage
//     }else{
//         i=MINIMG
//     }
//     console.log(percentage)
//     if(percentage>0) NextImg(); else PrevImg();
// }
// Hero.onmouseup=()=>{
//     Hero.dataset.mouseDownAt="0"
// }


Hero.ontouchstart=e=>{
    Hero.dataset.mouseDownAt=e.changedTouches[0].clientX
    // console.log(percentage)

}

// Hero.ontouchmove=e=>{
//     // if(Hero.dataset.mouseDownAt==="0") return;
//     // const mouseDelta = parseFloat(Hero.dataset.mouseDownAt)-e.clientX,
//     //     maxDelta=window.innerWidth/2;

//     // const percentage =(mouseDelta/maxDelta)*100
//     // console.log(percentage)
//     // if(percentage>0) NextImg(); else PrevImg();
// }
Hero.ontouchend=e=>{
    // console.log(e.changedTouches[0].clientX)
    if(Hero.dataset.mouseDownAt==="0") return;
    const mouseDelta = parseFloat(Hero.dataset.mouseDownAt)-e.changedTouches[0].clientX
        maxDelta=window.innerWidth/2;

    const percentage =(mouseDelta/maxDelta)

    console.log(percentage)

    if(percentage>0) NextImg(); else PrevImg();
    Hero.dataset.mouseDownAt="0"
    
}
