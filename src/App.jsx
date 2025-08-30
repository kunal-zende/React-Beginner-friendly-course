import Person from "./components/Person";
import Product from "./components/Product";

const App = () => {
  return (
  <div>
  <Person name="Kunal" age={22} />
  <Product name="Iphone" price={60000} />
  </div>
  );
}

export default App;