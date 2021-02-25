import React, { ChangeEvent, FC, FormEvent, Fragment, useEffect, useState } from 'react';

export const ComponenteConUseEffect:FC<{}> = () => {
    const [lista, setLista] = useState<string[]>([]);


    // Para que solamente se lance una vez (después del primer renderizado),
    // le pasamos el array de dependencias vacio.
    useEffect(()=>{
        console.log('---- USE EFFECT ----');
        fetch('laborables.json')
            .then((response:Response)=> response.json())
            .then((dato:string[]) => new Promise<string[]>((resolve)=> setTimeout(()=>resolve(dato),2000)))
            .then((x:string[])=> setLista(x));
    },[])

    console.log('---- RENDER ----');
    if(lista.length){
        return <table>
                <thead><tr><th>Días laborables</th></tr></thead>
                <tbody>
                    {lista.map((elemento, i)=> <tr key={i}><td>{elemento}</td></tr>)}
                </tbody>
            </table>;
    } else {
        return <div style={{textAlign:'center'}}>
            <img src="loading.gif" alt="Loading..."/>
        </div>
    }
}

