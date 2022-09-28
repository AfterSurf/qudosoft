import "./App.css";
import CartContainer from "./components/CartContainer";
import Header from "./components/Header";
import { CategoryProvider } from "./context/categoryContext";

function App() {
  return (
    <CategoryProvider>
      <div className="App">
        <Header />
        <CartContainer />
      </div>
    </CategoryProvider>
  );
}

export default App;
