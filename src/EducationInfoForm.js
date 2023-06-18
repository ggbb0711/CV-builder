import React, { useEffect, useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import SettingsIcon from '@mui/icons-material/Settings';
import CheckIcon from '@mui/icons-material/Check';



export default function EducationInfoForm({inputs,addInput,deleteInput,setEditModeOfAnInput,setValueOfAnInput}){
    const [inputsValue,setInputs]=useState(inputs)
    

    const handelChange=(e,id)=>{
        setValueOfAnInput('EducationInfoForm',id,e.target.name,e.target.value)
    }

    useEffect(()=>{
        addInput('EducationInfoForm',{schoolname:'',title:''})
    },[])

    useEffect(()=>{
        
        if(inputs!==inputsValue){
            setInputs({inputs})
        }
    },[inputs])



    return(
        <div className="group/section relative w-full pt-4">
            <p className="border-b-2 border-black">Education:</p>
            <span className="top-4 right-0 absolute hidden group-hover/section:block">
                <AddIcon onClick={()=>{addInput('EducationInfoForm',{schoolname:'',title:''})}}></AddIcon>
            </span>
            {
                inputsValue.map((value,id)=>
                    <form key={id} action="#" className="group/form h-18 pt-4 relative" onSubmit={(e)=>{
                        e.preventDefault()
                        setEditModeOfAnInput('EducationInfoForm',id)
                        }}>
                        <ul className="justify-between items-center top-0 right-0 absolute hidden group-hover/form:flex">
                            <li className="realative">
                                <input type="submit" className="w-1/2 h-full absolute" value={''} />
                                {value.editMode?<CheckIcon></CheckIcon>:<SettingsIcon></SettingsIcon>}
                            </li>
                            <li><DeleteIcon onClick={()=>{deleteInput('EducationInfoForm',id)}}></DeleteIcon></li>
                        </ul>
                        {((value.editMode)?
                        <div className="p-0 w-[450px] border-b-2 border-black pb-2" action="#">
                            <div className="flex justify-between gap-10 items-center">
                                <label className="w-1/2">
                                    <p>School name:</p>
                                    <input className="border-2 border-black w-full"type="text" name="schoolname" value={value.schoolname} onChange={(e)=>handelChange(e,id)}/>
                                </label>
                                <label className="w-1/2">
                                    <p>Title:</p>
                                    <input className="border-2 border-black w-full" type="text" name="title" value={value.title} onChange={(e)=>handelChange(e,id)}/>
                                </label>
                            </div>
                        </div>:
                        <div className="flex justify-between gap-10 items-center border-b-2 border-black pb-2">
                            <div>
                                <h1 className="text-lg inline">School name:</h1><span> {value.schoolname}</span>
                               
                            </div>
                            <div>
                                <h1 className="text-lg inline">Title of study:</h1><span> {value.title}</span>
                            </div>
                        </div>)}
                    </form>
                )
            }
        </div>
    )
}