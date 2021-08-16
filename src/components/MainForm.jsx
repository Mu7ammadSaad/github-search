import React, {  useState } from 'react';  

function MainForm(props) {
    const[SeachBoxName,SetSeachBoxName] =useState("");
    const handleSubmit = (event) =>{
      event.preventDefault();
    }

  
    return(
      <form onSubmit={handleSubmit}>  
        <input type="text"
          placeholder="Search GitHub" 
          value={SeachBoxName} 
          onChange={event => SetSeachBoxName(event.target.value)}
          required/>
        <button onClick={() =>props.onCall(SeachBoxName)} >Search</button>
      </form>
    );
    
}
 
export default MainForm;