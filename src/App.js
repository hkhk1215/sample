import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route, Switch} from 'react-router-dom'
import { NxApiService } from 'axit-new-test-1';
import Page from './page';
import { useEffect } from 'react';

const envs = process.env.react_app_baseurl;
function App() {
  
  useEffect(() => {
    console.log(envs)
    // NxApiService.CONFIG(envs)
  },[])
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
      <Route path='/'  component={Page}>
        
      </Route>
      </Switch>
      </BrowserRouter>

      
    </div>
  );
}

export default App;
