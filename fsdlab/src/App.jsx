import Home from './pages/Home.jsx'
import Form from './pages/Form.jsx'
import FromForm from './pages/FromForm.jsx'
import Temp from './pages/Temp.jsx'
import UseDemo from './pages/Use.jsx'
import FetchDemo from './pages/Fetch.jsx'
import FetchDemo2 from './pages/FetchMany.jsx'
import Backend from './pages/Backend.jsx'
import { Route, Routes , Link} from 'react-router-dom';


function App(){
  return (
  <div>

  
  <nav>
    <Link to = "/">Home</Link>
    <br/>
    <Link to = "/form">Form</Link>
    <br/>
    <Link to ="/temp">Temp</Link>
    <br/>
    <Link to = "/UseDemo">UseDemo</Link>
    <br/>
    <Link to = "/FetchDemo">FetchDemo</Link>
    <br/>
    <Link to = "/FetchDemo2">FetchDemo2</Link>
    <br/>
    <Link to = "/Backend">Backend</Link>
    <br/>

  </nav>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/form" element={<Form/>}/>
    <Route path="/temp" element={<Temp/>}/>
    <Route path="/UseDemo" element={<UseDemo/>}/>
    <Route path="/FetchDemo" element={<FetchDemo/>}/>
    <Route path="/FetchDemo2" element={<FetchDemo2/>}/>
    <Route path="/Backend" element={<Backend/>}/>

  </Routes>

  </div>

  )
} 

export default App;