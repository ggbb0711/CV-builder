import React, { useState } from "react";
import PersonalInfoForm from "./PersonalInfoForm.js";
import EducationInfoForm from "./EducationInfoForm.js";
import PracticalExperienceInfoForm from "./PracticalExperienceInfoForm.js";

export default function App(){
    const [inputs,setInputs]=useState({
        PersonalInfoForm:{
            inputsValue:[]
        },
        EducationInfoForm:{
            inputsValue:[]
        },
        PracticalExperienceInfoForm:{
            inputsValue:[]
        }
    })

    const changeEditModeOfAnInput=function(input){
            if(!input['editMode']){
                for(const value in input){
                    if (value!=='editMode'&&input[value]==='') break
                }
                input['editMode']=true
            }
            else{
                input['editMode']=false
            }
        return input
    }

    const setEditModeOfAnInput=function(form,inputId){
        let clone={...inputs}
        clone[form].inputsValue[inputId]=changeEditModeOfAnInput(clone[form].inputsValue[inputId])

        setInputs(clone)
    }

    const setValueOfAnInput=function(form,inputId,valueName,newValue){
        let clone={...inputs}
        clone[form].inputsValue[inputId][valueName]=newValue

        setInputs(clone)
    }

    const addInput=function(form,addedInputs){
        let clone={...inputs}
        addedInputs.editMode=true
        clone[form].inputsValue.push(addedInputs)

        setInputs(clone)
    }

    const deleteInput=function(form,inputId){
        let clone={...inputs}
        clone[form].inputsValue.splice([inputId],1)

        setInputs(clone)
    }

    return (
        <div className="flex flex-col justify-center items-center w-[450px] m-auto">
            <PersonalInfoForm 
            inputs={inputs.PersonalInfoForm.inputsValue}
            addInput={addInput}
            setEditModeOfAnInput={setEditModeOfAnInput}
            setValueOfAnInput={setValueOfAnInput}
            ></PersonalInfoForm>
            <EducationInfoForm
            inputs={inputs.EducationInfoForm.inputsValue}
            addInput={addInput}
            deleteInput={deleteInput}
            setEditModeOfAnInput={setEditModeOfAnInput}
            setValueOfAnInput={setValueOfAnInput}
            >
            </EducationInfoForm>
            <PracticalExperienceInfoForm
            inputs={inputs.PracticalExperienceInfoForm.inputsValue}
            addInput={addInput}
            deleteInput={deleteInput}
            setEditModeOfAnInput={setEditModeOfAnInput}
            setValueOfAnInput={setValueOfAnInput}
            >
            </PracticalExperienceInfoForm>
        </div>
    )
}