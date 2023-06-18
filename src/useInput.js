import { useState } from "react"

export default function useInput(inputs){
    const [inputList,setInputList]=useState(inputs)

    function changeInput(e){
        setInputList({...inputList,[e.target.name]:e.target.value})
    }

    return [inputList,changeInput]
}