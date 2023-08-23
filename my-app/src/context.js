import React,{useContext, useEffect, useReducer, useState} from "react";
import { popular,shoes,clothes } from './filter'
//import { data } from "./data"


import axios from 'axios'


let input=null
const reducer=(state,action)=>{

/////////////////enough jargons///////

if(action.type==='fetch-data'){
   return{...state,clothFeed:action.payload.input}
}
    
    //price filter start here //
    if(action.type==='hard-reset'){
      console.log('clothfeed',state.clothFeed);
  return {
   
   clothFeed:input,
   clothTrack:'default',
    clothSelected:false,
    clothSeries:[],
    clothVfilter:[{id:1,name:'nil'},{id:2, name:'na'}],
    clothCount:0,
   


  }

    }






///////clothes logic start here //////////////
    if(action.type==='filter'){

      console.log('clothfeedtags',input);
      console.log('clothfeedtags',typeof input);

     console.log('action-payload',action.payload);
     console.log('vfilter',state.clothVfilter);
     console.log('track',state.clothTrack);
     console.log('series',state.clothSeries);
   console.log('count',state.clothCount);

   const filterMethods={
      'pb3000':(array)=>array.filter((item)=>item.amount<3000),
      'p3000to5000':(array)=>array.filter((item)=>item. amount>=3000 && item.amount<=5000),
      'p5000to10000':(array)=>array.filter((item)=>item. amount>=5000 && item.amount<=10000),
      'p10000to15000':(array)=>array.filter((item)=>item. amount>=10000 && item.amount<=15000),
      'p15000to30000':(array)=>array.filter((item)=>item. amount>=15000 && item.amount<=30000),
      'pa30000':(array)=>array.filter((item)=>item.amount>30000),

//gender start here//
'gender-male':(array)=>array.filter(({tags}) =>tags.includes("Gender:MALE")),
 'gender-female':(array)=>array.filter(({tags}) =>tags.includes("Gender:FEMALE")), 
 'gender-unisex':(array)=>array.filter(({tags}) =>tags.includes("Gender:UNISEX")), 



     'sSmall':(array)=>array.filter(({tags}) =>tags.includes("SIZE:Small")),
     'sMedium':(array)=>array.filter(({tags}) =>tags.includes("SIZE:Medium")),
     'sLarge':(array)=>array.filter(({tags}) =>tags.includes("SIZE:Large")),
     'sXlarge':(array)=>array.filter(({tags}) =>tags.includes("SIZE:Extra-Large")),
     //shoes.size// 
     's35':(array)=>array.filter(({tags}) =>tags.includes("SIZE:35")),
     's36':(array)=>array.filter(({tags}) =>tags.includes("SIZE:36")),
     's37':(array)=>array.filter(({tags}) =>tags.includes("SIZE:37")),
     's38':(array)=>array.filter(({tags}) =>tags.includes("SIZE:38")),
     's39':(array)=>array.filter(({tags}) =>tags.includes("SIZE:39")),
     's40':(array)=>array.filter(({tags}) =>tags.includes("SIZE:40")),
     's41':(array)=>array.filter(({tags}) =>tags.includes("SIZE:41")),
     's42':(array)=>array.filter(({tags}) =>tags.includes("SIZE:42")),
     's43':(array)=>array.filter(({tags}) =>tags.includes("SIZE:43")),
     's44':(array)=>array.filter(({tags}) =>tags.includes("SIZE:44")),
     's45':(array)=>array.filter(({tags}) =>tags.includes("SIZE:45")),
     's46':(array)=>array.filter(({tags}) =>tags.includes("SIZE:46")),
     's47':(array)=>array.filter(({tags}) =>tags.includes("SIZE:47")),
     'sa47':(array)=>array.filter(({tags}) =>tags.includes("SIZE:above-47")),
     's1size':(array)=>array.filter(({tags}) =>tags.includes("SIZE:one-size")),

//brands//
'bGucci':(array)=>array.filter(({tags}) =>tags.includes("BRAND:Gucci")),
'bDior':(array)=>array.filter(({tags}) =>tags.includes("BRAND:Dior")),
'bLv':(array)=>array.filter(({tags}) =>tags.includes("BRAND:Louis-Vuitton")),
'bPrada':(array)=>array.filter(({tags}) =>tags.includes("BRAND:Prada")),
'bVersace':(array)=>array.filter(({tags}) =>tags.includes("BRAND:Versace")),
'bBalenciaga':(array)=>array.filter(({tags}) =>tags.includes("BRAND:Balenciaga")),
'bArmani':(array)=>array.filter(({tags}) =>tags.includes("BRAND:Armani")),
'bOff-white':(array)=>array.filter(({tags}) =>tags.includes("BRAND:Off-white")),
'bBurbery':(array)=>array.filter(({tags}) =>tags.includes("BRAND:Burbery")),
'bNike':(array)=>array.filter(({tags}) =>tags.includes("BRAND:Nike")),
'bAdidas':(array)=>array.filter(({tags}) =>tags.includes("BRAND:Adidas")),
'bPuma':(array)=>array.filter(({tags}) =>tags.includes("BRAND:Puma")),
'bOthers':(array)=>array.filter(({tags}) =>tags.includes("BRAND:Others")),
//....shoes-specific brand//
'bVans':(array)=>array.filter(({tags}) =>tags.includes("BRAND:Vans")),
'bSketchers':(array)=>array.filter(({tags}) =>tags.includes("BRAND:Sketchers")),
'bAir-Jordan':(array)=>array.filter(({tags}) =>tags.includes("BRAND:Air-Jordan")),
//fragrance-specific-brand
'bArabian-perfumes':(array)=>array.filter(({tags}) =>tags.includes("BRAND:Arabian-perfumes")),
'b212':(array)=>array.filter(({tags}) =>tags.includes("BRAND:212")),
'bChanel':(array)=>array.filter(({tags}) =>tags.includes("BRAND:Chanel")),
'bPassion':(array)=>array.filter(({tags}) =>tags.includes("BRAND:Passion")),
'bLola':(array)=>array.filter(({tags}) =>tags.includes("BRAND:Lola")),
'bSurrati':(array)=>array.filter(({tags}) =>tags.includes("BRAND:Surrati")),
'bTony-montana':(array)=>array.filter(({tags}) =>tags.includes("BRAND:Tony-montana")),
//wrist watch brand//
'bRolex':(array)=>array.filter(({tags}) =>tags.includes("BRAND:Rolex")),
'bHublot':(array)=>array.filter(({tags}) =>tags.includes("BRAND:Hublot")),
'bPatek':(array)=>array.filter(({tags}) =>tags.includes("BRAND:Patek")),
'bCasio':(array)=>array.filter(({tags}) =>tags.includes("BRAND:Casio")),
'bCartiers':(array)=>array.filter(({tags}) =>tags.includes("BRAND:Cartier")),
//BAGS BRAND//
'bHp':(array)=>array.filter(({tags}) =>tags.includes("BRAND:HP Custom")),
'bPolo':(array)=>array.filter(({tags}) =>tags.includes("BRAND:Polo")),



//REMEMBER TO CREATE A SEPARATE BRAND THAT START WITH (Brand) FOR ALL ELECTRONICS//



//CONDITION///
'cBrand-New':(array)=>array.filter(({tags}) =>tags.includes("STATE:New")),
'cUsed':(array)=>array.filter(({tags}) =>tags.includes("STATE:Used")),




/////
   
   
   } ;


   const filterMethod=filterMethods[action.payload.work];
   

  
  if(action.payload ){


//The reason for this below if statement is to ensure that item are filtered according even though there track is not the same but , the reason for the track itself is to keep track of the category that filtering is been applied on, so the code below check if the track are not the same that is the filtering is been done on different category, and `&& state.track !=='default'` is added to ensure that as at the time of the comparison the track itself is not the default one, the return statement update Feed that is feed been mapped to be displayed,the track is been updated as the category inputed, the clothSelected is set to true to keep track that atleast two different category has  been selected,the action.payload.work is pushed into clothSeries to keep track of every filtering clicked this is used in the later part of the code which will be explained later.kindly note that the vfilter is also return to keep track on when an empty array is returned, there is a later code that handle that
      if (action.payload.category!==state.clothTrack ){

  if(state.clothTrack==='default'){

   const filter=filterMethod(input)
      
   return {...state,clothFeed:filter,clothTrack:action.payload.category,clothSelected:false,clothVfilter:filter,clothSeries:[...state.clothSeries,action.payload.work],clothCount:state.clothCount+1} 

}

   else if(state.clothTrack!=='default'){

    

      
  let workFirstLetter=action.payload.work[0]
   //console.log('important-work firstletter',workFirstLetter);
     const arrayID=[];
   
   
   for(let i=state.clothSeries.length-1;i>=0;i--){
      let element=state.clothSeries[i]
      
      if(element[0]!==workFirstLetter && !arrayID.includes(element)){
         workFirstLetter=element[0]
         // console.log('elemnt0',element);
         arrayID.push(element)
                   

      }
   
   }

   

   console.log('initialID',arrayID);
    


for(let i=0;i<arrayID.length;i++){


 


}
 





   let id=arrayID.filter((item)=>item[0]!==action.payload.work[0])
   const lastID=[];
   for(let i=0;i<id.length;i++){
      const element=id[i]
      const firstLetter=element.charAt(0)
const doesDuplicateExist=lastID.some((item)=>item.charAt(0)===firstLetter)
if(doesDuplicateExist){
   console.log('real-id',id);
   console.log('duplicate-exist');
}
else if(!doesDuplicateExist){
   lastID.push(element)
   console.log('real-id',id);
      console.log('last-id',lastID);

   console.log('duplicate doesnt exist');
}
     
   }
 // console.log('real-id',id);
 console.log('last-id',lastID);
 
  console.log('count',state.count);
  console.log('vfliter',state.clothVfilter);

   let filteredItem=input;
  // console.log('filtered-item before iteration',filteredItem);

for (let i=lastID.length-1;i>=0;i--){
   const element=lastID[i]

const specialFilterMethod=filterMethods[element]
 filteredItem=specialFilterMethod(filteredItem)

}
 //console.log('filtered-item after iteration',filteredItem);

const filter=filterMethod(filteredItem);
console.log('filter',filter);
console.log('VVfilter',state.clothVfilter);

return {...state,clothFeed:filter,clothTrack:action.payload.category,clothSelected:false,clothVfilter:filter,clothSeries:[...state.clothSeries,action.payload.work],clothCount:state.clothCount+1,} 

   }
  

  }
   

 else if(action.payload.category===state.clothTrack){
                  
  if(state.clothCount<=1){
  const filter=filterMethod(input)
              
   return {...state,clothFeed:filter,clothVfilter:filter,clothSeries:[...state.clothSeries,action.payload.work],} 
  }
     
else if(state.clothCount>=2){


let workFirstLetter=action.payload.work[0]
   //console.log('important-work firstletter',workFirstLetter);
     const arrayID=[]
   for(let i=state.clothSeries.length-1;i>=0;i--){
      let element=state.clothSeries[i]
      
      if(element[0]!==workFirstLetter && !arrayID.includes(element)){
          
         // console.log('elemnt0',element);
 workFirstLetter=element[0]
         arrayID.push(element)
        
      }
   

   }
     // console.log('arrayID',arrayID);
      const id=arrayID.filter((item)=>item[0]!==action.payload.work[0])
   console.log('real-id',id);
///////////////////////////
const lastID=[];
   for(let i=0;i<id.length;i++){
      const element=id[i]
      const firstLetter=element.charAt(0)
const doesDuplicateExist=lastID.some((item)=>item.charAt(0)===firstLetter)
if(doesDuplicateExist){
   console.log('real-id',id);
   console.log('duplicate-exist');
}
else if(!doesDuplicateExist){
   lastID.push(element)
   console.log('real-id',id);
      console.log('last-id',lastID);

   console.log('duplicate doesnt exist');
}
     
   }
 // console.log('real-id',id);
 console.log('last-id',lastID);
  

/////////////////////////////
   let filteredItem=input;
   console.log('filtered-item before iteration',filteredItem);

for (let i=lastID.length-1;i>=0;i--){
   const element=lastID[i]

const specialFilterMethod=filterMethods[element]
 filteredItem=specialFilterMethod(filteredItem)

}
  console.log('filtered-item after iteration',filteredItem);

const filter=filterMethod(filteredItem);
console.log('filter',filter);
return {...state,clothFeed:filter,clothTrack:action.payload.category,clothSelected:false,clothVfilter:filter,clothSeries:[...state.clothSeries,action.payload.work],clothCount:state.clothCount+1, } 










  
 
}
   }


  

  }

throw new Error('no cloth filter matching action')
}

   
  }

