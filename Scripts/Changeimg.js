
setInterval(()=>changeImg(),4500);
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