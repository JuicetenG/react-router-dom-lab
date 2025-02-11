import './App.css'
import { useState } from 'react';
import { Route, Routes } from 'react-router';
import NavBar from './components/NavBar/NavBar.jsx';
import MailboxForm from './components/MailboxForm/MailboxForm.jsx';
import MailboxList from './components/MailboxList/MailboxList.jsx';
import MailboxDetails from './components/MailboxDetails/MailboxDetails.jsx';
import LetterForm from './components/LetterForm/LetterForm.jsx';

const App = () => {
  
  const [mailboxes, setMailboxes] = useState([]);
  const [letters, setLetters] = useState([]);

  const addMailbox = (newMailboxData) => {
    newMailboxData._id = mailboxes.length + 1;
    setMailboxes([...mailboxes, newMailboxData]);
  };

  const addLetter = (newLetter) => {
    newLetter._id = letters.length + 1;
    setLetters([...letters, newLetter]);
  };

  return (
    <>
      <NavBar />

      <Routes>
        <Route path='/' element={<main><h1>Post Office</h1></main>} />
        <Route 
          path='/mailboxes' 
          element={<MailboxList mailboxes={mailboxes} />} />
        <Route 
          path='/new-mailbox' 
          element={<MailboxForm addMailbox={addMailbox} />} 
        />
        <Route 
          path='/mailboxes/:mailboxId' 
          element={<MailboxDetails mailboxes={mailboxes} letters={letters}/>} />
        <Route 
          path='/Letters'
          element={<LetterForm addLetter={addLetter} mailboxes={mailboxes}/>} />
      </Routes>

    </>
  );
};

export default App;