
import './App.css';

const Person = (props) => {

  return(
  <>
    <h1>Name: {props.name}</h1>
    <h2>Last Name: {props.LastName}</h2>
    <h2>Age: {props.age}</h2>
  </>
  )
}

const App = () => {
  
  return (
    <div className="App">

     <Person 
        name = {'jas'} 
        LastName = {'Pan'} 
        age={'24'}
     />
     
     <Person name = {'Eri'} LastName = {'Bor'} age={'23'}/>
    </div>
  );
}

export default App;
