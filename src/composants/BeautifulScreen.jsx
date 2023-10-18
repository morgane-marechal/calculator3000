import { useState } from 'react'
import ScoreScreen from './ScoreScreen.jsx'
import StateScreen from './StateScreen.jsx'
import NumberButton from './NumberButton.jsx'
import OperatorButton from './OperatorButton.jsx'

function BeautifulScreen() {

    return (
        <>
            <ScoreScreen />
            <StateScreen />
        </>
    );
  }


  export default BeautifulScreen;