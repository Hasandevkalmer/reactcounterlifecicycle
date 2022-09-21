import logo from './logo.svg';
import './App.css';
import React from "react"


function Counter (props){

  return(
    <div>
      <p>Title : {props.title}</p>
      <h1>Counter:{props.counter}</h1>
      <button id='tambah' onClick={()=> props.onTambah()}>tambah</button>
      <button id='kurang' onClick={()=> props.onKurang()}>kurang</button>
    </div>
    
  )
}
class Clock extends React.Component {
  componentWillUnmount(){
    console.log("componentWillUnmount");
    
  }
  render()
 
  {
    return<h1>Clock Component</h1>

  }

}
class App extends React.Component {
  constructor () {
    super();
    this.state = {
      title : "To-Do-App",
      counter : 0,
      isClock:false,

    };
   
    
  }
  // componentDidMount(){
  //   console.log("componentDidMount");
  // }
  // componentDidUpdate(){
  //   console.log("componentDidUpdate");
  // }
  handleTambah(){
    const newCounter = this.state.counter + 1;
    this.setState({
      counter:newCounter
    })

  }

  handleKurang(){
    const newCounter = this.state.counter - 1;
    this.setState({
      counter:newCounter
    })
  }
  handleToggleClock () {
    this.setState (
      {
        isClock:!this.state.isClock,
      }
    );

  }
    render() {
      console.log("render method");
      return (
      <div className='App'>
        <h1>{this.state.title}</h1>
        <hr/>
        < Counter title="Belajar Props" counter={this.state.counter}
        onTambah={() => this.handleTambah()}
        onKurang={() => this.handleKurang()}
        
        />
        <hr/>
        <button id='toggle' onClick={()=>this.handleToggleClock()}>Toggle Clock</button>
        {this.state.isClock && <Clock/>}
      </div>
      );
    }
  }



    
export default App