import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  const [value, setValue] = useState(0)
  let text = "Hi i am Footer";
  return (
    <div className="App">
      <Navbar firstNavComp="Home"/>
        <div className="counter" >
            {value}
            <button onClick={()=>{setValue(value+1)}}>Click Me</button>
        </div>
        <Footer footerText={text}/>
    </div>
  );
}

export default App;
