import Greeting from "./components/Greeting";
import UserStatus from "./components/UserStatus";
import Weather from "./components/Weather";

const App = () => {
  return(
    // <Weather temperature={27}/>
    // <UserStatus loggedIn={false} isAdmin={true}/>
    <Greeting timeOfDay={"mornin"}/>
  );
}

export default App;