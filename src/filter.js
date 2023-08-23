import React from 'react';


import {data} from './data';

export const popular=data.reduce((accumulator,items)=>{
if(items.shoes){
    const footwears=items.shoes.reduce((acc,footwear)=>{
     if(footwear.palm){
       const palms=footwear.palm.filter((item)=>item.popular==="yes")
        acc.push(...palms)
     }
     //officeshoes start here
      if(footwear.officeShoes){
       const corporateShoes=footwear.officeShoes.filter((item)=>item.popular==="yes")
        acc.push(...corporateShoes)
     }
     //sneakers start here//
      if(footwear.sneakers){
       const footie=footwear.sneakers.filter((item)=>item.popular==="yes")
        acc.push(...footie)
     }

        return acc
        
    },[])
    accumulator.push(...footwears);
    
}
//clothes logic start here
if(items.clothes){
    const filteredCloth=items.clothes.reduce((acc,cloth)=>{
    if(cloth.casual){
        const filter=cloth.casual.filter((item)=>item.popular===`yes`)
        acc.push(...filter);
    }
    //officeWears start here//

     if(cloth.officeWears){
        const filter=cloth.officeWears.filter((item)=>item.popular===`yes`)
        acc.push(...filter);
    }
    // partyWear start here //


     if(cloth.partyWears){
        const filter=cloth.partyWears.filter((item)=>item.popular===`yes`)
        acc.push(...filter);
    }
      return acc
    },[])
    accumulator.push(...filteredCloth)
}

    return accumulator
},[])



export const shoes=data.reduce((accumulator,items)=>{
 if(items.shoes){
    const footwears=items.shoes.reduce((acc,it)=>{
    if(it.palm){
        acc.push(...it.palm)
    }

     if(it.officeShoes){
        acc.push(...it.officeShoes)
    }
     if(it.sneakers){
        acc.push(...it.sneakers)
    }
        return acc
    },[])
    accumulator.push(...footwears)
 }

 return accumulator 
},[])



export const clothes=data.reduce((accumulator,items)=>{
  if(items.clothes){
    const wears=items.clothes.reduce((acc,it)=>{
    if(it.casual){
        acc.push(...it.casual)
    }
     if(it.officeWears){
        acc.push(...it.officeWears)
    }

     if(it.partyWears){
        acc.push(...it.partyWears)
    }
        return acc
    },[])
    accumulator.push(...wears)
  }

  return accumulator
},[])


