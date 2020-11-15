import classes from './App.module.css';
import { Header, Main } from './components';
import Login from './components/Login/Login';
import { useStateValue } from './store/StateProvider';

function App() {
   const [{ user }] = useStateValue();
   return (
      <div className={classes.App}>
         {!user ? (
            <Login />
         ) : (
            <>
               <Header />
               <Main />
            </>
         )}
      </div>
   );
}

export default App;
