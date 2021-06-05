import '../src/components/style.css';
import Navbar from './components/Navbar'
import Purchase from './components/Purchase'
import Info from './components/Info'
import Hero from './components/Hero'
import Features from './components/Features'
import Course from './components/Course'
function App() {
  return (
    <div className="App">
      <section>
        <Navbar />
        <Hero />
        <Info />
        <Course />
        <Features />
        <Purchase />
      </section>
    </div>
  );
}

export default App;
