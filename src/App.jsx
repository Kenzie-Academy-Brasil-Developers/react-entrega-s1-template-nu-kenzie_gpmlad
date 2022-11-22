import { useState } from 'react';
import { Form } from './components/Form';
import { Header } from './components/Header';
import { List } from './components/List';
import { TotalMoney } from './components/TotalMoney';
import { Welcome } from './components/Welcome';

import './styles/reset.css'
import './styles/globalStyles.css'
import './styles/buttons.css'
import './styles/texts.css'
import './index.css'

function App() {
  
const [listTransactions, setListTransactions] = useState([
  { description: "Salário recebido", type: "entrada", value: 2500 },
  { description: "Conta de luz", type: "saída", value: 150 }
])

const [userPage,setUserPage] = useState(false)


  return (
    
    <div>
      <header>
        {userPage?(
          <div>
            <Header setUserPage={setUserPage}/>
            <div className='container mainHome'>
              <div className='leftHome'>
                <Form listTransactions={listTransactions} setListTransactions={setListTransactions}/>
                <TotalMoney listTransactions={listTransactions}/>
              </div>
              <div className='rightHome'>
              <List listTransactions={listTransactions} setListTransactions={setListTransactions}/>
              </div>
          </div>
          </div>
          
          ) : (
            <Welcome setUserPage={setUserPage}/>
          )}

      </header>
    </div>
  );
}

export default App;

