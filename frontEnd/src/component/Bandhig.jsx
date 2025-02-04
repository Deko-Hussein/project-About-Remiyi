import { Link } from "react-router-dom"

function Bandhig(){
    return<>
    

<div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-6">User Details</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr className="bg-gray-800 text-white text-left">
              <th className="py-3 px-6">Name</th>
              <th className="py-3 px-6">Email</th>
              <th className="py-3 px-6">Password</th>
              <th className="py-3 px-6">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-6">John Doe</td>
              <td className="py-3 px-6">john.doe@example.com</td>
              <td className="py-3 px-6">••••••••</td>
              <td className="py-3 px-6">$49.99</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-6">Jane Smith</td>
              <td className="py-3 px-6">jane.smith@example.com</td>
              <td className="py-3 px-6">••••••••</td>
              <td className="py-3 px-6">$29.99</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-6">David Johnson</td>
              <td className="py-3 px-6">david.johnson@example.com</td>
              <td className="py-3 px-6">••••••••</td>
              <td className="py-3 px-6">$19.99</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>


        </>
}
export default Bandhig