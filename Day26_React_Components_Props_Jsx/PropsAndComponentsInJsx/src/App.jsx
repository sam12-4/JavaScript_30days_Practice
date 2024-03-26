import './App.css'
import Navbar from './components/Navbar'
import Card from './components/Card'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Navbar />
      <div className="cards">
        <Card cardTitle="Card Title 1" cardDesc="Card Description 1"/>
        <Card cardTitle="Card Title 2" cardDesc="Card Description 2"/>
        <Card cardTitle="Card Title 3" cardDesc="Card Description 3"/>
        <Card cardTitle="Card Title 4" cardDesc="Card Description 4"/>
        <Card cardTitle="Card Title 5" cardDesc="Card Description 5"/>
        <Card cardTitle="Card Title 6" cardDesc="Card Description 6"/>
      </div>
      <Footer />
    </>
  )
}

export default App
