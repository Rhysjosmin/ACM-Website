const PastEvents =document.getElementById('EventReports');

PastEvents.onmouseover=e=>{
    // alert(e.clientX)
    Width=e.clientX/window.innerWidth*-100
    PastEvents.scrollLeft=Width
    console.log(Width)
    // PastEvents.animate(
    //     {transform:`translate(${e.clientX,0})`},
    //     {duration:1000}
    // )
}