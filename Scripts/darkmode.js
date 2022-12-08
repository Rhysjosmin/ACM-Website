const  DKMDBtn=document.getElementById('Darkmode_button');
const body=document.querySelector('body')


let darkMode=localStorage.getItem("darkMode");

function darkmode(){
    DKMDBtn.classList.remove('rotate');
    void DKMDBtn.offsetWidth;
    DKMDBtn.classList.add('rotate');
    
    if(DKMDBtn.textContent.includes("dark_mode")){
        body.className='dark'
        DKMDBtn.textContent="light_mode" ;

       
        localStorage.setItem("darkMode","Light");
        
        
    }else if(DKMDBtn.textContent.includes("light_mode")){

        body.className="light"
        DKMDBtn.textContent="dark_mode" ;

        localStorage.setItem("light_mode","Dark");


    }
    console.log(DKMDBtn.textContent)
}






//Prefered Color Scheme from Memory
MemDkMD();

darkmode()
darkmode()
darkmode()

function MemDkMD(){
    if(darkMode=="Light"){
        //enable Light
        body.className="Light"
        DKMDBtn.textContent="dark_mode" ;
        localStorage.setItem("darkMode","Light");


    }else  if(darkMode=="Dark"){
   

        DKMDBtn.textContent="light_mode";

        localStorage.setItem("darkMode","Dark");

    }
}