

async function loadProject1(){
    const {default:project}= await import('../Json/News.json',{
        assert:{
            type:"json"
        }
    })
    AddNEWS(project,'FEEDITEMTEMPLATE','feed');

}

async function loadProject2(){

    const {default:Upcoming}= await import('../Json/UpcomingEvents.json',{
        assert:{
            type:"json"
        }
    })
    AddUpcoming(Upcoming,"UpcommingEventTemplate",'announcments');
}
loadProject2()
loadProject1()

function AddNEWS(project,templateDOM,DestinationDOM){

    const template=document.getElementById(templateDOM)
    const container=document.getElementById(DestinationDOM)
       
    for(var i=0;i<1000;i++)
 {

    let Name=project.News[i].Title
    let Description=project.News[i].Description
    let Link=project.News[i].Link
    content = template.content.cloneNode(true) // the true is for deep cloning

    content.getElementById('FeedTitle').textContent=Name
    content.getElementById('FeedText').textContent=Description
   content.getElementById('Link').href=Link
    container.appendChild(content)
 
 }
 
}


function AddUpcoming(project,templateDOM,DestinationDOM){

    const template=document.getElementById(templateDOM)
    const container=document.getElementById(DestinationDOM)
       
    for(var i=0;i<1000;i++)
 {

    let Title=project.Upcomming[i].Title
    let Presenter=project.Upcomming[i].Presenter
    let Date=project.Upcomming[i].Date
    let Description=project.Upcomming[i].Description
    let Register_Link=project.Upcomming[i].Register_Link
    let ReadMore=project.Upcomming[i].ReadMore
    content = template.content.cloneNode(true) // the true is for deep cloning

    content.getElementById('TITLE').textContent=Title
    content.getElementById('PRESENTER').textContent=Presenter
    content.getElementById('Timing').textContent=Date
    
    content.getElementById('Description').textContent=Description
    
    content.getElementById('RegisterButton').href=Register_Link
    content.getElementById('ReadMoreButton').href=ReadMore
    
    container.appendChild(content)
 
 }
 
}





