import React from 'react';

import '../Hobbies/hobies.styles.scss';
import hobbies from '../Hobbies/hobbies';
const Hobbies =()=> {
    return (
            
            hobbies.map(item =>(
                <div className=' large menu-item'>
                <div key={item.id}/>
            
                <img className=' background-image' src={item.img} alt='new'></img>
                <div className='content title'>{item.name}</div>
                </div>
               
                 
            )
           )
       
            

        
           
        
    )
}

export default Hobbies;