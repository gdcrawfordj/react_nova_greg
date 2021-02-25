import React, { ChangeEvent, FC, FormEvent, Fragment, useEffect, useState } from 'react';

type Persona = {
    dni: number, nombre: string, apellidos: string, saldo: number
}

export const ComponenteConUseEffectBuscador:FC<{}> = () => {
    const [apellidos, setApellidos] = useState<string>('');
    const [lista, setLista] = useState<Persona[]>([]);

    // Por defecto el código de la función llamada a useEffect se ejecuta después
    // de cada renderizado. Pero si se le suministra como segundo argumento un array,
    // solamente se lanzará después del render, las veces que al menos uno de los elementos
    // del array haya cambiado.
    useEffect(()=>{
        if(apellidos.length>=3){
            fetch(`http://localhost:3020/buscar?apellidos=${apellidos}`)
                .then((response:Response) => response.json())
                .then((datos:Persona[]) => setLista(datos));
        }
    },[apellidos])

    console.log('---- RENDER ----');
    return <Fragment>
        Apellidos: <input type="text" value={apellidos} onChange={({target}) => setApellidos(target.value) }/>
        <table>
            <thead><tr><th>DNI</th><th>Nombre</th><th>Apellidos</th><th>Saldo</th></tr></thead>
            <tbody>
                {lista.map((p, i)=> <tr key={i}>
                    <td>{p.dni}</td>
                    <td>{p.nombre}</td>
                    <td>{p.apellidos}</td>
                    <td>{p.saldo}</td>
                </tr>)}
            </tbody>
        </table>
    </Fragment>
}

