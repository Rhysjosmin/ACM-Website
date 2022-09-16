const  DKMDBtn=document.getElementById('Darkmode_button');
const body=document.querySelector('body')
function darkmode(){
    DKMDBtn.classList.remove('rotate');
    void DKMDBtn.offsetWidth;
    DKMDBtn.classList.add('rotate');
    
    if(DKMDBtn.textContent.includes("light_mode")){
        body.className="light"
        DKMDBtn.textContent="dark_mode" ;
        
        
    }else if(DKMDBtn.textContent.includes("dark_mode")){
        body.className="dark"
        DKMDBtn.textContent="light" ;
    }else if(DKMDBtn.textContent.includes("light")){
        body.className="other"
        DKMDBtn.textContent="light_mode" ;
    }
    console.log(DKMDBtn.textContent)
}

