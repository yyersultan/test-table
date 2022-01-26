import { Switch,Route } from 'react-router-dom';
import  './App.css';
import { BookableNew } from './components/Bookables/BookableNew';
import { BookablesEdit } from './components/Bookables/BookablesEdit';
import { BookablesPage } from './components/Bookables/BookablesPage';
import { BookingPage } from './components/Bookings/BookingPage';
import { Game } from './components/Game/Game';
import { Navbar } from './components/Navbar/Navbar';
import { Users } from './components/Users/Users';
import { Wordle } from './components/Wordle/Wordle';


function App() {
  return (
    <div className = {'App'}>
      <Navbar />
      <Switch>
        <Route path={'/users'} component={Users} exact/>  
        <Route path={'/bookings'} component={BookingPage} exact/>  
        <Route path={'/bookables'} component={BookablesPage} exact/>  
        <Route path={'/bookables/new'} component={BookableNew} exact/>
        <Route path={'/bookables/edit/:id'} component={BookablesEdit} exact/>
        <Route path={'/'} component={Game} exact/>
        <Route path={'/wordle'} component={Wordle} exact/>
      </Switch>  
    </div>
  );
}

export default App;
