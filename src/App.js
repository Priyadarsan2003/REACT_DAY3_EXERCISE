import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Navigation from './Navigation';
import Section from './Product';
import { Cart } from './Footer';
import './App.css'

function App() {
  return (
    <div>
      <Header />
      <Navigation />
      <Section />
      <Cart />
    </div>
  );
}

export default App;