const initialState={
  
    //clothes initial start here//
    clothFeed:[],
    clothTrack:'default',
    clothSelected:false,
    clothSeries:[],
    clothVfilter:[{id:1,name:'nil'},{id:2, name:'na'}],
    clothCount:0,
    
   
}


const AppContext=React.createContext()

export const AppProvider=({children})=>{
    const [state,dispatch]=useReducer(reducer,initialState)
    //sigcoIn state//
   
   
 
 const [userName,setUserName]=useState('default')
 const [userEmail,setUserEmail]=useState('')
 const [userNo,setUserNo]=useState('')
 const [location,setLocation]=useState('')
 const [token,setToken]=useState(null)
 const storedToken=localStorage.getItem('token')
 const [data,setData]=useState([])
 const [items,setItems]=useState([])
 const [itemId,setItemId]=useState('')
 const [pdata,setPData]= useState({})
 const [clothes,setClothes]=useState([])
 const savedParameter=localStorage.getItem('parameter')
 useEffect(()=>{
   const fetchProducts=async()=>{
      try{
     const response= await axios.get('https://fmcg.onrender.com/products/verified')
     const datas=await response.data.data.products;
    console.log(response);
    console.log('landing-data',datas)
    setData(datas)
    if(datas && savedParameter==='clothes'){
      input = datas.filter(({ category }) => category.includes('category:Clothing'));
     // setClothes(input)
      dispatch({type:'fetch-data',payload:{input}})
    }
    if(datas && savedParameter==='shoes'){
      input = datas.filter(({ category }) => category.includes('category:Shoes'));
     // setClothes(input)
      dispatch({type:'fetch-data',payload:{input}})
    }

    if(datas && savedParameter==='fragrances'){
      input = datas.filter(({ category }) => category.includes('category:Fragrances'));
     // setClothes(input)
      dispatch({type:'fetch-data',payload:{input}})
    }
    if(datas && savedParameter==='watch'){
      input = datas.filter(({ category }) => category.includes('category:Wrist-Watches'));
     // setClothes(input)
      dispatch({type:'fetch-data',payload:{input}})
    }

    if(datas && savedParameter==='fabrics'){
      input = datas.filter(({ category }) => category.includes('category:Fabrics'))
     // setClothes(input)
        
      dispatch({type:'fetch-data',payload:{input}})
    }

    if(datas && savedParameter==='bags'){
      input = datas.filter(({ category }) => category.includes('category:Bags'))
        
      dispatch({type:'fetch-data',payload:{input}})
     }
    
      }
      catch(error){
        console.log(error);
      }
    }
   fetchProducts()

 },[])


 

 const fetchProducts=async()=>{
   try{
  const response= await axios.get('https://fmcg.onrender.com/products/verified')
  const datas=await response.data.data.products;
 console.log(response);
 console.log('landing-data',datas)
 setData(datas)
      
      setClothes(datas.filter(({category}) => category.includes('category:Clothing')))
 if(response.status===200){
 
 }
 
   }
   catch(error){
     console.log(error);
   }
 }



 const fetchProfile=async ()=>{
   const url='https://fmcg.onrender.com/users/my-profile';
   const config={
     headers:{
     Authorization:`Bearer ${token}`
   }
 
   }
    
   try{
 const response= await axios.get(url,config)
 if(response.status===200){
   console.log(response.data.data.data.address.state,'PROFILEUSER');
   const profileData=response.data.data.data
   console.log('profile-Data',profileData);
  
   setUserName(response.data.data.data.firstName)
   setLocation(response.data.data.data.address.state)
   setUserNo(response.data.data.data.telephone)
   setUserEmail(response.data.data.data.email)
   
   
   console.log('username',userName);
   console.log('phonenumber',userNo);
 }
 else{
   console.log('response.data',response.data);
   
 }
   }
   catch(error){
    
     console.log(error);
   }
 }
  

 useEffect(()=>{
   fetchProducts()
   
   
  
   if(storedToken){
      setToken(storedToken)
   }
 },[])


 useEffect(()=>{

   if(token){
     fetchProfile()
     console.log('useeffectnumber',userNo);
   
   }
   
   },[token])
   




const filter=(main,category,work)=>{
    dispatch({type:`filter`,payload:{main,category,work}})

}



const linkReset=(parameter)=>{
  console.log('what is my parameter',parameter);
  // input=parameter
  // localStorage.setItem('input','')

if(data && parameter==='clothes'){
input = data.filter(({ category }) => category.includes('category:Clothing'));
}

if(data && parameter==='shoes'){
  input = data.filter(({ category }) => category.includes('category:Shoes'));
  }

  if(data && parameter==='fragrances'){
    input = data.filter(({ category }) => category.includes('category:Fragrances'));
    }

    if(data && parameter==='watch'){
      input = data.filter(({ category }) => category.includes('category:Wrist-Watches'));
      }

      if(data && parameter==='fabrics'){
        input = data.filter(({ category }) => category.includes('category:Fabrics'))
        }

        if(data && parameter==='bags'){
          input = data.filter(({ category }) => category.includes('category:Bags'))
          }
    
  
  localStorage.setItem('parameter',parameter)



dispatch({type:'hard-reset'})

console.log('saved parameter',savedParameter);
  
}





    return(
        <AppContext.Provider value={
            {
                state,
                shoes,
               clothes,
                filter,
                linkReset,
                //sign in data
               
                ////////////
                //landing page//
                userName,
                userNo,
                userEmail,
                location,
                setUserName,
                token,
                setToken,
                data,
                setData,
                setItems,
                items,
                setItemId,
                itemId,
                pdata,
                setPData,
                
               
            }
        }>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobal=()=>{
    return useContext(AppContext)
}