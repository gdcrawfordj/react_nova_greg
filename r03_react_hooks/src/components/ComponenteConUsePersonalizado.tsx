import React, { ChangeEvent, FC, FormEvent, Fragment, useEffect, useRef, useState } from 'react';

// declaración del hook personalizado
function useConmutador(valorInicial:boolean):[boolean,()=>void] {
    const [valor,setValor] = useState(valorInicial);
    const alternar = () => {setValor(!valor)};
    return [valor, alternar]
}

export const ComponenteConUsePersonalizado:FC<{}> = () => {
    const [mostrar, conmutar] = useConmutador(true);

    return <Fragment>
        <div>
            <button onClick={()=> conmutar()}>Mostrar/Ocultar</button>
        </div>
        <div>
            {mostrar && <img src="gato.png" alt="gato"/>}
        </div>
    </Fragment>;
}

