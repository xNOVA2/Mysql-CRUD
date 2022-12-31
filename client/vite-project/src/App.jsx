
import { Home } from './components/Home'
import { Navbar } from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Create } from './Create'
function App() {  

  return (
    <>
      <Router>
      <Navbar />
        <Routes>

          <Route  path='/' element={<Home/>}/>
          <Route path='/Create' element={<Create/>}/>

        </Routes>
      </Router>
     
    

    </>
  )
}

export default App
