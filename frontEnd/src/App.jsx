import {Route, Router, Routes} from "react-router-dom"
import Home from "./pages/Home"
import Miyiga from "./component/FahfahinMiyiga"
import Service from "./pages/Service"
import CelServer from "./component/CelServer"
import FarmSav from "./component/FarmSav"
import FarmKind from "./component/FarmKinds"
import SignUp from "./component/SingUP"
import AdminDashboard from "./component/AdminDashboars"
import Admin from "./component/Admin"
import Animals from "./component/Animals"
import GroceryOrder from "./component/GroceryOrder"
import About from "./pages/About"
import Bandhig from "./component/Bandhig"
function App(){
  return <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/Faahfahin" element={<Miyiga/>} />
    <Route path="/Service" element={<Service/>} />
    
    <Route path="/cels" element={<CelServer/>} />
    <Route path="/BuyFarm" element={<FarmSav/>} />
    <Route path="/Nucyada Bearaha" element={<FarmKind/>} />
    <Route path="/Nucyada Xoolaha" element={<Animals/>} />
    <Route path="/Sing In" element ={<SignUp/>}/>
    <Route path="/AdminDashboar" element={<AdminDashboard/>}/>
    <Route path="/Admin" element={<Admin/>} />
    <Route  path="grecery" element={<GroceryOrder/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/Banna" element={<Bandhig/>} />
  </Routes>
}
export default App