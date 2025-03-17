import Home from "./pages/Home"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
// import { Outlet } from "react-router-dom";
import AllTask from "./pages/AllTask";
import ImportantTask from "./pages/ImportantTask";
import CompleteTask from "./pages/CompleteTask";
import IncompleteTask from "./pages/IncompleteTask";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
// import './App.css'

function App() {

  return (
    <div className='bg-gray-900 text-white h-screen p-2'>
{/* <Home /> */}
<Router>
  <Routes>
    <Route exact path="/" element={<Home />} > 
    <Route index element={<AllTask />} />
    <Route path="/completetask" element={<CompleteTask />} />
    <Route path="/incompletetask" element={<IncompleteTask />} />
    <Route path="/importantTask" element={<ImportantTask />} />
    </Route>
    <Route path="/signup" element={<SignUp/>} />
    <Route path="/login" element={<Login/>}/>
  </Routes>

</Router>

    </div>
  )
}

export default App
