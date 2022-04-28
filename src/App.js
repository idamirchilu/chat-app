import classes from "./App.module.css";
import Main from "./view/Main";
import Contacts from "./view/Contacts/Contacts";

function App() {
  return (
    <div className={classes.App}>
      <Contacts />
      <Main />
    </div>
  );
}

export default App;
