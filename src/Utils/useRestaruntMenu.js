import { useEffect, useState } from "react";
import { MENU_API_URL } from "./constants";


const useRestaruntMenu=(resId)=>{
    const [restinfo,setrestinfo] = useState(null)
    // fetch the menu data data
    useEffect(()=>{
        fetchData();
    },[])
    const fetchData= async()=>{
        const data = await fetch(MENU_API_URL + resId)
        const json = await data.json()
        setrestinfo(json.data)
    }
    return restinfo;
}

export default useRestaruntMenu

