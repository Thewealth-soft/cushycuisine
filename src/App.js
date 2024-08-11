import About from './component/About';
import Menu from './component/menu/Menu';
import Header from './component/Header';
import Navbar from './component/Navbar';
import Order from './component/Order';
import Footer from './component/Footer'

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Menu />
      <About />
      <Order />
      <Footer/>
    </div>
  );
}

export default App;
