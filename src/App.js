import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Project from "./pages/Project";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
      <BrowserRouter >
        <Navbar />
        <main>
          <section className="wrapper">
            <Routes>
              <Route path="/" element={<>
                <Home />
                <Project />
              </>} />

            </Routes>
          </section>
        </main>
        <Footer />
      </BrowserRouter>
  );
}

export default App;
