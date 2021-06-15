import React from 'react';
import './academics.styles.css';
const Academics= ()=> {
    return (
        
        <div className='academics'>
        
        <div className='school'>
            <div class="col-md-4 col-sm-6 " className='center acadContent' >
            <h2>NIT JAMSHEDPUR</h2>
        <h4>Electronics and Communications Engineering</h4>
        <h4><b>CGPA: 8.82</b></h4>
        <img  className="pleaseresize" src="https://i.ytimg.com/vi/bFGH_fFyWoo/maxresdefault.jpg"></img>
            </div>
            
            </div>

        <div className='school second'>
            <div class="col-md-8 center acadContent" >
            <h2>De Nobili School F.R.I</h2>
        <h4>Class X (I.C.S.E.)</h4>
        <h4><b>95%</b></h4>
        <img  className="pleaseresize" src="https://assets.telegraphindia.com/telegraph/19DhanDeNobili4_184917.jpg"></img>
            </div>
            
            </div>

            <div className='school'>
                <div class= "col-md-8 center acadContent">
                 <h2>Teresa Block</h2>
        <h4>Class XII (C.B.S.E)</h4>
        <h4><b>94.4%</b></h4>
        <img  className="pleaseresize" src="https://schools.thelearningpoint.net/pics-cbse/schoolPic58049.JPG"></img>
            </div>
           
            </div>
        
        </div>
    );
    
}

export default Academics;