'use client'
import { useState } from "react";
function Incrementador() {
    
const [contador, setContador] = useState(0);
   return (
    <div>
        
        <h1>{contador}</h1>
         
        <button onClick={() => setContador(contador + 1)}
            style={{ cursor: "pointer", padding: "10px 20px" }}
            >Incrementar
        </button>
    </div>
    
);
}

export default Incrementador;