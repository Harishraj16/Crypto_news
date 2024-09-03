import React, { useEffect, useState } from 'react'
import Navbar from '../component/Navbar'
import axios from 'axios'
import Blogpost from '../component/Blogpost';

const Homepage = () => {
    const [Api,SetApi] = useState(null);
    useEffect(async ()=>{
        const data = await axios.get(`https://min-api.cryptocompare.com/data/v2/news/?lang=EN`);
        if(data){
            data && SetApi(data?.data?.Data)
        }
    },[])
    console.log(Api)
    if(!Api) return (<div className='flex items-center justify-center'><p className="font-bold text-center">No Data Available!</p></div>)
    return (
        <div className=" px-20 grid grid-cols-3 gap-10 ">
            {
                Api && Api?.map((item,index) => (<Blogpost blog={item} key={index} />))
            }
        </div>
    )
}

export default Homepage
