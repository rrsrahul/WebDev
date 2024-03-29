
import './App.css';
import { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {

  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (userName,userAge)=>{
    setUsersList((prevUsersList)=>{
      return [...prevUsersList,{name:userName,age:userAge}]
    })
    
  }

  return (
    <div className="App">
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={usersList}/>
    </div>
  );
}

export default App;
