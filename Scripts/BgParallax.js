const BgGraph =document.getElementById('BgGraph')

window.onscroll=e=>{
    console.log(window.pageYOffset/window.innerHeight )
    BgGraph.animate(
        {transform:`translate(0,${(window.pageYOffset/window.innerHeight)*-50}px)`}
    ,{
        duration:1200,fill:'forwards'
    }
        )
}