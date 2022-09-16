function darkmode(){
    DKMDBtn=document.getElementById('Darkmode_button');
    if(DKMDBtn.textContent.includes("light_mode")){
        DKMDBtn.textContent="dark_mode" ;
    }else if(DKMDBtn.textContent.includes("dark_mode")){
        DKMDBtn.textContent="light" ;
    }else if(DKMDBtn.textContent.includes("light")){
        DKMDBtn.textContent="light_mode" ;
    }
    console.log(DKMDBtn.textContent)
}