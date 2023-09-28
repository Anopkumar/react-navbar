
import './App.css'
// import DaisiNav from './components/daisinav/DaisiNav'
import NavBar from './components/daisinav/navbar/NavBar'
import Priceoptions from './components/priceoption/Priceoptions'
import Linechart from './linechart/Linechart'


function App() {


  return (
    <>
     <NavBar></NavBar>
      {/* <DaisiNav></DaisiNav> */}
     
      <h1 className='text-2xl text-center  bg-orange-300'>Vite + React</h1>
     <Priceoptions></Priceoptions>
     <Linechart></Linechart>
    
 
     
      
    </>
  )
}

export default App
