

async function loadProject(){
    const {default:project}= await import('../Json/News.json',{
        assert:{
            type:"json"
        }
    })
    AddProject(project)
}

loadProject()

function AddProject(project){
    

    

    const template=document.getElementById('FEEDITEMTEMPLATE')
    const container=document.getElementById('feed')
    

   
    for(var i=0;i<1000;i++)
 {

    let Name=project.Projects[i].Title
    let Description=project.Projects[i].Description
    let Link=project.Projects[i].Link


    
  


    content = template.content.cloneNode(true) // the true is for deep cloning

    content.getElementById('FeedTitle').textContent=Name
    content.getElementById('FeedText').textContent=Description
   content.getElementById('Link').href=Link



   
   
  

   


    container.appendChild(content)

    
 }
 
}





