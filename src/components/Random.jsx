import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import Spinner from './Spinner';


const Random = () => {
    const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
  const[gif , setGif] = useState('');
  const[loading , setLoading] = useState(false);

  async function fetchData(){
     setLoading(true);
     const url = `https://api.giphy.com/v1/gifs/random?api_key=OMYHbrZKQ0RiQ5mqCh5MC1KLFxFfzuAg&tag=&rating=g`;
     const {data} = await axios.get(url);
     const imageurl = data.data.images.downsized_large.url;
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
    <div className='text-black bg-orange-300 flex flex-col h-[600px] w-[650px] rounded-md '>
        <h2 className='h-[10%] text-center font-mono text-xl pt-5 rounded-sm w-[90%] ml-6 mt-2 underline'>Random Gif</h2>
        <div className='w-[90%] ml-6 h-[70%] mb-4 flex justify-center items-center'>
            {
               loading ? (<Spinner/>) : (<img src={gif} alt='error' className='h-[90%] w-[100%] rounded-sm'/>)
            }
          
        </div>
        <button onClick={clickHandler} className='h-[10%] bg-purple-400 text-center font-bold text-xl rounded-sm w-[90%] ml-6 mb-2 hover:bg-purple-600'>Generate</button>
    </div>
  )
}

export default Random;