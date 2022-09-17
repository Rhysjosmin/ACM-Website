const  DKMDBtn=document.getElementById('Darkmode_button');
const body=document.querySelector('body')
function darkmode(){
    DKMDBtn.classList.remove('rotate');
    void DKMDBtn.offsetWidth;
    DKMDBtn.classList.add('rotate');
    
    if(DKMDBtn.textContent.includes("light_mode")){
        body.className="hive"
        DKMDBtn.textContent="dark_mode" ;

        DKMDBtn.classList.add('HIVE')
        
        
    }else if(DKMDBtn.textContent.includes("dark_mode")){
        body.className="dark"
        DKMDBtn.textContent="hive" ;
    }else if(DKMDBtn.textContent.includes("hive")){
        body.className="other"
        DKMDBtn.textContent="light_mode" ;
    }
    console.log(DKMDBtn.textContent)
}


if (window.matchMedia) {
    if(window.matchMedia('(prefers-color-scheme: dark)').matches){
        body.className="dark"
        DKMDBtn.textContent="hive" ;
    } 
  } 
