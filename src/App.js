import React from 'react';
import './App.css';
import image from "./Frida.png";
class  App extends React.Component {
  constructor(){
    super ();
    this.state  = {
      person :{
        fullName:"Frida kahlo",
        Bio: " Artist Frida Kahlo was considered one of Mexico's greatest artists who began painting mostly self-portraits after she was severely injured in a bus accident. Kahlo later became politically active and married fellow communist artist Diego Rivera in 1929. She exhibited her paintings in Paris and Mexico before her death in 1954.",
        imgSrc : image,
        Profession: "Painter"
      },
      show:false,
      time:0
     }
  }
  tick() {
    this.setState({
      time:0
    });
  }
  componentDidMount() {
    this.timerID = setInterval(() =>{(this.state.show)? this.setState({time:this.state.time+1}):this.tick()} ,1000);
  }
 toggleShow= () => this.setState({show:!this.state.show})
  render() {
    return (
      <div className="App">
      <button onClick={this.toggleShow}> click Me! </button>
    <div className="firstphrase">Time since the component has mounted : {this.state.time}</div>
      {(this.state.show)?
      <div className="file" style={{margin:'20',padding:'10'}} >

        <div className ="col">
       <img src={this.state.person.imgSrc} alt ='Frida'/>
       </div>

      <div className ="col">
      <h1>FullName: </h1>
      <p>{this.state.person.fullName}</p>
      </div>

      <div className ="col">
      <h1>Bio: </h1>
       <p>{this.state.person.Bio}</p>
      </div>
       

       
       <div className ="col">
       <h1>Profession: </h1>
       <p>{this.state.person.Profession}</p>
       </div>
      
        </div> :null}
      
      </div>
    );
  }

}

export default App;
