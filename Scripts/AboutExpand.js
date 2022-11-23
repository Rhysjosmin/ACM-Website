const About=document.getElementById("aboutContainer");
const AboutBG=document.getElementById("AboutBG");

function ABOUT(){
    if(About.classList.contains("visible")){
        About.classList.remove('visible');
        void DKMDBtn.offsetWidth;
        About.classList.add('invisible');
        AboutBG.style.backdropFilter = "blur(0px)"  
        AboutBG.style.background = "#00000000"  
        AboutBG.style.pointerEvents= 'none';  
        
    }else{
        AboutBG.style.background = "#000000bb"  
        About.classList.remove('invisible');
        void DKMDBtn.offsetWidth;
        About.classList.add('visible');
        AboutBG.style.backdropFilter = "blur(5px)" 
        AboutBG.style.pointerEvents= 'all'; 
    }

    
}

