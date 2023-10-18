export default function ClearButton({output, setOutput}) {

    function clearAll(output){
        setOutput((output) => output=0);
        console.log('test equal '+output);

    // const buttonEgal = (
    //     <button
    //             onClick={() => evalOp(output)}> Click
    //     </button>
    //  )  

    }
    return (
        <button
            onClick={() => clearAll(output)}> Clear
        </button>
    )
  }