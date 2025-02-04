import AdminDashboard from "./AdminDashboars"

function SideAdmin(){
    return<>
    {/* <AdminDashboard/> */}
    <div className="pt-10 grid grid-cols-3 ml-[10%]">
    <div className="bg-white shadow-lg shadow-lime-600 w-60 h-40 rounded-lg  ">
            <h1 className="text-2xl text-center text-white pt-10">Farms </h1>
            <h1 className="text-2xl text-center text-white pt-2">0</h1>
        </div>
        <div className="bg-white shadow-lg shadow-lime-600 w-60 h-40 rounded-lg  ">
            <h1 className="text-2xl text-center text-white pt-10">Farms</h1>
            <h1 className="text-2xl text-center text-white pt-2">0</h1>
        </div>
        </div>
    
    </>

}
export default SideAdmin