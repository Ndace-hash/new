import React, { useState, useEffect } from 'react'
import { useGlobal } from "./context";
import {LazyLoadImage} from 'react-lazy-load-image-component'
import axios from 'axios';
export const ListedProducts=()=>{

    const {userNo,userName,userEmail,token,setItems,items,data} =useGlobal()

    
    const [isWarningHidden, setIsWarningHidden]=useState(true)
    const [productId,setProductId]=useState('')
  const [position,setPosition]=useState(null)
    const usersProducts=data.filter((item)=>item.seller.telephone===userNo)
    useEffect(()=>{
       
     setItems(usersProducts)
    },[data,userNo,setItems])

    
 
    
    const  handleDelete=(e)=>{
        const clickedId=e.target.dataset.id
      const clickedPosition=e.target.offsetTop-250
      setPosition(clickedPosition)
      console.log(clickedPosition,'positioninpx');
       setProductId(clickedId)
        setIsWarningHidden(false)
        console.log(productId,'productID',);
    }

    const styles={
        top:!isWarningHidden?position:'0px',
      
    
    
    }

    const dontDeleteItem=()=>{
        setIsWarningHidden(true)
     }
const deleteItem=async()=>{
  console.log(productId,'confirm-product-id');
  const config={
    headers:{
    Authorization:`Bearer ${token}`
  }

  }
  try{
    const url = `https://fmcg.onrender.com/products/${productId}`
    const response = await axios.delete(url,config);
    console.log(response);
   
    setItems((prevItems)=>prevItems.filter((item)=>item._id!==productId))
   setIsWarningHidden(true)
    if (response.status===200){
        console.log('item-deleted');
        
       setIsWarningHidden(true)
    }
  }

  catch(error){
    console.log(error);
  }

}


 return(
    <>
    <h1>this is listed products</h1>
    <article className="listed-product-container">
    <div className="user-column">
        <h4>UserName:{userName}</h4>
        <h4>telephone:{userNo}</h4>
        <h4>emil:{userEmail}</h4>
    </div>  
        <div className='product-col'>
            {
                items.map(({name,image,_id,amount,seller})=>{
                    const imageUrl = image[0].url;
                    const productState=seller.address.state
                    const productCity=seller.address.city
                    return(
                        <div  className="item" >
<LazyLoadImage src={imageUrl} className='item-img'></LazyLoadImage>
                <hr /> 
               
                <div className='item-text' key={_id}>
                <h6>{_id}</h6>
                <h6>{name}</h6>
               <h5>#{amount}</h5>
               <h6>{productCity},{productState}</h6>
                </div>
               <button onClick={handleDelete} data-id={_id} className='delete-btn'>Delete item</button>
                        </div>
                    )
                })
            }
        </div> 
     
      <div className={isWarningHidden?'hide-form':'delete-confirmation'} style={styles}>
   <p >Are you sure you want to delete this product</p >
                <button className='delete-yes' onClick={deleteItem} >Yes</button>
                <button className='delete-no' onClick={dontDeleteItem}>NO</button>

   </div>
        
   
   
      
     

    </article>
   
    </>
 )
}