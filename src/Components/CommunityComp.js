import React from 'react';
import rd from './Community'; 

class communityComp extends React.Component {

  add = () => {
    console.log('im in add');

    let a = document.getElementById('name ').value;
    let b = document.getElementById('latitude').value;
    let c = document.getElementById('longitude').value;
    let d = document.getElementById('population').value;
  }
  
    render() {
        return (
           <div className = "Community Fucntion">
             <h1>MyCommunity</h1>
             <br/>
             <textarea id ='name' rows = '2' cols = '10'></textarea>
             <input id ='latitude' name='input2' rows = '2' cols = '10'></input>
             <input id ='longitude' name='input3' rows = '2' cols = '10'></input>
             <input id ='population' name='input4' rows = '2' cols = '10'></input>
             <button onClick={this.addCity}>Reset</button>
             <button onClick={this.addCity}>New City</button>
             <button onClick={this.addCity}>Population</button>
             <button onClick={this.addCity}>Most North</button>
             <button onClick={this.addCity}>Most South</button>
             <button onClick={this.addCity}>First</button>
             <button onClick={this.addCity}>Last</button>
             <button onClick={this.addCity}>Next</button>
             <button onClick={this.addCity}>Previous</button>
             <br></br>

             <input id ='result'></input>
             <br/> 
           </div>
     
           );
     
         }
     
       }
     
     export default communityComp;