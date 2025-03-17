import React from 'react'
import { ImCross } from "react-icons/im";


function InputData({inputDiv, setInputDiv}) {
    return (
        <>
            <div className={`${inputDiv} top-0 left-0 bg-gray-500 opacity-80 h-screen w-full`}> </div>
            <div className={`${inputDiv} top-0 left-0 flex justify-center items-center h-screen w-full`}>
                <div className='w-2/6 bg-gray-900 p-4 rounded'>
                    <div className='flex justify-end py-3'>
                        <button onClick={()=>setInputDiv("hidden")}><ImCross /></button>
                    </div>
                    <input type="text" placeholder='Title' name='Title' className='w-full px-3 py-2 rounded' />
                    <textarea name="desc" cols="30" rows="10" placeholder='Description..' className='w-full px-3 py-2 rounded my-3'></textarea>
                    <button className='px-3 py-2 rounded bg-green-500'>Submit</button>
                </div>
            </div>
        </>
    )
}

export default InputData