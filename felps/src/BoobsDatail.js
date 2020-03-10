/*
//Importar biblioteca  
import React from 'react';

//criar componente

class BoobsDatail extends React.Component{

    render(props){
        return(
            <div>
                {this.props.indice}<br/>
                {this.props.nome}
            </div>
        )
    }
}
//Exportar 
export default BoobsDatail;
*/

import React from 'react'

class BoobsDatail extends React.Component {

    render(props){
        return(
            <div>
                <h1>{this.props.Vetor.name}</h1>
                <h4>{this.props.Vetor.country}</h4>
                <h4>{this.props.Vetor.city}</h4>
            </div>
        )
    }
}

export default BoobsDatail