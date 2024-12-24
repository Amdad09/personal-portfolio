import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home";
import Navbar from "./shared/Navbar/Navbar";

function App() {
  return (
    <div className="">
        <Navbar />
        <Home></Home>
        <About />
        <Contact></Contact>
    </div>
  );
}

export default App;
