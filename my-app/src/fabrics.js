import React, {useEffect, useState} from 'react'
import  {useGlobal} from './context';
import {LazyLoadImage} from 'react-lazy-load-image-component'
import { Link,useNavigate  } from 'react-router-dom'




export const Fabrics=()=>{
const {state,filter,data,setItemId,itemId}=useGlobal()
const navigate=useNavigate()
const navigateToProductInfo=(e)=>{
  const data=e.target.dataset.id
  console.log(data,'product-id in app');
  setItemId(data)
  console.log(itemId,'product-itemid');
localStorage.setItem('product-id',data)
  navigate('/product-info')
}

//console.log(typeof state.clothFeed,'TYPE OFF OF STATE.CLOTHFEED')

console.log(state.clothFeed,'what is cloth feed pleease..category');
return(
    <>
          

<ul className='row home-link'>
         <Link to={'/'} className='col' >home</Link>
        <Link to={''} className='col'>product</Link>
        <Link to={''} className='col'>about</Link>
        <Link to={'review'} className='col'>review</Link>
    </ul>
<div className='sub-category-filter'>
  <button className='button sub-button'>Guinea</button>
    <button className='button sub-button'>Lace</button>
    <button className='button sub-button'>Ankara</button>
  <button className='button sub-button'>Damask</button>
  <button className='button sub-button'>Aso-oke</button>
  <button className='button sub-button'>Kampala</button>
  <button className='button sub-button'>George-Cloth</button>






</div>
     <article  className='banner  '>
   <div className=' product-side-bar '>
    <h1>CATEGORY</h1>
    <hr />
        <div>
            <h3>price</h3>
     <input type="radio" name='price-group' className='filter-check' onClick={()=>filter('clothes','price','pb3000')}/>  below 3000
     <br />
     <input type="radio" name='price-group' className='filter-check'  onClick={()=>filter('clothes','price','p3000to5000')}/>3000-5000 (k)
     <br />

     <input type="radio" name='price-group' className='filter-check'  onClick={()=>filter('clothes','price','p5000to10000')}/>5000-10000 (k)
     <br />

     <input type="radio" name='price-group' className='filter-check'  onClick={()=>filter('clothes','price','p10000to15000')}/>10000-15000 (k)
     <br />

     <input type="radio" name='price-group' className='filter-check'  onClick={()=>filter('clothes','price','p15000to30000')}/>15000-30000 (k)
     <br />

     <input type="radio" name='price-group' className='filter-check'  onClick={()=>filter('clothes','price','pa30000')}/>above30000 (k)
     <br />


   
   
   
        </div>
        <hr />
     
        <div>
            <h3>gender</h3>
            <input type="radio" name='gender' className='filter-check' onClick={()=>filter('clothes','sex','gender-male')}/>male
     <br />
     <input type="radio" name='gender' className='filter-check' onClick={()=>filter('clothes','sex','gender-female')}/>female
     <br />
     <input type="radio" name='gender' className='filter-check' onClick={()=>filter('clothes','sex','gender-unisex')}/>unisex
     <br />
     <hr />
     </div>

       

   

   


        
        
</div>
          <div className='trend-container '>
    <h1>Fabrics</h1>
    <div className='item-container'>
  {state.clothFeed.length!==0 ?  (
   <>
   {

state.clothFeed.map(({name,image,_id,amount,seller})=>{
  const imageUrl = image[0].url;
  const productState=seller.address.state
      const productCity=seller.address.city
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
     })}
   
   
   </>


  ):<>
  <h1>No item</h1>
  </>}




  
    </div>
</div>
</article>
</>
)


}