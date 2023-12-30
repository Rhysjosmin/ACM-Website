const MainImage =document.getElementById('MainImageImage')



window.onscroll=e=>{
    // console.log(window.scrollY)
    // console.log(screen.height)
        // translate: 0 -100px;

    MainImage.style.transform=`translate(0,${-window.scrollY/4}px)`
}