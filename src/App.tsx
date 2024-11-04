import './App.css';
import {Greet} from './components/Greet'
import {Person} from './components/Person'
import { PersonList } from './components/PersonList'
import { Status } from './components/Status'
import {Heading} from './components/Heading'
import {Oscar} from './components/Oscar'
import {Button} from './components/Button'
import { Input } from './components/Input';
import { Container } from './components/Container';
import {User} from './components/Context/User'
import {UserContextProvider} from './components/Context/UserContext'
import {Counter} from './components/class/Counter'
import { Profile } from './components/auth/Profile';
import { Private } from './components/auth/Private';
import { List } from './components/generics/List';
import { RandomNumber } from './components/restriction/RandomNumber';
import { Toast } from './components/templateliterals/Toast';
import { CustomButton } from './components/html/Button';
import {Text} from './components/polymorphic/Text'

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
      <Button handleClick={(event,id)=>
             {
         console.log('Button clicked',event,id)
            }
           } />
           <Input value=''handleChange={(event)=>console.log(event)}/>
     <Container style={{border:'1px solid black',padding:'1rem'}}/>
    <UserContextProvider>
      <User/>
    </UserContextProvider>
    <Counter message ='The count value is'/>
    <Private isLogedIn={true} component={Profile}/>
    {/*<List items={['Batman','Superman','Wonder Women']} onClick={(item)=>console.log(item)} />
    <List items={[1,2,3]} onClick={(item)=>console.log(item)} />
    <RandomNumber value={10} isPositive  />*/}
    <List 
    items={
      [
        {id:1,
          first:'Bruce',
         last:'Wayne',
        },
        { id:2,
          first:'Clark',
          last:'Kent',
         },
         {
          id:3,
          first:'Princess',
          last:'Diana',
         },
        ]}
        onClick={(item)=>console.log(item)}
    />
    <Toast position='center'/>
    <CustomButton variant='primary' onClick={()=>console.log('clicked')}>
      Primary Button
    </CustomButton>

    <Text as='h1' size='lg'> Heading </Text>
    <Text as='p' size='md'> Paragraph </Text>
    <Text as='label' htmlFor='someId' size='sm' > Label </Text>
    </div>
  );
}

export default App;
