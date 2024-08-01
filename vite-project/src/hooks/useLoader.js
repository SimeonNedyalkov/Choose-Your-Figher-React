import { useEffect, useState } from "react";

export default function useLoader(){
    const [isLoading,setisLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setisLoading(!isLoading);
        }, 2000);
      }, []);

    return [isLoading,setisLoading]
}