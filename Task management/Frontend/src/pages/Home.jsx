import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Sidebar";


function Home(){
    return(
        <div className="flex h-[98vh] gap-2">

        {/* <Sidebar /> */}
        <div className="w-1/6 border border-gray-400 rounded-xl p-4 flex flex-col justify-between bg-pink-400">
        <Sidebar />
        </div>
        <div className="w-5/6 border border-gray-400 rounded-xl p-4  ">
        <Outlet />
        </div>
        </div>
    )
}






export default Home;