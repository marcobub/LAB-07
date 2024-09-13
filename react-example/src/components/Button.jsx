import { useState } from "react";

export const Button=()=>{
    //const{text}=props;  //'text' is MimeTypeArray

    const[count, setCount ] = useState (0);
    function handlerButton(){
            const randomNumber = Math.floor(Math.random() * 100) + 1;
            alert(`Número aleatorio: ${randomNumber}`);
    }
    return(
        <button onClick={handlerButton}>
            {count}
        </button>
    );
}