const  DKMDBtn=document.getElementById('Darkmode_button');
const body=document.querySelector('body')

let darkMode=localStorage.getItem("darkMode");


function darkmode(){
    DKMDBtn.classList.remove('rotate');
    void DKMDBtn.offsetWidth;
    DKMDBtn.classList.add('rotate');
    
    if(DKMDBtn.textContent.includes("light_mode")){
        body.className="hive"
        DKMDBtn.textContent="dark_mode" ;

        DKMDBtn.classList.add('HIVE')
        localStorage.setItem("darkMode","Light");
        
        
    }else if(DKMDBtn.textContent.includes("dark_mode")){
        body.className="dark"
        DKMDBtn.textContent="hive" ;

        localStorage.setItem("darkMode","Dark");


    }else if(DKMDBtn.textContent.includes("hive")){
        body.className="other"
        DKMDBtn.textContent="light_mode" ;
        localStorage.setItem("darkMode","Other");


    }
    console.log(DKMDBtn.textContent)
}


if (window.matchMedia) {
    if(window.matchMedia('(prefers-color-scheme: dark)').matches){
        body.className="dark"
        DKMDBtn.textContent="hive" ;
    } 
  } 



//Prefered Color Scheme from Memory
MemDkMD();

function MemDkMD(){
    if(darkMode=="Dark"){
        //enable Dark
        body.className="dark"
        DKMDBtn.textContent="hive" ;
        localStorage.setItem("darkMode","Dark");


    }else  if(darkMode=="Light"){
        //enable Light
        body.className="hive"
        DKMDBtn.textContent="dark_mode" ;

        DKMDBtn.classList.add('HIVE')
        localStorage.setItem("darkMode","Light");

    }else  if(darkMode=="Other"){
        //enable Other
        body.className="other"
        DKMDBtn.textContent="light_mode" ;
        localStorage.setItem("darkMode","Other");
    }
}