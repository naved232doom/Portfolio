import React from 'react';
import '../academics/academics.styles.css';
const Academics= ()=> {
    return (
        
        <div className='academics'>
        <h2>Academics</h2>
        <div className='school'>
            <div class="col-md-8 center acadContent" >
            <h1>NIT JAMSHEDPUR</h1>
        <h4>Electronics and Communications Engineering</h4>
        <h4><b>CGPA: 8.88</b></h4>
        <img  className="pleaseresize" src="https://i.ytimg.com/vi/bFGH_fFyWoo/maxresdefault.jpg"></img>
            </div>
            
            </div>

        <div className='school second'>
            <div class="col-md-8 center acadContent" >
            <h1>De Nobili School F.R.I</h1>
        <h4>Class X (I.C.S.E.)</h4>
        <h4><b>95%</b></h4>
        <img  className="pleaseresize" src="https://assets.telegraphindia.com/telegraph/19DhanDeNobili4_184917.jpg"></img>
            </div>
            
            </div>

            <div className='school'>
                <div class= "col-md-8 center acadContent">
                 <h1>Teresa Block</h1>
        <h4>Class XII (C.B.S.E)</h4>
        <h4><b>94.4%</b></h4>
        <img  className="pleaseresize" src="https://schools.thelearningpoint.net/pics-cbse/schoolPic58049.JPG"></img>
            </div>
           
            </div>
        
        </div>
    );
    
}

export default Academics;