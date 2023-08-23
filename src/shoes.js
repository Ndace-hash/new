import React, {useState} from 'react'
import  {useGlobal} from './context';
import {LazyLoadImage} from 'react-lazy-load-image-component'
import { Link,useNavigate  } from 'react-router-dom'



export const Shoes=()=>{
const {state,filter,setItemId,itemId}=useGlobal()
console.log('shoesfeed',state.clothFeed);
const navigate=useNavigate()
const navigateToProductInfo=(e)=>{
  const data=e.target.dataset.id
  console.log(data,'product-id in app');
  setItemId(data)
  console.log(itemId,'product-itemid');
localStorage.setItem('product-id',data)
  navigate('/product-info')
}



return(
    <>
<ul className='row home-link'>
         <Link to={'/'} className='col' >home</Link>
        <Link to={''} className='col'>product</Link>
        <Link to={''} className='col'>about</Link>
        <Link to={'review'} className='col'>review</Link>
    </ul>
<div className='sub-category-filter'>
  <button className='button sub-button'>palm and sandal</button>
    <button className='button sub-button'>office shoes</button>
  <button className='button sub-button'>sneakers</button>



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
            <h3>size</h3>
     <input type="radio" name='size' className='filter-check' onClick={()=>filter('shoes','size','s35')}/>size 35
     <br />
     <input type="radio" name='size' className='filter-check' onClick={()=>filter('shoes','size','s36')}/>size 36
     <br />
     <input type="radio" name='size' className='filter-check' onClick={()=>filter('shoes','size','s37')}/>size 37
     <br />
     <input type="radio" name='size' className='filter-check' onClick={()=>filter('shoes','size','s38')}/>size 38
     <br />
     <input type="radio" name='size' className='filter-check' onClick={()=>filter('shoes','size','s39')}/>size 39
     <br />
     <input type="radio" name='size' className='filter-check' onClick={()=>filter('shoes','size','s40')}/>size 40
     <br />
     <input type="radio" name='size' className='filter-check' onClick={()=>filter('shoes','size','s41')}/>size 41
     <br />
     <input type="radio" name='size' className='filter-check' onClick={()=>filter('shoes','size','s42')}/>size 35
     <br />
     <input type="radio" name='size' className='filter-check' onClick={()=>filter('shoes','size','s43')}/>size 43
     <br />
     <input type="radio" name='size' className='filter-check' onClick={()=>filter('shoes','size','s44')}/>size 44
     <br />
     <input type="radio" name='size' className='filter-check' onClick={()=>filter('shoes','size','s45')}/>size 45
     <br />
     <input type="radio" name='size' className='filter-check' onClick={()=>filter('shoes','size','s46')}/>size 46
     <br />
     <input type="radio" name='size' className='filter-check' onClick={()=>filter('shoes','size','s47')}/>size 47
     <br />
     <input type="radio" name='size' className='filter-check' onClick={()=>filter('shoes','size','sa47')}/>size above 47
     <br />
     <input type="radio" name='size' className='filter-check' onClick={()=>filter('shoes','size','s1size')}/>One size
     <br />
    
     
    
   <hr />


   
        </div>

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

     <div>
            <h3>brand</h3>
      <input type="radio" name='brand' className='filter-check' onClick={()=>filter('clothes','brand','bNike')}/>Nike
     <br />
     <input type="radio" name='brand' className='filter-check' onClick={()=>filter('clothes','brand','bGucci')}/>Gucci
     <br />
     <input type="radio" name='brand' className='filter-check' onClick={()=>filter('clothes','brand','bDior')}/>Dior
     <br />
     <input type="radio" name='brand' className='filter-check' onClick={()=>filter('clothes','brand','bLv')}/>louis-vuitton
     <br />
     <input type="radio" name='brand' className='filter-check' onClick={()=>filter('clothes','brand','bAdidas')}/>Adidas
     <br />
     <input type="radio" name='brand' className='filter-check' onClick={()=>filter('clothes','brand','bVans')}/>Vans
     <br />
     <input type="radio" name='brand' className='filter-check' onClick={()=>filter('clothes','brand','bVersace')}/>Versace
     <br />
     <input type="radio" name='brand' className='filter-check' onClick={()=>filter('clothes','brand','bBalenciaga')}/>Balenciaga
     <br />
     <input type="radio" name='brand' className='filter-check' onClick={()=>filter('clothes','brand','bArmani')}/>Armani
     <br />
     <input type="radio" name='brand' className='filter-check' onClick={()=>filter('clothes','brand','bSketchers')}/>Sketchers
     <br />
     <input type="radio" name='brand' className='filter-check' onClick={()=>filter('clothes','brand','bAir-Jordan')}/>Air-Jordan
     <br />
     <input type="radio" name='brand' className='filter-check' onClick={()=>filter('clothes','brand','bPuma')}/>Puma
     <br />
     <input type="radio" name='brand' className='filter-check' onClick={()=>filter('clothes','brand','bOthers')}/>Others
    
     <br />
     <hr />
     </div>
     <div>
            <h3>Condition</h3>
     <input type="radio" name='gender' className='filter-check' onClick={()=>filter('clothes','condition','cBrand-New')}/>Brand-New
     <br />
     <input type="radio" name='gender' className='filter-check' onClick={()=>filter('clothes','condition','cUsed')}/>Used
     <br />
   
     <hr />
     </div>
        
        
</div>
          <div className='trend-container '>
    <h1>Shoes</h1>
    <div className='item-container'>
    {state.clothFeed  && (
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
     })

   }

 
   
   
   </>


  )}
    </div>
</div>
</article>
</>
)


}