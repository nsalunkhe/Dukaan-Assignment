import {Routes,Route} from "react-router-dom";
import Home from "../Components/Home";
import Payouts from "../Components/Payouts";

const AllRoutes=()=>{
    return(
        <Routes>
            <Route path='/home' element={<Home/>}></Route>
            <Route path='/' element={<Payouts/>}></Route>
        </Routes>
    )
}
export default AllRoutes;