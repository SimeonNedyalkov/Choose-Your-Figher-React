import { useEffect, useState } from "react";

export default function useForm(initialValue,submitCallBack){
    const [values,setValues] = useState(initialValue)

    useEffect(()=>{
      setValues(initialValue)
    },[initialValue])

    const changeHandler = (event) => {
        const { name, value } = event.target;
        console.log(value)
        setValues((prevValues) => {
          const keys = name.split('.');
          if (keys.length > 1) {
            return {
              ...prevValues,
              [keys[0]]: {
                ...prevValues[keys[0]],
                [keys[1]]: value,
              },
            };
          }
          return {
            ...prevValues,
            [name]: value,
          };
        });
      };
    
    const submitHandler = (e) =>{
        e.preventDefault()
        submitCallBack(values)
    }

    return {values,changeHandler,submitHandler}
}