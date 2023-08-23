import React, { useEffect, useState } from "react";
import { useGlobal } from "./context";
import {LazyLoadImage} from 'react-lazy-load-image-component'
import axios from "axios";


export const ProductInfo=()=>{
    const {itemId,setItemId}=useGlobal()
    console.log('prductid',itemId);
    const [data,setData]= useState({})
    const [isLoading,setIsLoading]=useState(true)
  //  const [tagType,setTagType]=useState('')
//const [tagBrand,setTagBrand]=useState('')
//const [tagCondition,setTagCondition]=useState('')
//const [tagSwap,setTagSwap]=useState('')
//const [tagSize,setTagSize]=useState('')
//const [tagGender,setTagGender]=useState('')
//const [tagFashionCondition,setTagFashionCondition]=useState('')
//const [tagRam,setTagRam]=useState('')
//const [tagProcessor,setTagProcessor]=useState('')
//const [tagDiskSpace,setTagDiskSpace]=useState('')
//const [tagDiskType,setTagDiskType]=useState('')
//const [tagDisplay,setTagDisplay]=useState('')
    let tagBrand;
    let tagSize;
    let tagType;
    let tagCondition;
    let tagFashionCondition;
    let tagGender;
    let tagRam;
    let tagProcessor;
    let tagDiskSpace;
    let tagDiskType;
    let tagDisplay;
    let tagSwap;
    
    const localId=localStorage.getItem('product-id')

const fetchProductInfo=async()=>{
    console.log(itemId,'idbefore asyc');
    if(localId){
        setItemId(localId)
    }
  try{

   const url = `https://fmcg.onrender.com/products/${itemId}`
    const response= await axios.get(url)
    console.log('the response i want',response);
    const datas=await response.data.data.product;
   
    console.log('the response i want',data);
    setData(datas)
    
    
   console.log(response,'resposneee');
   setIsLoading(false)
   if (response.status === 200) {
    const data = response.data.data.product;

    if (data.seller.telephone) {
      // Process the data here
      console.log('telephone exist');
      // ...
    } else {
      // Handle missing or undefined properties
      console.error('Some properties are missing or undefined in the API response');
    }
  } else {
    // Handle API error responses
    console.error('API request failed with status:', response.status);
  }
}


catch(error){
    console.log(error);
}
}

if(data.tags){
    console.log('data-tagsss',data.tags);

    if(data.tags.some(tag => tag.includes('BRAND'))||data.tags.some(tag => tag.includes('Brand'))){
        const brand=data.tags.filter(tag =>tag.includes('BRAND')||tag.includes('Brand'))[0].substring(6);
        tagBrand=brand
        console.log(tagBrand,'tagbrand');

    }
   

    
    if(data.tags.some(tag => tag.includes('TYPE'))||(data.tags.some(tag => tag.includes('Type')))){
        const type=data.tags.filter(tag =>tag.includes('Type')||tag.includes('TYPE'))[0].substring(5);
        tagType=type
    }
    
    if(data.tags.some(tag => tag.includes('SIZE'))){
        const size=data.tags.filter(tag =>tag.includes('SIZE'))[0].substring(5);
        tagSize=size 
        console.log(tagSize,'tagSIZE');
    }
    console.log(tagType,'tagType');
    if(data.tags.some(tag => tag.includes('Condition'))){
        const condition=data.tags.filter(tag =>tag.includes('Condition'))[0].substring(10);
        tagCondition=condition
        console.log(tagCondition,'tagCondition');
    }
    
   if(data.tags.some(tag => tag.includes('STATE'))){
    const fashionCondition=data.tags.filter(tag =>tag.includes('STATE'))[0].substring(6);
    tagFashionCondition= fashionCondition
    console.log(tagFashionCondition,'tagFashionCondition');
   }
    
    if(data.tags.some(tag => tag.includes('ram'))){

        const RAM=data.tags.filter(tag =>tag.includes('ram'))[0].substring(4);
        tagRam=RAM
    }
   if(data.tags.some(tag => tag.includes('Processor'))){
    const processor=data.tags.filter(tag =>tag.includes('Processor'))[0].substring(10);
    tagProcessor=processor
   }
  if(data.tags.some(tag => tag.includes('Disk-Space'))){
    const diskSpace=data.tags.filter(tag =>tag.includes('Disk-Space'))[0].substring(11);
    tagDiskSpace=diskSpace
  }
     if(data.tags.some(tag => tag.includes('Disk-Type'))){
        const diskType=data.tags.filter(tag =>tag.includes('Disk-Type'))[0].substring(11);
      tagDiskType=diskType

     }
     if(data.tags.some(tag => tag.includes('Display'))){
        const display=data.tags.filter(tag =>tag.includes('Display'))[0].substring(8);
      tagDisplay=display

     }
     if(data.tags.some(tag => tag.includes('SWAP'))){
        const swap=data.tags.filter(tag =>tag.includes('SWAP'))[0].substring(11);
        tagSwap=swap

     }

     if(data.tags.some(tag => tag.includes('Gender'))){
        const gender=data.tags.filter(tag =>tag.includes('Gender'))[0].substring(7);
        tagGender=gender

     }
      
      
      
     
}

useEffect(()=>{
fetchProductInfo()
},[itemId])
console.log(data,'data-please-show-me');

    return(
        <>
       
      
        <h1>this is listed products</h1>
       
            <article className="listed-container">
            <div className="listed-col-1">
                <div>     
                {data.image && data.image[0] && (
      <LazyLoadImage src={data.image[0].url} className="product-info-img"></LazyLoadImage>
    )}
    </div> 
    <div>
        <h2>{data.name}</h2>
        <h6>kaduna</h6>
    </div>
    <hr />
    <div className="partition-container">
        <div className="partition-1">
          
             {tagType&&(
                <>
            
                 <h6>{tagType}</h6>TYPE
                 
                </>
               
            )}
        
             


              {tagSize&&(
          
                <>
                <hr />
                <h6>{tagSize}</h6>   Size
           
                </>
              
            )}
           
             {tagRam&&(
                <>
                <hr />
                 <h6>{tagRam}</h6>
                 RAM
                </> 
            )}
            {tagProcessor&&(
                <>
                <hr />
                 <h6>{tagProcessor}</h6>
              Processor  
                </>
             
            )}
            {tagDiskSpace&&(
                <>
                <hr />
                <h6>{tagDiskSpace}</h6>
              Disk-Space
                </>
                
            )}
              
        </div>
        <div className="partition-2">

        {tagBrand && (
                <>
               
                <h6>{tagBrand}</h6>
             brand
                </>
              )}
        {tagGender&&(
                <>
                <hr />
              <h6>{tagGender}</h6>
              Gender  
                </>
                
             )}
            {tagFashionCondition&&(
                <>
                <hr />
                  <h6>{tagFashionCondition}</h6>
              Condition
                </>
              
            )}

            {tagCondition&&(
                <>
                <hr />
                <h6>{tagCondition}</h6>
              Condition  
                </>
              
            )}
            {tagSwap&&(
                <>
                <hr />
                <h6>{tagSwap}</h6>
              is it available for Swap
                </>
                
            )}
            {tagDisplay&&(
                <>
                <hr />
               <h6>{tagDisplay}</h6>
              Display 
                </>
                
            )}

            {tagDiskType&&(
                <>
                <hr />
                <h6>{tagDiskType}</h6>
              Hard Disk Type
                </>
                
            )}
        </div>
    </div>
    
    <hr />
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel fugiat dolorum quis saepe architecto at!</p>
    <button className="button-danger">show contact</button>
    <hr />
    <br />
    <br />
            </div>
    <div className="listed-col-2">
        <h2>{data.amount}</h2>
        <hr />
        <h1>{data.seller && data.seller.firstName &&data.seller.lastName&&(
            <h1>
                {data.seller.firstName} {data.seller.lastName}
            </h1>
        )}</h1>
        <hr />
        <button className="button-danger">      {data.seller && data.seller.telephone && (
      <h4>{data.seller.telephone}</h4>
    )}</button>
        <hr />
        <h5>Safety tips </h5>
        <ul>
            <li>Don't pay in advance, including for delivery</li>
            <li>Meet the seller at a safe public place</li>
            <li>Inspect the item and ensure it's exactly what you want</li>
            <li>On delivery, check that the item delivered is what was inspected</li>
            <li>Only pay when you're satisfied</li>
            
        </ul>
    <hr />
    </div>
            </article>
     



        
       
        </>
     )
}

const Loading=()=>{
    return(
        <div>
            <h1>Loading.....</h1>
        </div>
    )
}