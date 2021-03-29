import { Route, Switch } from 'react-router-dom';
import SignUp from './Components/SignUp/SignUp';
import SignIn from './Components/SignIn/SignIn';
import Navigation from './Components/Navigation/Navigation';
import Sample from './Components/Sample/Sample';
import './App.css';

function App() {
  return (
    <div>
      <Navigation/>
      <div>
        <Switch>
          <Route path='/signup' exact component={SignUp} />
          <Route path='/signin' exact component={SignIn} />
          <Route path='/sample' exact component={Sample}/>
        </Switch>
      </div>
    </div>
  );
}

export default App;
