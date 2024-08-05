import { useEffect, useState } from "react";
import fighterData from "../sevices/fighterAPI";

export function useUpdateWinsOfFighter(fighterId,fighter) {
    const [data, setData] = useState(()=>{
        const updatedFighter = {
            ...fighter,
            wins: fighter?.wins + 1
        }
        return updatedFighter
    });

    useEffect(() => {
        async function fetchData() {

            try {
                const response = await fighterData.updateFighter(fighterId,data)
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.error("Error: ", error);
            }
        }

        fetchData();

        return
    }, []);

    return data;
}

const useFighter = {
    useUpdateWinsOfFighter
}
export default useFighter