import Footer from './components/Footer';
import Itemlistcontainer from './components/Itemlistcontainer';
import Navbar from './components/Navbar';
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Itemlistcontainer greeting={"Hola Gente"} />
      <Footer />
    </div>
  );
}

export default App;
