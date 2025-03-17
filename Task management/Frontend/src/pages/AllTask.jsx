import React, { useState } from 'react'
import Card from '../Components/Card'
import { IoIosAddCircle } from "react-icons/io";
import InputData from '../Components/inputData';
// import { useState } from 'react';
function AllTask() {
  const [inputDiv, setInputDiv] = useState("hidden")
  return (
    <>
    <div >
      <div className='relative w-full flex justify-end p-3'>
        <button onClick={()=>setInputDiv("fixed")}>
        <IoIosAddCircle className='text-4xl ' />

        </button>

      </div>
      <Card home={"true"} inputDiv = {inputDiv} setInputDiv={setInputDiv} />
    </div>
    <div>
    <InputData inputDiv = {inputDiv} setInputDiv={setInputDiv}/>

    </div>
    </>
  )
}

export default AllTask