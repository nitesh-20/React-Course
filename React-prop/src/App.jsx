import Navbar from "./components/Navbar"
import Card from "./components/Card"
function App() {

  return (
    <>
    <div>
      {/* <h1 className="">Nitesh</h1> */}
      <Navbar/>
      <div className="cards">
      <Card title="bmw" description="Card 2 desc"/>
      <Card title="merc" description="Card 3"/>
      <Card title="honda" description="Card 4"/>
      <Card title="shine" description="Card 5"/>
      </div>
    </div>
    </>
  )
}

export default App
