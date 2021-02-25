import React, { FC, Fragment } from 'react';
import { ComponenteConUseEffect } from './components/ComponenteConUseEffect';
import { ComponenteConUseEffectBuscador } from './components/ComponenteConUseEffectBuscador';
import { ComponenteConUsePersonalizado } from './components/ComponenteConUsePersonalizado';
import { ComponenteConUseRef } from './components/ComponenteConUseRef';
import { ComponenteConUseState } from './components/ComponenteConUseState';

export type AppProps ={
  titulo:string;
}

const App:FC<AppProps> = (props:AppProps) => {
  const {titulo} = props;
  return (
    <Fragment>
      <h1>{titulo}</h1>
      <div className="row">
        <div className="column column-50">
          <ComponenteConUseState />
        </div>
        <div className="column column-50">
          <ComponenteConUseEffect />
        </div>
      </div>
      <div className="row">
        <div className="column column-50 column-offset-25"><ComponenteConUseEffectBuscador/></div>
      </div>
      <div className="row">
        <div className="column column-50 column-offset-25"><ComponenteConUseRef/></div>
      </div>
      <div className="row">
        <div className="column column-50 column-offset-25"><ComponenteConUsePersonalizado/></div>
      </div>
      
    </Fragment>
  );
}

export default App;
