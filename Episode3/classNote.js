import React from "react";
import ReactDOM from "react-dom/client";

// how this code work = React.createElement => converted into JS Object => HtmlElement(render)
    
const heading = React.createElement(
    "h1",
    {id: "heading"},
    "Namaste React"
);
// from now we will not use this syntax and we will use jsx syntax
console.log(heading);



// JSX => html/XML like synatx inside JS
// JSX => transpiled before it reaches the js => it does by Pacel => and pacel uses Babel
// babel => convert or trnspile js code to react code that js engine understand 


// JSX => babel transpile it to React.createElement => converted into JS Object => HtmlElement(render)
// in jsx we use camelCase to give attribut 
// HW => find how diifernt attribute work in JSX like img and other ??\
// to write jsx in multiple line we nned to use () 
const jsxHeading = <h1 id="heading" >Namaste React using JSX</h1>
console.log(jsxHeading);


const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading);

// React Component 
// class Based Component - OLD
// functional Component - NEW


// React functional Component => normal js function which return some piece of jsx, and it starts with capital letter

const HeadingComponent = () => {
   return  <h1>React functional Component </h1>
}
// root.render(<HeadingComponent/>); // this is the way to render react component in root

// putting component inside componetnt is called  => component composition

    const HeadingComponent1 = () => {
        return <h1>HeadingComponent1</h1>
    }
const HeadingComponent2 = () => {
    return (
        <div id="container">  
            <HeadingComponent1 />
            <h1 className="head">HeadingComponent2</h1>
        </div>
    );
}
root.render(<HeadingComponent2 />)