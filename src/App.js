import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import fetchUser from './services/rando_user';
import UserSummary from './components/UserSummary';

function App() {
  const [currentUser, setCurrnetUser] = useState('hrm')
  //I know our data will return an array



  const refreshUser = () => {
    console.log( `It's firing, alright!`)
    console.log(currentUser)
  
  }


  useEffect( () => {

    const getUser = async() => {
     const randomUser = await fetchUser();
    //  console.log(randomUser)
      setCurrnetUser(randomUser)
    }
    getUser();
  }, [])


 

  return (
    <div className="App">
      <Header />
      {/* As per the instructions, a button will be added here. */}
     
      { currentUser ? <UserSummary userData={currentUser} />
      : <p>There is no user to display. </p> }
       <button onClick={refreshUser}>Generate another user!</button>
    </div>
  );
}

export default App;
