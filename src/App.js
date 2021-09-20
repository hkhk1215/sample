import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route, Switch} from 'react-router-dom'
import { NxApiService } from 'axit-new-test-1';
import Page from './page';
import { useEffect } from 'react';

const envs = process.env.react_app_env;
function App() {
  
  useEffect(() => {
    console.log(envs)
    NxApiService.CONFIG(envs)
  },[])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <BrowserRouter>
      <Switch>
      <Route path='/page'  component={Page}>
        
      </Route>
      </Switch>
      </BrowserRouter>

      
    </div>
  );
}

export default App;
