import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

const Heading = () => <h1>Hello Rohit please get back to your best version</h1>;

const User = () => {
    return (
        <div>
   <h2>Name : Rohit</h2>
  <h3>Location : Jamshedpur</h3>
        </div>
    )
}

// lets convert in into class based component

class UserClass extends React.Component{

    // props in class based component 
constructor (props){
    super(props); // why do we need to write super(props)
    
    this.state = {  // creating state varible in class based component
        count:4,
        count2:2   // creating second state variable
    };
}
componentDidMount (){

}
    render (){
        const {name} = this.props
        const {count2} = this.state // destruing state variable
        return (
            <div>
        <h1>Count: {this.state.count}</h1>
        <h2>count2 : {count2}</h2>
        <button onClick={() => {
            this.setState({
                count: this.state.count + 1,
                count2: this.state.count2 + 3,  
            });
            
        }}>Increase</button>
       <h2>Name : {name}</h2>
      <h3>Location : Jamshedpur</h3>
            </div>
        )
    }
}
// first construtor
// then render
// lifecycle
// parent constor -> parent render -> child construtor -> child render
//  children did mount -> parent did mound
// componentDidMount => api call , why ????


// lifecycle method where there are many child or child inside child and why ??
//  react recycle diagram -> render phase 2. commit phase -> react update dom -> componentdidmout call


// mounting life cycle
// update cycle 
// mounting -> updating -> unmountoing 
root.render(<UserClass name={"Rohit Yadav23"}/>)