// import React, { useEffect, useState } from 'react'
// import './Images.css';
// import axios from 'axios';

// const Images = () => {
//     const[images,setImages] = useState();

//     useEffect(() => {
//         async function getData(){
//           const image = await axios.get("https://avatars.dicebear.com/api/human/1.svg")
//         //   const resData = res.data
//         setImages(image)
//           // setName(res.data.name)
//           // console.log(resData[0].name)
//           console.log(image)
//           return getData
//         }  
        
//         // return () => {
//         //   second
//         // }
//         getData();
//       },[])


//   return (
//         <h1 className='image_box'>
//             <img className='image' src={images} alt="avatar"/>
//         </h1>
//   )
// }

// export default Images