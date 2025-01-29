import { useEffect, useState } from "react";
import { MEME_API_URL } from "../utils/const";
import Card from "./components/Card"
import ShimmerCard from "./components/ShimmerCard"
import "./index.css"

export default function InfiniteScroll(){
    const [loading,setLoading]=useState(false);
    const [data,setData]=useState([])
    console.log(loading)

    useEffect(()=>{
        fetchData()
        window.addEventListener("scroll",handleScroll)
        return ()=> window.removeEventListener("scroll",handleScroll)
    },[])

    function handleScroll(){
        if(window.innerHeight+window.scrollY+10>=document.body.scrollHeight){
            fetchData()
        }
    }

    async function fetchData(){
        setLoading(true)
        await new Promise((res,rej)=>{
            setTimeout(()=>{
                res()
            },3000)
        })
        const response= await fetch(MEME_API_URL)
        const json=await response.json();
        setData(prev=>([...prev,...json.memes]))
        setLoading(false)
    }
    return <div className="flex flex-wrap gap-4">
        {data?.map((meme)=>(
            <Card data={meme} />
        ))}
        {loading && [...Array(20)].map((_)=>(<ShimmerCard />))}
    </div>
}