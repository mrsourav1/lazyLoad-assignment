import { useEffect, useState } from 'react';
import axios from 'axios'
import Card from './Card';
import InfiniteScroll from 'react-infinite-scroll-component';

function Cards() {
    const[names,setName] = useState([]);
    const[hasMore,setHashMore] = useState(true);
    useEffect(() => {
      async function getData(){
        const res = await axios.get("https://jsonplaceholder.typicode.com/users/")
        const resData = res.data
        setName(resData)
        // console.log(resData)
        return resData
      }  
      getData();
    },[])

    const secondTime = async ()=>{
      const res = await axios.get("https://jsonplaceholder.typicode.com/users/")
      const resData = res.data
      return resData;
    }

    const fetchData = async()=>{
      const loading = await secondTime();
      setName([...names,...loading])
      console.log("This is my second Time")
      setHashMore(false)
    }

    return (
        <div className="App">
          <InfiniteScroll dataLength={names.length}
          next = {fetchData}
          hasMore = {hasMore}  // just use true for infinte loop
          loader = {<h2>Loading....</h2>}
          endMessage = {<p>THis is The End</p>}
          >
          {names.map((item,index)=>
              <Card key = {index}
              img = {(`https://avatars.dicebear.com/api/human/${index}.svg`)}
              name= {item.name}
              username = {item.username}
              email = {item.email}
              phone_no = {item.phone}
              website = {item.website}
              />
          
         )} 
         </InfiniteScroll>
        </div>
      );
    }
    
export default Cards;



/* <InfiniteScroll dataLength={names.length}>
          {names.map((item,index)=>
              <Card key = {index}
              img = {(`https://avatars.dicebear.com/api/human/${index}.svg`)}
              name= {item.name}
              username = {item.username}
              email = {item.email}
              phone_no = {item.phone}
              website = {item.website}
              />
         )} */