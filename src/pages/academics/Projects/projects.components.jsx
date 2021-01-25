import React from 'react';

import '../Projects/projects.styles.scss';
import ProjectData from '../Projects/projects.data';

const Projects =()=>{
    

   
    return (
      
             ProjectData.map(item =>(
                 <div class='col-md-4 col-sm-6' key={item.id}> 
                 <div className='collection-item' >
                 
               
                     
                              <img className='image' src={item.img}></img>
                                <div className='name'>{item.name}</div>
                              <div className='collection-footer'><a class='link' href={item.content}>{item.content.substr(0,51)}</a>
                              </div>
                              
                          
                     
                     </div>
                     </div>
                     
                     
                 
             ))
      
    )
     
}

export default Projects;

