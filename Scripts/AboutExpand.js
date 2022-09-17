const About=document.getElementById("about");

function ABOUT(){
    if(About.classList.contains("visible")){
        About.classList.remove('visible');
        void DKMDBtn.offsetWidth;
        About.classList.add('invisible');
    }else{
        About.classList.remove('invisible');
        void DKMDBtn.offsetWidth;
        About.classList.add('visible');
    }

    
}