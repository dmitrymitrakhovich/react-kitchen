import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./pages/About";
import Category from "./pages/Category";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Recipe from "./pages/Recipe";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className='container content'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/category/:name' element={<Category />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/meal/:id' element={<Recipe />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
