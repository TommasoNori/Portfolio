import { useState } from "react";
import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./pages/Home/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="app-container">
        <Header />
        <main>
          <Home />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
