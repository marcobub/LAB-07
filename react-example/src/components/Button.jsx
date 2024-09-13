import { useState } from "react";

export const Button=()=>{
    //const{text}=props;  //'text' is MimeTypeArray

    const[count, setCount ] = useState (0);
    function handlerButton(){
        setCount(count+5);
    }
    return(
        <button onClick={handlerButton}>
            {count}
        </button>
    );
}