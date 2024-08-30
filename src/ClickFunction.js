////With function component

import React from 'react'
import './App.css'

// function ClickFunction() {
function ClickFunction(props) {


    let HelloFunction = (name) => {
        alert("Hello " + name);
    }


    return (
        <div className='App'>
            {/* <input type="button" value="Click" onClick={ () => HelloFunction ("Hafeez-khan")}/> */}
            <input type="button" value="Click" onClick={() => HelloFunction(props.name)} />

        </div>
    )
}

export default ClickFunction
















// ////With class component

// import './App.css'
// import React, { Component } from 'react';

// export default class ClickFunction extends Component {

//     HelloFunction() {
//         alert("Hello Hafeez-khan")
//     }


//     render() {
//         return (
//             <div className='App'>
//                 <input type="button" value="Click" onClick={this.HelloFunction} />

//             </div>
//         )
//     }
// }

