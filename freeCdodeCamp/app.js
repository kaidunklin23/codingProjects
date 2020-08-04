//Create a Simple JSX ElementPassed
const JSX = <h1>Hello JSX!</h1>;

//Create a Complex JSX Element
const JSX = <div>
  <h1>Butthead</h1>
  <p>My head is a butt.</p>
 <ul>
  <li>poop</li>
  <li>tissue</li>
  <li>hair</li>
</ul>
</div>;  

//Add Comments in JSXPassed
const JSX = (
    <div>
      <h1>This is a block of JSX</h1>
      {/*<h1>This is a comment</h1>*/}
      <p>Here's a subtitle</p>
    </div>
  );

//Render HTML Elements to the DOM
const JSX = (
    <div>
      <h1>Hello World</h1>
      <p>Lets render this to the DOM</p>
    </div>
  );
  
  ReactDOM.render(JSX, document.getElementById("challenge-node"));

//Define an HTML Class in JSX
const JSX = (
    <div className='kayDiv'>
      <h1>Add a class to this div</h1>
    </div>
  );

//Learn About Self-Closing JSX Tags
const JSX = (
    <div>
      
      <h2>Welcome to React!</h2> <br />
      <p>Be sure to close all tags!</p>
      <hr />
          
    </div>
  );

//Create a Stateless Functional Component
const MyComponent = function() {
  
    return(
        <div>Wassup mah boys!</div>
    );
    }

//Create a React Component
class MyComponent extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
   
      return (
        <div>
         <h1>React to this!</h1>
        </div>
      );
     
    }
  };

//Create a Component with Composition
class ParentComponent extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h1>I am the parent</h1>
          <ChildComponent />
        </div>
      );
    }
  }
  