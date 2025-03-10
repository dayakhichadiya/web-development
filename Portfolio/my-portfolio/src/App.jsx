import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Home from './pages/Home'
import Portfolio from './components/Portfolio'

function App() {

  return (
    <Router>
        <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/portfolio" element={<Portfolio />} /> */}
        
        {/* <Route path="/hero" element={<Hero />} /> */}
        {/* <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} /> */}
        {/* <Route path="/contact" element={<Contact />} />  */}

      </Routes>
      {/* <Home/> */}
      <Hero/>
      <About/>
      <Projects/>
      <Contact/>
        <Footer />
    </Router>
  )
}

export default App


// import './App.css'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import Header from './components/Header'
// import Hero from './components/Hero'
// import About from './components/About'
// import Projects from './components/Projects'
// import Contact from './components/Contact'
// import Footer from './components/Footer'
// import Home from './pages/Home'
// import Portfolio from './components/Portfolio'

// function App() {

//   return (
//     <Router>
//         <Header />
//       <Routes>
//         {/* <Route path="/" element={<Home />} /> */}
//         {/* <Route path="/portfolio" element={<Portfolio />} /> */}
//         <Hero/>
//         <About/>
//         <Projects/>
//         {/* <Route path="/hero" element={<Hero />} /> */}
//         {/* <Route path="/about" element={<About />} />
//         <Route path="/projects" element={<Projects />} /> */}
//         <Route path="/contact" element={<Contact />} />

//       </Routes>
//       {/* <Home/> */}
//       {/* <Hero/>
//       <About/>
//       <Projects/> */}
//       {/* <Contact/> */}
//         <Footer />
//     </Router>
//   )
// }

// export default App