
import React, { useState } from 'react';

import NumberButton from './NumberButton.jsx';
import OperatorButton from './OperatorButton.jsx';
import EqualButton from './EqualButton.jsx';
import ClearButton from './ClearButton.jsx';
import BeautifulScreen from './BeautifulScreen.jsx';
import Title from './Title.jsx';






export default function Calculator() {
    const [ output, setOutput] = useState("");localStorage

    const DScreen =  (<h1>hello</h1>);
    function totalOp(output){
        let total= eval(output);
        console.log(total);
    }

    
    
    return (
        <div>
            {/* <DScreen /> */}
            <Title />
            <h2>{output}</h2>
            <h1></h1>
            <BeautifulScreen />
            <div id="numbers">
                <NumberButton output={output} setOutput={setOutput}/>
            </div>

            <div id="operators">
               <OperatorButton output={output} setOutput={setOutput}/>
               <EqualButton output={output} setOutput={setOutput}/>
               <ClearButton output={output} setOutput={setOutput}/>
            </div>
        </div>
    )
}