import React, { ChangeEvent, FC, FormEvent, Fragment, useEffect, useState } from 'react';

export const ComponenteConUseState:FC<{}> = () => {
    const [nombrePersona, setNombrePersona] = useState<string>('');
    const [lista, setLista] = useState<string[]>([]);

    function guardar(event:FormEvent){
        event.preventDefault();
        // Forzamos a renderizar de nuevo porque es un array nuevo el que guardo. 
        // Si fuera el mismo array (aunque tuviera un elemento más), 
        // este setLista no forzaría un renderizado.
        setLista([...lista, nombrePersona]);
        setNombrePersona('');
    }

    function cambio(event:ChangeEvent<HTMLInputElement>){
        setNombrePersona(event.target.value)
    }

    // Por defecto el código de la función llamada a useEffect se ejecuta después
    // de cada renderizado. Pero si se le suministra como segundo argumento un array,
    // solamente se lanzará después del render, las veces que al menos uno de los elementos
    // del array haya cambiado.
    useEffect(()=>{
        console.log('---- USE EFFECT ----');
    },[lista])

    console.log('---- RENDER ----');
    return <Fragment>
        <form onSubmit={guardar}>
            Nueva: <input type="text" value={nombrePersona} onChange={cambio}/>
            <button>Insertar</button>
        </form>
        <table>
            <thead><tr><th>Nombre Persona</th></tr></thead>
            <tbody>
                {lista.map((elemento, i)=> <tr key={i}><td>{elemento}</td></tr>)}
            </tbody>
        </table>
    </Fragment>
}

