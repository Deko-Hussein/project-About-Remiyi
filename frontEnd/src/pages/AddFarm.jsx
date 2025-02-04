import { useState } from "react"
import SideNave from "../component/SideNave"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function AddFarm(){
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const [image, setImage] = useState("")

    const navigate =useNavigate()

    let forData = new FormData()

    forData.append("name",name)
    forData.append("description",description)
    forData.append("price",price)
    forData.append("image",image)

    const handleAddproduct =(e)=>{
        e.preventDefault()
        axios.post("http://localhost:1000/product/create",forData, {
            headers:{
                "Content-Type":"multipart/form-data"
            }
        }).then((res)=>{
            toast("Register product success",{
                position:"top-right",
                autoClose:2000,
                hideProgressBar:false,
                onClose:(()=>navigate("/ProductDash"))
            })
        }).catch((error)=>console.log(error))
    }

    return <div className="">

        <div className=" ml-[30%] pt-40">
    <form >
        <input value={name} onChange={(e)=>setName(e.target.value)} className="border-black border-2 w-80 h-10 rounded-lg px-3 py-6" type="text" placeholder="Name" /> <br /> <br />
        <input value={description} onChange={(e)=>setDescription(e.target.value)} className="border-black border-2 w-80 h-10 rounded-lg px-3 py-6" type="text" placeholder="description" /> <br /> <br />
        <input value={price} onChange={(e)=>setPrice(e.target.value)} className="border-black border-2 w-80 h-10 rounded-lg px-3 py-6" type="number" placeholder="price" /> <br /> <br />
        <input onChange={(e)=>setImage(e.target.files[0])} className="border-black border-2 w-80 h-14 rounded-lg px-3 py-4 " type="file" placeholder="Enter Product Image" /> <br /> <br />
        <button onClick={handleAddproduct} className="bg-slate-600 px-8 py-3 rounded-lg text-white"> Sava Product</button>
    </form>
        </div>
        <ToastContainer />
    </div>
}
export default AddFarm