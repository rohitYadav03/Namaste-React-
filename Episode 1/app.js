const heading = React.createElement(
    "h1", 
    {id:"heading"},
     "Hello World from React");

console.log(heading); // heading is not h1 tag it gives us a object 

// props are children + attribute

   const root = ReactDOM.createRoot(document.getElementById("root"));
   
   root.render(heading)
// render => render will take heading object and convert it into h1 and put it on the dom

/**
 *   <div id="parent">
        <div id="child">
            <h1></h1>
             <h2></h2>
        </div>
         <div id="child2">
            <h1></h1>
             <h2></h2>
        </div>
    </div>
 * we want to create this type of structure but using react
 */

const parent = React.createElement(
    "div",
    {id:"parent"}, 
    [
        React.createElement(
            "div",
            {id:"child"}, 
           [ React.createElement("h1",{}, "I am h1 tag"), React.createElement("h2",{}, "I am h2 tag")]
            // to give more than one child we need to give it as an array 
        ),
        React.createElement(
            "div",
            {id:"child2"}, 
           [ React.createElement("h1",{}, "I am h1 tag from C2"), React.createElement("h2",{}, "I am h2 tag from C2")]
            // to give more than one child we need to give it as an array 
        )
    ]
);
root.render(parent)

// ReactElement => Object => and object became HTML element that browser understands.

// while it is rendrening into Dom , then it convert into HTML element and put it into the dom

// JSX in next Class


