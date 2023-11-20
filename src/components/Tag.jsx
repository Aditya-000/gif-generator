import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
import Spinner from './Spinner';

const Tag = () => {
    const[gif , setGif] = useState('');
    const[loading , setLoading] = useState(false);
    const[tag,setTag] = useState("Search");
    const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
    async function fetchData(){
       setLoading(true);
       const url = `https://api.giphy.com/v1/gifs/search?api_key=OMYHbrZKQ0RiQ5mqCh5MC1KLFxFfzuAg&q=${tag}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;
       const {data} = await axios.get(url);
       const imageurl = data.data[0].images.original.url;
       setGif(imageurl);
       setLoading(false);
    }
  
    useEffect( ()=>{
      fetchData();
    },[])
  
    function clickHandler(){
           fetchData();
    }
  
  
    return (
      <div className='text-black bg-rose-500 flex flex-col h-[600px] w-[650px] rounded-md '>
          <h2 className='h-[10%] text-center font-mono text-xl pt-5 rounded-sm w-[90%] ml-6 mt-2 underline'>Search Gif</h2>
          <div className='w-[90%] ml-6 h-[70%] mb-4 flex justify-center items-center'>
              {
                 loading ? (<Spinner/>) : (<img src={gif} alt='error' className='h-[90%] w-[100%] rounded-sm'/>)
              }
            
          </div>
          <input 
          className='my-2 h-10 text-center outline-none w-[90%] ml-6 text-md font-mono'
          onChange={ (event)=>{
            setTag(event.target.value);
          }}
           placeholder="search a gif"
          ></input>
          <button onClick={clickHandler} className='h-[10%] bg-purple-400 text-center font-bold text-xl rounded-sm w-[90%] ml-6 mb-2 hover:bg-purple-600'>Generate</button>
      </div>
    )
}

export default Tag