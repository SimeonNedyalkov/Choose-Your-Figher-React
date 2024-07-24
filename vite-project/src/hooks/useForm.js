import { useState,useEffect } from "react";

export default function useForm(initialValues){
    const [values,setValues] = useState(initialValues)

    useEffect(()=>{
        async ()=>{
          const response = await fetch('http://localhost:3030/jsonstore/advanced/profiles')
          const profile = await response.json()
          console.log(profile)
          setFormData(profile)
        }
      })

    const changeHandler = (e) =>{
        console.log(e.target.value)
        setValues(oldValues=>({
          ...oldValues,
          [e.target.name] : e.target.value
          
        }))
      }

      const submitHandler = (e) =>{
        e.preventDefault()
        const formData = Object.entries(e.target)
        console.log(formData)
      }

    return {
        values,
        changeHandler,
        submitHandler
    };
}