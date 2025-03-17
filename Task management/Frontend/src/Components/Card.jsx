import React from 'react'
import { CiHeart } from "react-icons/ci";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from 'react-icons/md';
import { IoIosAddCircle } from "react-icons/io";


function Card({ home, inputDiv, setInputDiv }) {

    const card = [
        {
            title: "The best coding channel",
            description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
            status: "Complete"
        },
        {
            title: "CPP Concepts",
            description: "Contrary to popular belief, Lorem Ipsum is not simply random text.",
            status: "in Complete"

        },
        {
            title: "Assignment",
            description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
            status: "Complete"

        },
        {
            title: "Project",
            description: "Contrary to popular belief, Lorem Ipsum is not simply random text.",
            status: "in Complete"

        }
    ]
    return (
        <div className='grid grid-cols-3 gap-4 p-4'>
            {card.map((data, ind) => <div className=' flex flex-col justify-between border border-gray-500 rounded-xl p-4'>

                <div>
                    <h3 className='text-xl font-semibold'>{data.title}</h3>
                    <p className='text-gray-300 my-2'>{data.description}</p>
                </div>
                <div className='flex  w-full '>
                    <button className={`${data.status === "in Complete" ? "bg-red-500" : "bg-green-700"} px-2 py-1 rounded w-3/6`}>{data.status}</button>
                    <div className='flex justify-around w-3/6 text-xl'>
                        <button><CiHeart /></button>
                        <button><FaEdit /></button>
                        <button><MdDelete /></button>
                    </div>


                </div>
            </div>
            )}
            {home === "true" && (
                <div onClick={()=>setInputDiv("fixed")} className=' flex flex-col justify-center items-center border border-gray-500 rounded-xl p-4 hover:scale-105 transition-all duration-300'>
                    <IoIosAddCircle className='text-5xl ' />
                    <h2>Add Tasks</h2>
                </div>)}

        </div>
    )
}

export default Card