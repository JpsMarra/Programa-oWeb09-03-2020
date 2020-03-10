/*
//Importar Bibliotecas 
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import BoobsDatail from './BoobsDatail';

//Criar Componentes
class App extends React.Component {
    constructor(props){
        super(props);
        console.log(this);
        this.state = {
            indice: 0
        }
    }

    incrementarIndice = (event) => {
        console.log(this);
        this.setState({
            indice: this.state.indice+1
        })  
    }

    decrementarIndice = (event) => {
        console.log(this);
        this.setState({
            indice: this.state.indice-1
        })
        
    }

    render(){
        return( 
            <div className="container">
                <BoobsDatail nome ="Shazam" indice = {this.state.indice}></BoobsDatail>
                <br/>
                <button type="button" class="btn btn-i
                 nfo" onClick={this.decrementarIndice}>Anterior</button>
                
                <button type="button" class="btn btn-info" onClick={this.incrementarIndice}>Proximo</button>
                
                
            </div>
        )
    }

}
// Mostar Componentes na Tela
ReactDOM.render(
    <App />,document.querySelector('#root'))
*/

import React from 'react';
import ReactDOM from 'react-dom';
import BoobsDatail from './BoobsDatail';
import 'bootstrap/dist/css/bootstrap.css'

class App extends  React.Component {  
      
      Vetor = [
            {
                  name : 'João',
                  country : 'Brasil',
                  city : 'Anápolis'
                  },
            {
                  name : 'Felipe',
                  country : 'França',
                  city : 'Francos'
                  },
            {
                  name : 'Arthur',
                  country : 'Argentina',
                  city : 'Bienvenido'
                  },
            
                {
                  name : 'Lizard',
                  country : 'Neverland',
                  city : 'TheBeautyWorld'
                    }      
      ]


      constructor(props){
            super(props);

            console.log(this);

            this.state = {
                  indice: 0
            }

      }

      incrementarIndice = (event) => {
        if (this.state.indice<=this.Vetor.length-2)
        {
            this.setState({
                  indice: this.state.indice+1
            })
        }
      }

      decrementarIndice = (event) => {
            
        if (this.state.indice!==0) {
            this.setState({
                      indice: this.state.indice-1  
            })
        }
        
      }
      
      render(){
             return(
                   <div className="container">

                        <br/>
                        <BoobsDatail nome="João Paulo Sant'Ana Marra" Vetor={this.Vetor[this.state.indice]}>
                        </BoobsDatail>
                        <br/>

                        <button type="button" className ="btn btn-info" onClick = {this.decrementarIndice} >Anterior</button>
                            
                        <button type="button" className ="btn btn-info"  onClick = {this.incrementarIndice} >Próximo</button>

                   </div>    
            );      
      }
}

ReactDOM.render(<App/>, document.querySelector('#root'));



