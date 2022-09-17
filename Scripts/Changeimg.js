
setInterval(()=>changeImg(),4000);
const img =document.getElementById('Heroimg');
let i=2;
const MAXIMG=9
function changeImg(){
    img.classList.remove('ani1');
    void img.offsetWidth;
    img.classList.add('ani1');
    
    img.src='./media/Img/Img_'+i.toString().concat(".jpg")
    i++;

 
    if(i==MAXIMG){
        i=1;
    }
}