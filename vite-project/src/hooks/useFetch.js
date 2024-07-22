import { useEffect, useState } from "react";

export default function useFetcher(url,initialData){
    const [data,setData] = useState(initialData)
    useEffect(()=>{
        async function fetchData(){
            const response = await fetch(url)
            const result = await response.json()
            setData(result)
        }
        fetchData()
    }
    )
    return data;
}