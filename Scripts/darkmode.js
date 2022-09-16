const  DKMDBtn=document.getElementById('Darkmode_button');
async function darkmode(){
    DKMDBtn.classList.remove('rotate');
    void DKMDBtn.offsetWidth;
    DKMDBtn.classList.add('rotate');
    
    if(DKMDBtn.textContent.includes("light_mode")){
  
        DKMDBtn.textContent="dark_mode" ;
    }else if(DKMDBtn.textContent.includes("dark_mode")){
 
        DKMDBtn.textContent="light" ;
    }else if(DKMDBtn.textContent.includes("light")){
        
        DKMDBtn.textContent="light_mode" ;
    }
    console.log(DKMDBtn.textContent)
}

function animate(){
        
}