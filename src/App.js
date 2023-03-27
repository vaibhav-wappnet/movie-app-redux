import './App.css';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import MyRoutes from "./Routes/MyRoutes";
import Header from "./Components/Layout/Header";
import Footer from "./Components/Layout/Footer";

function App() {
  return (
    <div className="App bg-ex-light-grey">
      <Router>
        <Header />
        <MyRoutes />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
