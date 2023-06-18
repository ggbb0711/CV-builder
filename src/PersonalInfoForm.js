import React, { useEffect, useState } from "react";
import SettingsIcon from '@mui/icons-material/Settings';
import CheckIcon from '@mui/icons-material/Check';


export default function PersonalInfoForm({inputs,addInput,setEditModeOfAnInput,setValueOfAnInput}){
    const [inputsValue,setInputs]=useState(inputs)
    

    const handelChange=(e,id)=>{
        setValueOfAnInput('PersonalInfoForm',id,e.target.name,e.target.value)
    }

    useEffect(()=>{
        addInput('PersonalInfoForm',{name:'',email:'',phone:'',profile:'',avatar:'https://static.vecteezy.com/system/resources/previews/009/734/564/original/default-avatar-profile-icon-of-social-media-user-vector.jpg'})
    },[])

    // useEffect(()=>{
        
    //     if(inputs!==inputsValue){
    //         setInputs({...inputsValue,[inputs.target.name]:inputs.target.value})
    //     }
    // },[inputs])



    return(
        <>
            {
                inputsValue.map((value,id)=>
                    <form key={id} action="#" className="relative group/section w-full" onSubmit={(e)=>{
                        e.preventDefault()
                        setEditModeOfAnInput('PersonalInfoForm',id)
                        }}>
                        <span className="top-0 right-0 absolute hidden group-hover/section:block">
                            <input type="submit" className="w-full h-full absolute" value={''} />
                            {value.editMode?<CheckIcon></CheckIcon>:<SettingsIcon></SettingsIcon>}
                        </span>
                        {((value.editMode)?
                        <div action="#">
                            <p className="border-b-2 border-black">Personal Info</p>
                            <div className="flex justify-between gap-10 items-center border-b-2 border-black pb-2">
                                <div>
                                    <label>
                                        <p>Name:</p>
                                        <input className="border-2 border-black"
                                        type="text" name="name" value={value.name} onChange={(e)=>handelChange(e,id)}/>
                                    </label>
                                    <label>
                                        <p>Email:</p>
                                        <input className="border-2 border-black" type="email" name="email" value={value.email} onChange={(e)=>handelChange(e,id)}/>
                                    </label>
                                    <label>
                                        <p>Phone number:</p>
                                        <input className="border-2 border-black" type="tel" name="phone" value={value.phone} onChange={(e)=>handelChange(e,id)}/>
                                    </label>
                                    <label>
                                        <p>Profile:</p>
                                        <textarea className="w-full border-2 border-black" name="profile" value={value.profile} onChange={(e)=>handelChange(e,id)}></textarea>
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <p>Image profile:</p>
                                        <img className="w-[150px] h-[150px] rounded-full border-2 border-black" src={value.avatar} alt="avatar" />
                                        <input type="file" name="avatar" accept="image/jpeg , image/png" onChange={(e)=>{
                                                if(e.target.files && e.target.files[0]){
                                                    handelChange({target:{name:e.target.name,value:URL.createObjectURL(e.target.files[0])}},id)
                                                }
                                            }
                                        } />
                                    </label>
                                </div>
                            </div>
                        </div>:
                        <div className="flex justify-between gap-10 items-center w-[450px] border-b-2 border-black pb-2">
                            <div>
                                <h1 className="text-2xl">{value.name}</h1>
                                <p className="opacity-50">{value.email}</p>
                                <p className="opacity-50">{value.phone}</p>
                                <div className="break-all">
                                    <h2 className="text-xl text-center">Profile</h2>
                                    <p>{value.profile}</p>
                                </div>
                            </div>
                            <img className="w-[150px] h-[150px] rounded-full border-2 border-black" src={value.avatar} alt="avatar" />
                        </div>)}
                    </form>
                )
            }
            
        </>

    )
}