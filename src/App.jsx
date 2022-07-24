import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Header from './components/Header';
import HomePage from './components/HomePage';
import List from './components/List';
import TotalMoney from './components/TotalMoney';

function App() {

  const [listTransactions, setListTransactions] = useState([]) //array de objs entradas e saidas
  
  const [isEnter, setIsEnter] = useState(false)
 
  return (
    <div className="App">
      
      {
        isEnter ? 
        <>
        <Header setIsEnter={setIsEnter}/>
        <main>
        <div className='form'>
          <Form listTransactions = {listTransactions} setListTransactions={setListTransactions}/>
          {
            listTransactions.length > 0 ?
            <TotalMoney listTransactions={listTransactions}/> :
            <></>
          }
        </div>
        <List listTransactions = {listTransactions} setListTransactions={setListTransactions}/> 
        </main>
        </>
        :
        <HomePage setIsEnter={setIsEnter}/>
      }
    </div>
  );
}

export default App;
