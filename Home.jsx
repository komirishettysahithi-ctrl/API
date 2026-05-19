import "./Home.css";
import axios from "axios";
import {useState,useEffect} from "react";
function Home(){
    const [data,setData]=useState([]);
    useEffect(()=>{
        axios.get("https://potterapi-fedeperin.vercel.app/en/books")
        .then(res=>res.data)
        .then(d=>setData(d))
    },[])
    console.log(data)
    return(
        <div className="home">
            
            {
                data.map((obj)=>{
                    return(
                        <div className="card">
                            <img src={obj.cover} alt="" />
                        <h3>{obj.title}</h3>
                        </div>
                    )
                })
            }
        </div>
    );
}
export default Home;