export default function EqualButton({output, setOutput}) {
    let outputChange=output;

    function evalOp(output){
        setOutput((output) => eval(output));
        console.log('test equal '+output);

    // const buttonEgal = (
    //     <button
    //             onClick={() => evalOp(output)}> Click
    //     </button>
    //  )  

}
    return (
        <button
            onClick={() => evalOp(outputChange)}> Click
        </button>
    )
  }