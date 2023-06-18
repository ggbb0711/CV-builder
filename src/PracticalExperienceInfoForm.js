import React, { useEffect, useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import SettingsIcon from '@mui/icons-material/Settings';
import CheckIcon from '@mui/icons-material/Check';

export default function PracticalExperienceInfoForm({inputs,addInput,deleteInput,setEditModeOfAnInput,setValueOfAnInput}){
    const [inputsValue,setInputs]=useState(inputs)
    

    const handelChange=(e,id)=>{
        setValueOfAnInput('PracticalExperienceInfoForm',id,e.target.name,e.target.value)
    }

    useEffect(()=>{
        addInput('PracticalExperienceInfoForm',{companyname:'',position:'',startdate:'',enddate:'',workexperience:''})
    },[])

    useEffect(()=>{
        
        if(inputs!==inputsValue){
            setInputs({inputs})
        }
    },[inputs])



    return(
        <div className="group/section relative w-full pt-4">
            <p className="border-b-2 border-black">Work experience:</p>
            <span className="top-4 right-0 absolute hidden group-hover/section:block">
                <AddIcon onClick={()=>{addInput('PracticalExperienceInfoForm',{companyname:'',position:'',startdate:'',enddate:'',workexperience:''})}}></AddIcon>
            </span>
            {
                inputsValue.map((value,id)=>
                    <form key={id} action="#" className="group/form relative pt-8" onSubmit={(e)=>{
                        e.preventDefault()
                        setEditModeOfAnInput('PracticalExperienceInfoForm',id)
                        }}>
                        <ul className="justify-between items-center top-0 right-0 absolute hidden group-hover/form:flex">
                            <li className="realative">
                                <input type="submit" className="w-1/2 h-full absolute" value={''} />
                                {value.editMode?<CheckIcon></CheckIcon>:<SettingsIcon></SettingsIcon>}
                            </li>
                            <li><DeleteIcon onClick={()=>{deleteInput('PracticalExperienceInfoForm',id)}}></DeleteIcon></li>
                        </ul>
                        {((value.editMode)?
                        <div className="p-0" action="#">
                            <div className="grid grid-cols-2 grid-rows-4 gap-2 h-[300px] border-b-2 border-black pb-2">
                                <label>
                                    <p>Company name:</p>
                                    <input className="w-full border-2 border-black"type="text" name="companyname" value={value.companyname} onChange={(e)=>handelChange(e,id)}/>
                                </label>
                                <label>
                                    <p>Position:</p>
                                    <input className="w-full border-2 border-black" type="text" name="position" value={value.position} onChange={(e)=>handelChange(e,id)}/>
                                </label>
                                <label>
                                    <p>Start date:</p><input className="border-2 border-black" type="date" name="startdate" value={value.startdate} onChange={(e)=>handelChange(e,id)}/>
                                </label>
                                <label>
                                    <p>End date:</p><input className="border-2 border-black" type="date" name="enddate" value={value.enddate} onChange={(e)=>handelChange(e,id)}/>
                                </label>
                                <label className="col-span-2 row-span-2 h-full">
                                    <p>Work experience:</p>
                                    <textarea className="w-full h-[80%] border-2 border-black" name="workexperience" value={value.workexperience} resi onChange={(e)=>handelChange(e,id)}></textarea>
                                </label>
                            </div>
                        </div>:
                        <div className="grid grid-cols-2 grid-rows-4 gap-2 h-[300px] border-b-2 border-black pb-2">
                            <div>
                                <h1 className="text-lg inline">Company name: </h1>
                                <span>{value.companyname}</span>
                            </div>
                            <div>
                                <h1 className="text-lg inline">Position: </h1>
                                <span>{value.position}</span>
                            </div>
                            <div>
                                <h1 className="text-lg inline">Start date:</h1><span>{value.startdate}</span>
                            </div>
                            <div>
                                <h1 className="text-lg inline">End date:</h1><span>{value.enddate}</span>
                            </div>
                            <div className="text-left col-span-2 row-span-2">
                                <p>{value.workexperience}</p>
                            </div>
                        </div>)}
                    </form>
                )
            }
        </div>
    )
}