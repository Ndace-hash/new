import React, { useState, useEffect } from 'react'

import { Link,useNavigate  } from 'react-router-dom'
import {LazyLoadImage} from 'react-lazy-load-image-component'
//import {shoes, } from './context'
import { useGlobal,input } from './context'
import axios from 'axios'
//import {cloth} from './filter'
//import { cl } from './context'


//"homepage": "https://Encoded99.github.io/hub6", always remember your gitHub url , local url is 3005//
  export let prints;
  

function App() {
   const {linkReset,token,setToken,data,setItemId,itemId,clothes,setClothes,setData}=useGlobal()
  // console.log('appshoes',shoes);
  // console.log('final-clothapp',cloth);

   
const navigate=useNavigate()
const [isSignUpHidden,setIsSignUpHidden]=useState(true)
const [isSignInHidden,setIsSignInHidden]=useState(true)
const [isSignIn,setIsSignIn]=useState(false);
const [isLoading,setIsLoading]=useState(false)
////////////////////////////////////////
const [firstName,setFirstName]=useState('')
const [lastName,setLastName]=useState('')
const [telephone,setTelephone]=useState('')

const [email,setEmail]=useState('')
const [password,setPassword]=useState('')
const [houseNumber,setHouseNumber]=useState('')
const [street,setStreet]=useState('')
const [city,setCity]=useState('')
const [state,setState]=useState('')
const [country,setCountry]=useState('')




const signUpData={
  firstName,
  lastName,
  telephone,
  email,
  password,
  address:{
  houseNumber,
  street,
  city,
  state,
  country,
  }
  
}

const navigateToProductInfo=(e)=>{
  const data=e.target.dataset.id
  console.log(data,'product-id in app');
  setItemId(data)
  console.log(itemId,'product-itemid');
localStorage.setItem('product-id',data)
  navigate('/product-info')
}


 const signInData={
 email,
  password, 
}

const signUp=async(e)=>{
   e.preventDefault();
  console.log(signUpData);

  try {
    const url = 'https://fmcg.onrender.com/users';
    const response = await axios.post(url, signUpData);
    console.log('loginesponse',response);
    if (response.status === 200) {
      console.log('Move on');
      console.log('loginesponse',response);
       // Successful response status is 200
    } else {
      console.log('Response Status:', response.status);
      console.log('Response Data:', response.data);
    }
  } 

  catch(error){
    console.log(error);
  }
}







const signIn = async (e) => {
  e.preventDefault();
  setIsLoading(true)
  const url = 'https://fmcg.onrender.com/users/login';
  try {
    const response = await axios.post(url, signInData);
    console.log('response itself', response);
    const tk = await response.data.data.user.accessToken;
    localStorage.setItem('token',tk)
    setToken(tk)
    console.log('sign-in-token-app', token);
    prints=tk

   
   console.log('whatstokensssssss',prints);

   console.log('betterworktoken',token);
   
    if (response.data.status === 'success') {
     setIsLoading(false)
      setIsSignIn(true);
      
      
      
     
    
    } else {
      console.log('Login failed:', response.data.message);
    }
  } catch (error) {
    console.log('Error occurred during login:', error);
  }
};



const handleSignUp=()=>{
  if(isSignUpHidden){
    setIsSignUpHidden(false)
    setIsSignInHidden(true)
  }
  else{
    setIsSignUpHidden(true)

  }
}


const handleSignIn=()=>{
  if(isSignInHidden){
    setIsSignInHidden(false)
    setIsSignUpHidden(true)
    
  }
  else{
    setIsSignInHidden(true)
  }
  
}

if(isSignIn){
  navigate('/landing-page')
}






const handleSelectChange=(e)=>{
setState(e.target.value)
}








  
return(
    <>
     {
      !isLoading ? (
         <>
         <ul className='row home-link'>
         <Link to={'/'} className='col link'>home</Link>
         <Link to={'input'} className='col link'>input</Link>
         
        <Link to={''} className='col link'>product</Link>
        <Link to={''} className='col link'>about</Link>
        <Link to={'review'} className='col link'>review</Link>
        <Link to={'landing-page'} className='col'>Landing</Link>
       
    </ul>
    <nav className='container-fluid  nav'>
        <button >click me</button>
<h6> <strong>Hub6</strong>   designed by Encoded Enterprise </h6>
        <div className='sign-in-sign-up-button'>
        <button   onClick={handleSignUp}>sign up</button>
        <button   onClick={handleSignIn}>sign in</button>
       
        </div>
        

<br />
         
        <h1 className='logo'>hUb<span className='six'>6</span>
 </h1>
 
                    
                    <form action="" className='search-input'>
               <input type="text"  />
                  
                    </form>
    </nav>
    <br />
    <br />
  <article  className='banner  '>
      <div className=' side-bar '>
        <ul>
        <Link to={'clothes'} className='side-bar-link'  onClick={()=>linkReset('clothes')}>clothing</Link>        
<Link  to={'shoes'} className='side-bar-link' onClick={()=>linkReset('shoes')}>shoes</Link>
<Link  to={'bags'} className='side-bar-link' onClick={()=>linkReset('bags')}>Bags</Link>
<Link to={'fragrance'}  className='side-bar-link' onClick={()=>linkReset('fragrances')}>Fragrances</Link>
<Link to={'watch'}  className='side-bar-link'  onClick={()=>linkReset('watch')}>wrist-watch</Link>
<Link Link to={'fabrics'} className='side-bar-link'  onClick={()=>linkReset('fabrics')}>Fabrics</Link>


<Link className='side-bar-link'>computers</Link>
<Link className='side-bar-link'>phones</Link>
<Link className='side-bar-link'>Home-Accesories</Link>


<Link className='side-bar-link'>Computer-Accesories</Link>
<Link className='side-bar-link'>Phone-Accesories</Link>






        
        </ul>
        

        </div>
            <div className='trend-container '>
                <h1>AMAZING DEALS</h1>
<div className='item-container'>
  {data && (
   <>
   {
    data.map(({name,image,_id,amount,seller})=>{
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

<br />
<br />
           

  
  </article>
     <div className={isSignUpHidden ?'hide-form':'form-container' }>
  <h3>PLEASE FILL IN THE FORM</h3>
                <form action="">
            <label htmlFor="">First-name</label>
                  <br />
    <input type="text" name='firstName' value={firstName} onChange={(e)=>setFirstName(e.target.value)} className='signup-form'/>
       <br />
            <label htmlFor="">Last-name</label>
                         <br />

       <input type="text" name='lastName' value={lastName} onChange={(e)=>setLastName(e.target.value)} className='signup-form'/>
       <br />
        <label htmlFor="">Telephone No</label>
                          <br />

       <input type="text" name="telephone"   value={telephone}   onChange={(e)=>setTelephone(e.target.value)} className='signup-form'/>
       <br />
       <label htmlFor="">Email</label>
                          <br />

       <input type="email" name='email' value={email} onChange={(e)=>setEmail(e.target.value)} className='signup-form'/>
       <br />
       <label htmlFor="">Password</label>
                          <br />
       <input type="password" name='password' value={password} onChange={(e)=>setPassword(e.target.value)} className='signup-form'/>
       <br />

       <label htmlFor="">House Number</label>
                          <br />
       <input type="text" name='houseNumber' value={houseNumber} onChange={(e)=>setHouseNumber(e.target.value)} className='signup-form'/>
       <br />
       <label htmlFor="">Street</label>
                           <br />
       <input type="text" name='astreet' value={street} onChange={(e)=>setStreet(e.target.value)} className='signup-form'/>
       <br />
       
         <label htmlFor="">City</label>
                         <br />
         <input type="text" name='city' value={city} onChange={(e)=>setCity(e.target.value)} className='signup-form'/>
         <br />
         <label htmlFor="">State</label>
                          <br />
    
      <select id="" name='state'  onChange={handleSelectChange}>
            <option value='Abia'  className='input-state'>Abia</option>
            <option value='Adamawa' className='input-state'>Adamawa</option>
            <option value='Akwa Ibom'className='input-state'>Akwa Ibom</option>
            <option value='Anambra'className='input-state'>Anambra</option>
            <option 
            value='Bauchi'className='input-state'>Bauchi</option>
            <option value='Bayelsa'className='input-state'>Bayelsa</option>
            <option value='Benue'className='input-state'>Benue</option>
            <option value='Borno'className='input-state'>Borno</option>
            <option value='Cross River'className='input-state'>Cross River</option>
            <option value='Delta'className='input-state'>Delta</option>
            <option value='Ebonyi' className='input-state'>Ebonyi</option>
            <option value='Edo'className='input-state'>Edo</option>
            <option value='Ekiti'className='input-state'>Ekiti</option>
            <option value='Enugu'className='input-state'>Enugu</option>
            <option value='Gombe'className='input-state'>Gombe</option>
            <option value='Imo'className='input-state'>Imo</option>
            <option value='adamawa'className='Jigawa'>Jigawa</option>
            <option value='Kaduna'className='input-state'>Kaduna</option>
            <option value='Kano'className='input-state'>Kano</option>
            <option value='Katsina'className='input-state'>Katsina</option>
            <option value='Kebbi'className='input-state'>Kebbi</option>
            <option value='Kogi'className='input-state'>Kogi</option>
            <option value='Kwara'className='input-state'>Kwara</option>
            <option value='Lagos'className='input-state'>Lagos</option>
            <option value='Nasarawa'className='input-state'>Nasarawa</option>
            <option value='Niger'className='input-state'>Niger</option>
            <option value='Ogun'className='input-state'>Ogun</option>
            <option value='Ondo'className='input-state'>Ondo</option>
            <option value='Osun'className='input-state'>Osun</option>
            <option value='Oyo'className='input-state'>Oyo</option>
            <option value='Plateau'className='input-state'>Plateau</option>
            <option value='Rivers'className='input-state'>Rivers</option>
            <option value='Sokoto'className='input-state'>Sokoto</option>
            <option value='Taraba'className='input-state'>Taraba</option>
            <option value='Yobe'className='input-state'>Yobe</option>
            <option value='Zamfara'className='input-state'>Zamfara</option>


      </select>
       <br />

       <label htmlFor="">Country</label>
                           <br />
     <input type="text" name='country' value={country} onChange={(e)=>setCountry(e.target.value)} className='signup-form'/>
     <br />
     <br />
     <button onClick={signUp} className='submit-button'>Submit</button>

                </form>
            </div>
    
       <div className={isSignInHidden ?'hide-form':'sign-in-container'}>
        <h5 className='sign-in-heading'>SIGN IN</h5>
        <form action="">
          <label htmlFor="">Email</label>
          <br />
          <input type="text" name='email' value={email} onChange={(e)=>setEmail(e.target.value)}className='signup-form'/>
          <br />
          <label htmlFor="">Password</label>
          <br />
          <input type="password" name='password' value={password} onChange={(e)=>setPassword(e.target.value)}className='signup-form'/>
          <br />
           <br />
          <button className='submit-button' onClick={signIn}>Submit</button>
        </form>
       </div>

    
            <br />
     <ul className='row home-link'>
         <Link to={'/'} className='col link'>home</Link>
        <Link to={''} className='col link'>product</Link>
        <Link to={''} className='col link'>about</Link>
        <Link to={'review'} className='col link'>review</Link>
        <Link to={'landing-page '} className='col'>Landing</Link>
    </ul>
         
         
         </>

      ):(
        <>
        <div className='isLoading'>
        <h1 >Loading...</h1>
        </div>
       
        </>
      )}
    </>
)


}

export default App
// 