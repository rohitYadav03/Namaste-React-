import React from "react";
import ReactDOM from "react-dom/client";

const heading = <h1>Heading</h1>;

// creating img using jsx =>
    function ImageComponent (){
        return <img src="https://imgs.search.brave.com/oPayLHNcFMM17Z1e1zIPA4V4akl2y5Izb4f8vr9pXi4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c3BvcnRwaG90b2dh/bGxlcnkuY29tL2Nv/bnRlbnQvaW1hZ2Vz/L2Ntc2ZpbGVzL3By/b2R1Y3QvMjY1NjUv/MjY5MDMtbGlzdC5q/cGc" alt="Virat Kohli Image" />
    }

    
// onClick Attribute in JSX => 
const ButtonClick = () => {
 return (  <button  onClick={() => alert("Well done Rohit")}>
        Click Me
    </button>)
}

// Applying inline style in JSX
const DivStyle = () => {
    const styleDiv = {
        backgroundColor: "blue",
        color: "orange"
    }
    return <div style={styleDiv}>Hello</div>
}
  
// 2. Convert React.createElement to JSX

const Element = () => {
    return(
        <div id="container">
            <h1 className="title">Hello World</h1>
            <p>This is paragraph</p>
        </div>
    )
}

//3. Create a Functional Component with Nested Components

const NestedComp = () => {
    return (
      <div>
          <h1> With some text</h1>
            <h2>this is h2 tag and it is child</h2>
            <button onClick={() => console.log("Button clicked")}>Click Here</button>
      </div>
        
    )
}

// 5. Create a Simple React App

let FirstApp = function(){
    return(
<>
<h1>Welcome to React!</h1>
<p id="para">This is my first React app.</p>
<button onClick={() => {
    document.getElementById("para").textContent = "Text changed";
}}>Change text</button>
</>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<ImageComponent />)
// root.render(<ButtonClick />)
// root.render(<DivStyle />)
// root.render(<Element/>)
//  root.render(<NestedComp/>)
 root.render(<FirstApp />)

 