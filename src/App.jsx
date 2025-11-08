import Navbar from "./components/Navbar";
import HomePage from "./components/Homepage";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      
      <HomePage />

      <Contact />

      <Footer />
    </div>
  );
}
