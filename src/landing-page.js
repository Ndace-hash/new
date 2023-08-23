import React, { useState, useEffect } from 'react'

import { Link,useNavigate } from 'react-router-dom'
import {LazyLoadImage} from 'react-lazy-load-image-component'
//import { popular,shoes,clothes } from './filter'
import { useGlobal } from './context'
import { prints } from './App'



import axios from 'axios'





export const Landing=()=> {
   const {linkReset,userName,token,data,userNo,location,itemId,setItemId}=useGlobal()
   
  // const [token,setToken]=useState('')
   
   
   const[isUserProfileHidden,setIsUserProfileHidden]=useState(true)
   //const [tk,setTk]=useState(null)
  
   const flash=()=>{
  if(isUserProfileHidden){
    setIsUserProfileHidden(false)

  }
  else{
    setIsUserProfileHidden(true)
  }

   }
  
   

   console.log('NO USE EFFECT LANDING TOKEN',token);


   

 


   
   const navigate=useNavigate()
   const navigateToInput=()=>{
    navigate('/input')
   }
   const navigateToProductInfo=(e)=>{
    const data=e.target.dataset.id
    console.log(data,'product-id in app');
    setItemId(data)
    console.log(itemId,'product-itemid');
  localStorage.setItem('product-id',data)
    navigate('/product-info')
  }



console.log(itemId,'landingproduct-id');


console.log('oustised-no', userNo);


const productWithSameUserAddress=data.filter((item)=>item.seller.address.state===location)
const products=productWithSameUserAddress.filter((item)=>item.seller.telephone!==userNo)
console.log(products,'productsskadunathat is not seller own');






return(
    <>
    
     <ul className='row home-link'>
   
         <Link to={'/'} className='col link'>home</Link>
        <Link to={''} className='col link'>product</Link>
        <Link to={''} className='col link'>about</Link>
        <Link to={'review'} className='col link'>review</Link>
        <Link to={'landing-page'} className='col'>Landing</Link>
    </ul>
    <nav className='container-fluid  nav'>
        <div  className='container-fluid upload-nav'>
      <h6 className='sell-text1' >sell on hub6  </h6>
      <img src="download.jpeg" alt="" className='sell-logo' />
      <h6 className='divider1'>|</h6>
      <h6 className='sell-text2'>secured purchase</h6>
      <h6 className='divider2'>|</h6>
      
 <div className='round' onClick={flash}></div>
            <div className='arc' onClick={flash}></div>
     
<h6 className='sell-text3'>{userName}  </h6>
      
   </div>
<h6> <strong>Hub6</strong>   designed by Encoded Enterprise </h6>
       

<br />
         
        <h1 className='logo'>hUb<span className='six'>6</span>
 </h1>
 
                    
                    <form action="" className='search-input'>
               <input type="text"  />
                  
                    </form>
    </nav>


<div className='sell-box container'>
   <h3>START SELLING</h3>
   <div className='sell-square'>

    <h4  className='sell-h'>post an ad </h4>
    <div className='sell-circle'>
       <h2  className='sell-cross' onClick={navigateToInput}>+</h2>
    </div>
   </div>
</div>

  <article  className='banner  '>
      <div className=' side-bar '>
        <ul>
          
{/* <Link  to={'/shoes'} className='side-bar-link' onClick={()=>linkReset(shoes)}>shoes</Link>
<Link to={'/clothes'} className='side-bar-link'  onClick={()=>linkReset(clothes)}>clothing</Link> */}


<Link className='side-bar-link'>perfumes</Link>
<Link className='side-bar-link'>wrist-watch</Link>
<Link className='side-bar-link'>textile</Link>


        
        </ul>
        

        </div>
            <div className='trend-container '>
            
                <h1>BEST DEAL AROUND YOU</h1>


                
<div className='item-container'>
{
    products.map(({id,name,amount,description,image,discount,seller,_id})=>{
      const imageUrl = image[0].url;
      const productState=seller.address.state
      const productCity=seller.address.city
  console.log(image);
        return(
          <div className='item' key={_id} data-id={_id}  onClick={navigateToProductInfo}>
          <LazyLoadImage src={imageUrl} className='item-img'data-id={_id}></LazyLoadImage>
            <hr data-id={_id}/>
            
            <div className='item-text' data-id={_id}>
            <h6 data-id={_id}>{name}</h6>
          <h6 data-id={_id}>price:#{amount}</h6>
          <h6 data-id={_id}>{productCity},{productState}</h6>
            </div>
        </div>
        )
    })
}
</div>
            </div>

<br />
<br />
           

  
  </article>
     
    
            <br />
     <ul className='row home-link'>
         <Link to={'/'} className='col link'>home</Link>
        <Link to={''} className='col link'>product</Link>
        <Link to={''} className='col link'>about</Link>
        <Link to={'review'} className='col link'>review</Link>
        <Link to={'landing-page'} className='col'>Landing</Link>
    </ul>
    <div className={isUserProfileHidden?'hide-form':'user-profile-info'}>
      <Link to={'/listed-products'} className='col link'>Listed Products</Link>
      
    </div>
    </>
)


}


// 