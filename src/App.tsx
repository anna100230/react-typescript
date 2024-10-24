import './App.css';
import {Greet} from './components/Greet'
import {Person} from './components/Person'
import { PersonList } from './components/PersonList'
import { Status } from './components/Status'
import {Heading} from './components/Heading'
import {Oscar} from './components/Oscar'
function App() {

  const personName ={
    firstName:'Anna',
    lastName: 'Manzoor'
  }
  const nameList =[
    {
      firstName: 'Anna',
      lastName: 'Muna',
    },
    {
      firstName: 'Nimuna',
      lastName: 'Manzoor',
    },
    {
      firstName: 'Princess',
      lastName: 'Diana',
    }
  ]
  return (
    <div className="App">
      <Greet name='Anna' messageCount={10} isLogedIn={false} />
      <Person name={personName} />
      <PersonList names={nameList}/>
      <Status status='loading'/>
      <Oscar>
      <Heading> Oscar goes to Leonardo Dicaprio</Heading>
      </Oscar>
      <Heading> Oscar goes to Leonardo Dicaprio</Heading>
      
      <Greet name='Anna'isLogedIn={false}></Greet>
    </div>
  );
}

export default App;
