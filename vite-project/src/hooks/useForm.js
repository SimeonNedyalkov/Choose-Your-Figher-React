import { useState } from "react";

export default function useForm(initialValue,submitCallBack){
    const [values,setValues] = useState(initialValue)

    const changeHandler = (e) =>{
        setValues(state=>({
            ...state,
            [e.target.name] : e.target.value
        }))
    }
    
    const submitHandler = (e) =>{
        e.preventDefault()
        submitCallBack(values)
    }

    return {values,changeHandler,submitHandler}
}