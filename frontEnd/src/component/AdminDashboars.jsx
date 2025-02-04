

import { Link } from 'react-router-dom';
const AdminDashboard = () => {
  return <>
  <div className="flex bg-gray-100 min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-lime-700 shadow-lg">
        <div className="p-6">
          <h2 className="text-2xl font-bold  text-white">Farm Dashboard</h2>
        </div>
        <nav className="mt-6">
          <ul>
            {/* Banks Section */}
            <li>
              <span className="block py-3 px-6 text-white font-bold text-4xl">Fruts</span>
              <ul className="pl-4">
                <Link to="/Banna"><li>
                  <span className="block py-2 px-6 text-white text-2xl font-bold">Banna</span>
                </li></Link>

             <Link to="/Mangos"><li>
                  <span className="block py-2 px-6 text-white text-2xl font-bold">Mangos</span>
                </li></Link>

            <Link to="/lemoOranj"><li>
                  <span className="block py-2 px-6 text-white text-2xl font-bold">lemo Oranj</span>
                </li> </Link> 

             <Link to="/Karoty">
               <li>
                  <span className="block py-2 px-6 text-white text-2xl font-bold">Karot</span>
                </li> </Link> 
                <Link to="/USERS">
               <li>
                  <span className="block py-2 px-6 text-white text-2xl font-bold">USERS</span>
                </li> </Link> 

              </ul>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Top Navigation */}
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Welcome, User</h1>
          <span className="bg-indigo-600 text-white py-2 px-4 rounded-md">
            Logout
          </span>
        </header>

        {/* Main Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Premier Bank */}
          <Link to="/primerBanksy"><div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="https://images.pexels.com/photos/2316466/pexels-photo-2316466.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Premier Bank" className="w-full h-40 object-cover" />
            <div className="p-4">
              <h2 className="text-lg font-semibold">Moos</h2>
            </div>
          </div></Link>

          {/* Som Bank */}
        <Link to="/SomBank/regiter"><div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img src="https://images.pexels.com/photos/5629821/pexels-photo-5629821.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
             <div className="p-4">
              <h2 className="text-lg font-semibold">Mangoose</h2>
            </div>
          </div></Link>

          {/* Amal Bank */}
        <Link to="/AmalBankSy"> <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img src="https://images.pexels.com/photos/2495220/pexels-photo-2495220.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            <div className="p-4">
              <h2 className="text-lg font-semibold">Limo Orange</h2>
            </div>
          </div> </Link> 


          {/* IBS Bank */}
           <Link  to="/IBSSy">   <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="https://images.pexels.com/photos/1656663/pexels-photo-1656663.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            <div className="p-4">
              <h2 className="text-lg font-semibold">Papaya</h2>
            </div>
          </div>
           </Link>
           <Link  to="/USERS">   <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="https://images.pexels.com/photos/70746/strawberries-red-fruit-royalty-free-70746.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            <div className="p-4">
              <h2 className="text-lg font-semibold"> USERS</h2>
            </div>
          </div>
           </Link>
           <Link  to="/USERS">   <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="https://images.pexels.com/photos/760281/pexels-photo-760281.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            <div className="p-4">
              <h2 className="text-lg font-semibold"> USERS</h2>
            </div>
          </div>
           </Link>
        </div>
      </div>
    </div>
 

      

        
 
 </>
   
};

export default AdminDashboard;