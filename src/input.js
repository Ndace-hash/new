import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useGlobal } from './context'

//everything done//
export const Input = () => {
    const {token,userName,itemId}=useGlobal()
    const [name,setName]=useState('')
    const [description,setDescription]=useState('')
    const [url,setUrl]=useState('')
    const [type,setType]=useState('');
    const [discount,setDiscount]=useState(0)
    const [amount,setAmount]=useState(0)
    const [sku,setSku]=useState(0);
    const [isImageUploaded,setIsImageUploaded]=useState(false)
    const [isProductUploaded,setIsProductUploaded]=useState(false);
    const [isProductNOTUploaded,setIsProductNOTUploaded]=useState(false)
    console.log('input-id',itemId);



const [mCategory,setMcategory]=useState('')
const [Category,setCategory]=useState('')
const [subCategory,setSubCategory]=useState('')
const [vTag,setVtag]=useState('')
const [tagType,setTagType]=useState('')
const [tagBrand,setTagBrand]=useState('')
const [tagCondition,setTagCondition]=useState('')
const [tagSwap,setTagSwap]=useState('')
const [tagSize,setTagSize]=useState('')
const [tagGender,setTagGender]=useState('')
const [tagFashionCondition,setTagFashionCondition]=useState('')
const [tagRam,setTagRam]=useState('')
const [tagProcessor,setTagProcessor]=useState('')
const [tagDiskSpace,setTagDiskSpace]=useState('')
const [tagDiskType,setTagDiskType]=useState('')
const [tagDisplay,setTagDisplay]=useState('')
const [appliedClass,setAppliedClass]=useState({})




const [allTagNotChosen,setAllTagNotChosen]=useState(false)
const [notChosenTag,setNotChosenTag]=useState('')

let tags=null;
let category=null;
let tagContent=[]
let VirtualnotChosenTag=[]
let categoryContent=[]



let virtualType;
let virtualBrand;
let virtualSize;
let virtualRam;
let virtualDiskSpace;



useEffect(()=>{
  console.log('input-token',token);
})


const handleMainCategory=(e)=>{
 
   
if(Category){
    setCategory('')
}
if(subCategory){
    setSubCategory('')
}

if(vTag){
  setVtag('')
}



   console.log(mCategory);
   setMcategory(e.target.value)

}


const handleCategory=(e)=>{
  if(subCategory){
    setSubCategory('')
}

if(vTag){
  setVtag('')
}
if(Object.keys(appliedClass).length!==0){
 setAppliedClass({})
}


if(tagBrand){
  setTagBrand('')
}

 if(tagType){
  setTagType('')
}
if(tagFashionCondition){
  setTagFashionCondition('')
}
if(tagSize){
setTagSize('')
}
if(tagGender){
setTagGender('')
}
if(tagSwap){
setTagSwap('')
}

if(tagCondition){
  setTagCondition('')
}
if(tagRam){
  setTagRam('')
}
if(tagDiskSpace){
  setTagDiskSpace('')
}
if(tagDiskType){
  setTagDiskType('')
}
if(tagProcessor){
  setTagProcessor('')
}
if(tagDisplay){
  setTagDisplay('')
}

    
setCategory(e.target.value)
    console.log(Category,'cateogry');

 
 }

 const handleSubCategory=(e)=>{
const newValue=e.target.value
console.log('firstlettervalue',newValue[0],newValue);
  if(vTag){
    setVtag('')
  }

  setAppliedClass((prevMap)=>({
    ...prevMap,[newValue]:true,
   }))
   
    setSubCategory(e.target.value)
    console.log(subCategory,'sub-cateogry');

 }
 
 const handleTag=(e)=>{
    const parameter=e.target.value
    console.log('tag',parameter);

  setVtag(e.target.value)


  console.log(parameter);
    if(subCategory==="brand"){
        setTagBrand(parameter)
    }
    else if(subCategory==="type"){
        setTagType(parameter)
    }

    else if(subCategory==="Condition"){
        setTagCondition(parameter)
    }
    
    else if(subCategory==="Swap"){
        setTagSwap(parameter)
    }

    else if(subCategory==="Genders"){
        setTagGender(parameter)
    }
    else if(subCategory==="size"){
        setTagSize(parameter)
    }
    else if(subCategory==="product-condition"){
        setTagFashionCondition(parameter)
    }
    else if(subCategory==="RAM"){
      setTagRam(parameter)
  }
  else if(subCategory==="Processor"){
    setTagProcessor(parameter)
}

else if(subCategory==="Hard-Disk-Space"){
  setTagDiskSpace(parameter)
}

else if(subCategory==="Hard-Disk-Type"){
  setTagDiskType(parameter)
}

else if(subCategory==="Display-Size"){
  setTagDisplay(parameter)
}



    


 }

    const mainCategory=[
        {id:0,value:'',label:''},
        {id:1,value:'mCategory:Fashion',label:'FASHION'},
        {id:2,value:'mCategory:Electronic-gadget',label:'ELECTRONIC-GADGET'},
        
    ]

    const fashionCategory=[
        {id:0, value:"",label:''},
        {id:1, value:"category:Clothing",label:'Clothing'},
        {id:2, value:"category:Shoes",label:'Shoes'},
        {id:3, value:"category:Wrist-Watches",label:'Wrist-Watches'},
        {id:4, value:"category:Fragrances",label:'Fragrances'},
        {id:5, value:"category:Bags",label:'Bags'},
        {id:6, value:"category:Fabrics",label:'Fabrics'},
        {id:7, value:"category:Others",label:'Others'},

    ]

    const electronicCategory=[

        {id:0, value:"",label:''},
        {id:1, value:"category:Mobile-Phones",label:'Mobile-Phones'},
        {id:2, value:"category:Computers",label:'Computers'},
        {id:3, value:"category:Home-appliances",label:'Home-Appliances'},
        {id:4, value:"category:Phone-accessories",label:'Phone-Accessories'},
        {id:5, value:"category:Computer-accessories",label:'Computer-Acessories'},
           


    ]

    const fashionTypeA=[

        {id:0,value:"",label:""},
        {id:1,value:"type",label:"Type"},
        {id:2,value:"brand",label:"Brand"},
        {id:3,value:"product-condition",label:"Condition"},
        {id:4,value:"Genders",label:"Gender"},
        {id:5,value:"size",label:"Size"},
       
       
    ]

    
    const fashionTypeB=[

        {id:0,value:"",label:""},
        {id:1,value:"type",label:"Type"},
        {id:2,value:"brand",label:"Brand"},
        {id:3,value:"product-condition",label:"Condition"},
        {id:4,value:"Genders",label:"Gender"},
    ]

    const fashionTypeC=[

        {id:0,value:"",label:""},
        {id:1,value:"type",label:"Type"},
        {id:2,value:"Genders",label:"Gender"},
        
    ]

    const fashionTypeD=[

        {id:0,value:"",label:""},
        {id:1,value:"brand",label:"Brand"},
        {id:2,value:"type",label:"Type"},
    ]
const electronicSubCategory=[
    {id:0,value:"",label:""},
    {id:1,value:"brand",label:"Brand"},
    {id:2,value:"type",label:"Type"},
    {id:3,value:"Condition",label:"Condition"},
    {id:4,value:"Swap",label:"Is the item Available for Swap?"},
    

]


const electronicComputerSubCategory=[
  {id:0,value:"",label:""},
  {id:1,value:"type",label:"Type"},
  {id:2,value:"brand",label:"Brand"},
  {id:3,value:"Condition",label:"Condition"},
  {id:4,value:"RAM",label:"RAM"},
  {id:5,value:"Processor",label:"Processor"},
  {id:6,value:"Hard-Disk-Space",label:"Storage-Capacity"},
  {id:7,value:"Hard-Disk-Type",label:"Hard-Disk-Type"},
  {id:8,value:"Display-Size",label:"Display-Size"},
  {id:9,value:"Swap",label:"Is the item Available for Swap?"},
  

]


const electronicPhoneSubCategory=[
  {id:0,value:"",label:""},
  {id:1,value:"type",label:"Type"},
  {id:2,value:"brand",label:"Brand"},
  {id:3,value:"Condition",label:"Condition"},
  {id:4,value:"RAM",label:"RAM"},
  {id:6,value:"Hard-Disk-Space",label:"Storage-Capacity"},
  
  {id:9,value:"Swap",label:"Is the item Available for Swap?"},
  

]


const clothingType=[
    {id:0,value:"",label:''},
    {id:1,value:"TYPE:Suits",label:'Suits'},
    {id:2,value:"TYPE:Jeans",label:'Jeans'},
    {id:3,value:"TYPE:T-shirts",label:'T-shirts'},
    {id:4,value:"TYPE:Skirts",label:'Skirts'},
    {id:5,value:"TYPE:Sweat-shirts & Hoodies",label:'Sweat-shirts & Hoodies',},
    {id:6,value:"TYPE:Cardigans & Sweaters",label:'Cardigans & Sweaters'},
    {id:7,value:"TYPE:Tops",label:'Tops'},
    {id:8,value:"TYPE:Abayas",label:'Abayas'},
    {id:9,value:"TYPE:Blouses",label:'Blouses'},
    {id:10,value:"TYPE:Shorts",label:'Shorts'},
    {id:11,value:"TYPE:Jersey",label:'Jersey'},
    {id:12,value:"TYPE:Chinos",label:'Chinos'},
    {id:13,value:"TYPE:Jump-suits",label:'Jump-Suits'},
    {id:14,value:"TYPE:Vest",label:'Vest'},
    {id:15,value:"TYPE:Sporting-wears",label:'Sporting-Wears'},
    {id:16,value:"TYPE:Under-wears",label:'Under-Wears'},
    {id:17,value:"TYPE:Sleep-wears & Pyjamas",label:'Sleep-Wears & Pyjamas'},
    {id:18,value:"TYPE:Traditional-wears",label:'Traditional-Wears'},
    {id:19,value:"TYPE:Hijabs",label:'Hijabs'},
    {id:20,value:"TYPE:Jalabiya",label:'Jalabiya'},
    {id:21,value:"TYPE:Pant-trousers",label:'Pant-Trousers'},
     {id:22,value:"TYPE:Others",label:'Others'},
  ]

  const clothingBrand=[
    {id:0,value:"",label:''},
    {id:1,value:"BRAND:Gucci",label:'Gucci'},
    {id:2,value:"BRAND:Dior",label:'Dior'},
    {id:3,value:"BRAND:Louis-Vuitton",label:'Louis-Vuitton'},
    {id:4,value:"BRAND:Prada",label:'Prada'},
    {id:5,value:"BRAND:Balenciaga",label:'Balenciaga'},
    {id:6,value:"BRAND:Moncler",label:'Moncler'},
    {id:7,value:"BRAND:Armani",label:'Armani'},
    {id:8,value:"BRAND:Versace",label:'Versace'},
    {id:9,value:"BRAND:Off-white",label:'Off-White'},
    {id:10,value:"BRAND:Burbery",label:'Burbery'},
    {id:11,value:"BRAND:Nike",label:'Nike'},
    {id:12,value:"BRAND:Adidas",label:'Adidas'},
    {id:13,value:"BRAND:Puma",label:'Puma'},
    {id:14,value:"BRAND:Others",label:'Others'},
  ]


  const clothingSize=[
    {id:0,value:"",label:""},
    {id:1,value:"SIZE:Small",label:'Small'},
    {id:2,value:"SIZE:Medium",label:'Medium'},
    {id:3,value:"SIZE:Large",label:'Large'},
    {id:4,value:"SIZE:Extra-Large",label:'Extra-Large'},
]

const shoeBrand=[
    {id:0,value:"",label:''},
    {id:1,value:"BRAND:Gucci",label:'Gucci'},
    {id:2,value:"BRAND:Dior",label:'Dior'},
    {id:3,value:"BRAND:Nike",label:'Nike'},
    {id:4,value:"BRAND:Adidas",label:'Adidas'},
    {id:5,value:"BRAND:Balenciaga",label:'Balenciaga'},
    {id:6,value:"BRAND:Louis-Vuitton",label:'Louis-Vuitton'},
    {id:7,value:"BRAND:Armani",label:'Armani'},
    {id:8,value:"BRAND:Versace",label:'Versace'},
    {id:9,value:"BRAND:Sketchers",label:'Sketchers'},
    {id:10,value:"BRAND:Air-Jordan",label:'Air-Jordan'},
    {id:11,value:"BRAND:Vans",label:'Vans'},
    {id:12,value:"BRAND:New Balance",label:'New-Balance'},
    {id:13,value:"BRAND:Puma",label:'Puma'},
    {id:14,value:"BRAND:Others",label:'Others'},
  ]
  const shoeType=[
    {id:0,value:"",label:''},
    {id:1,value:"TYPE:Sneakers",label:'Sneakers'},
    {id:2,value:"TYPE:Slippers",label:'Slippers'},
    {id:3,value:"TYPE:Loafers(corporate-shoes)",label:'Loafers(corporate-shoes)'},
    {id:4,value:"TYPE:Sandals",label:'Sandals'},
    {id:5,value:"TYPE:High-heels",label:'High-Heels'},
    {id:6,value:"TYPE:Palm-sandals",label:'Palm-Sandals'},
     {id:7,value:"TYPE:Others",label:'Others'},
  ]

  const shoeSize=[
    {id:0,value:"",label:""},
    {id:1,value:"SIZE:35",label:'35'},
    {id:2,value:"SIZE:36",label:'36'},
    {id:3,value:"SIZE:37",label:'37'},
    {id:4,value:"SIZE:38",label:'38'},
    {id:5,value:"SIZE:39",label:'39'},
    {id:6,value:"SIZE:40",label:'40'},
    {id:7,value:"SIZE:41",label:'41'},
    {id:8,value:"SIZE:42",label:'42'},
    {id:9,value:"SIZE:43",label:'43'},
    {id:10,value:"SIZE:44",label:'44'},
    {id:11,value:"SIZE:45",label:'45'},
    {id:12,value:"SIZE:46",label:'46'},
    {id:13,value:"SIZE:47",label:'47'},
    {id:14,value:"SIZE:above-47",label:'Above-47'},
    {id:15,value:"SIZE:one-size",label:'One-Size'},
]
const bagsBrand=[
    {id:0,value:"",label:''},
    {id:1,value:"BRAND:Dior",label:'Dior'},
    {id:2,value:"BRAND:Nike",label:'Nike'},
    {id:3,value:"BRAND:Adidas",label:'Adidas'},
    {id:4,value:"BRAND:HP Custom",label:'HP-Customized-Bag'},
    {id:5,value:"BRAND:Gucci",label:'Gucci'},
    {id:6,value:"BRAND:Louis-vuitton",label:'Louis-Vuitton'},
    {id:7,value:"BRAND:Polo",label:'Polo'},
    {id:8,value:"BRAND:Others",label:'Others'},
  ]
  const bagsType=[
    {id:0,value:"",label:''},
    {id:1,value:"TYPE:Cross-bag",label:'Cross-Bag'},
    {id:2,value:"TYPE:Luggage & Travelling bag",label:'Luggage & Travelling-Bag'},
    {id:3,value:"TYPE:Handbags",label:'Hand-BAGS'},
    {id:4,value:"TYPE:Laptop & backpacks(school-bags)",label:'Laptop & Back-Packs(school-bags)'},
    {id:5,value:"TYPE:wallet & purses",label:'Wallet & Purses'},
    {id:6,value:"TYPE:Shoulder-bags",label:'Shoulder-Bags'},
     {id:7,value:"TYPE:Others",label:'Others'},
  ]
  const bagSize=[
    {id:0,value:"",label:""},
    {id:1,value:"SIZE:Small",label:'Small'},
    {id:2,value:"SIZE:Medium",label:'Medium'},
    {id:3,value:"SIZE:Large",label:'Large'},
    {id:4,value:"SIZE:Extra-Large",label:'Extra-Large'},
]

const wristWatchBrand=[
    {id:0,value:"",label:''},
    {id:1,value:"BRAND:Rolex",label:'Rolex'},
    {id:2,value:"BRAND:Hublot",label:'Hublot'},
    {id:3,value:"BRAND:Patek",label:'Patek'},
    {id:4,value:"BRAND:Casio",label:'Casio'},
    {id:5,value:"BRAND:Cartier",label:'Cartier'},
    {id:6,value:"BRAND:Others",label:'Others'},
  ]
  const wristWatchType=[
    {id:0,value:"",label:''},
    {id:1,value:"TYPE:Smart-watches",label:'Smart-Watches'},
    {id:2,value:"TYPE:Sport-watches",label:'Sport-Watches'},
    {id:3,value:"TYPE:Mechanical-watches",label:'Mechanical-Watches'},
    {id:4,value:"TYPE:Dress-watches",label:'Dress-Watches'},
    {id:5,value:"TYPE:Analog watches",label:'Analog-Watches'},
    {id:6,value:"TYPE:Digital-watches",label:'Digital-Watches'},
     {id:7,value:"TYPE:Others",label:'Others'},
  ]

  const fragrancesBrand=[
    {id:0,value:"",},
    {id:1,value:"BRAND:212",label:'212'},
    {id:2,value:"BRAND:Arabian-perfumes",label:'Arabian-Perfumes'},
    {id:3,value:"BRAND:Chanel",label:'Chanel'},
    {id:4,value:"BRAND:Passion",label:'Passion'},
    {id:5,value:"BRAND:Lola",label:'Lola'},
    {id:6,value:"BRAND:Surrati",label:'Surrati'},
    {id:7,value:"BRAND:Tony-montana",label:'Tony-Montana'},
    {id:8,value:"BRAND:Others",label:'Others'},
  ]

  const fragrancesType=[
    {id:0,value:"",},
    {id:1,value:"TYPE:Perfume",label:'Perfumes'},
    {id:2,value:"TYPE:Body-spray",label:'Body-Spray'},
    {id:3,value:"TYPE:Perfume-oil",label:'Perfume-Oil'},
    {id:4,value:"TYPE:Scented-body-wash",label:'Scented-Body-Wash'},
    {id:5,value:"TYPE:Air-freshner",label:'Air-Freshner'},
    {id:6,value:"TYPE:Incense(burning-scented-stick)",label:'Incense(burning-scented-stick)'},
     {id:7,value:"TYPE:Others",label:'Others'},
  ]

  const fabricsType=[
    {id:0,value:"",label:'',},
    {id:1,value:"TYPE:Ankara(atampa)",label:'Ankara(Atampa)'},
    {id:2,value:"TYPE:Guinea(shadda)",label:'Guinea(Shadda)'},
    {id:3,value:"TYPE:Lace",label:'Lace'},
    {id:4,value:"TYPE:Kampala",label:'Kampala'},
    {id:5,value:"TYPE:Damask",label:'Damask'},
    {id:6,value:"TYPE:George-fabric",label:'George-Fabric'},
    {id:7,value:"TYPE:Aso-oke",label:'Aso-Oke'},
     {id:8,value:"TYPE:Others",label:'Others'},
  ]

  const phoneBrand=[
    {id:0,value:"",label:""},
    {id:1,value:"Brand:Apple",label:"Apple"},
    {id:2,value:"Brand:Samsung",label:"Samsung"},
    {id:3,value:"Brand:Tecno",label:"Tecno"},
    {id:4,value:"Brand:Infinix",label:"Infinix"},
    {id:5,value:"Brand:Gionee",label:"Gionee"},
    {id:6,value:"Brand:Huawei",label:"Huawei"},
    {id:7,value:"Brand:Nokia",label:"Nokia"},
    {id:8,value:"Brand:Oppo",label:"Oppo"},
    {id:9,value:"Brand:Xiaomi",label:"Xiaomi"},
    {id:10,value:"Brand:I-tel",label:"I-tel"},
    {id:11,value:"Brand:vivo",label:"Vivo"},
    {id:12,value:"Brand:Sony",label:"Sony"},
    {id:13,value:"Brand:others",label:"Others"},
  ]

  const phoneType=[
    {id:0,value:"",label:""},
    {id:1,value:"Type:Android-phone",label:"Android"},
    {id:2,value:"Type:I-phone",label:"I-Phone"},
    {id:3,value:"Type:Button-phone",label:"Key-Pad"},
    {id:4,value:"Type:Windows-phone",label:"Windows"},
    {id:5,value:"Type:Java-phone",label:"Java-Phone"},
    {id:6,value:"Type:Others",label:"Others"},
  ]

  const computerBrand=[
    {id:0,value:"",label:''},
    {id:1,value:"Brand:Apple",label:'Apple'},
    {id:2,value:"Brand:hp",label:"hp"},
    {id:3,value:"Brand:Dell",label:"Dell"},
    {id:4,value:"Brand:Lenovo",label:"Lenovo"},
    {id:5,value:"Brand:Acer",label:"Acer"},
    {id:6,value:"Brand:Asus",label:"Asus"},
    {id:7,value:"Brand:Toshiba",label:"Toshiba"},
    {id:8,value:"Brand:Samsung",label:"Samsung"},
    {id:9,value:"Brand:Sony",label:"Sony"},
    {id:10,value:"Brand:Others",label:"Others"},
  ]

  const computerType=[
    {id:0,value:"",label:""},
    {id:1,value:"Type:Laptop",label:"Laptop"},
    {id:2,value:"Type:Desktop",label:"Desktop"},
    {id:3,value:"Type:Mini-laptop",label:"Mini-Laptop"},
    {id:4,value:"Type:Palm-top",label:"Palm-Top"},
    {id:5,value:"Type:Convertible-laptop",label:"Convertible-Laptop"},
    {id:6,value:"Type:Others",label:"Otthers"},
  ]
  const homeBrand=[
    {id:0,value:"",label:""},
    {id:1,value:"Brand:LG",label:"LG"},
    {id:2,value:"Brand:Panasonic",label:"Panasonic"},
    {id:3,value:"Brand:samsung",label:"Samsung"},
    {id:4,value:"Brand:haier-thermocool",label:"Haier-Thermocool"},
    {id:5,value:"Brand:Hisense",label:"Hisense"},
    {id:6,value:"Brand:Philips",label:"Philips"},
    {id:7,value:"Brand:Others",label:"Others"},
  ]
const homeTYPE=[
    {id:0,value:"",label:""},
    {id:1,value:"Type:Television",label:"Television"},
    {id:2,value:"Type:Freezer",label:"Freezer"},
    {id:3,value:"Type:Fridge",label:"Fridge"},
    {id:4,value:"Type:Electric-cooker",label:"Electric-Cooker"},
    {id:5,value:"Type:Home-theater",label:"Home-Theater"},
    {id:6,value:"Type:Oven",label:"Oven"},
    {id:7,value:"Type:Iron",label:"Iron"},
    {id:8,value:"Type:Radio",label:"Radio"},
    {id:9,value:"Type:Dvd-player",label:"Dvd-player"},
    {id:10,value:"Type:Satelite-Decoder",label:"Sattelite-Decoder"},
    {id:11,value:"Type:Others",label:"Others"}]

const phoneAccesoriesTYPE=[
    {id:0,value:"",},
    {id:1,value:"Type:Keypad",label:"Keypad"},
    {id:2,value:"Type:Screen",label:"Screen"},
    {id:3,value:"Type:Memory-Card",label:"Memory-Card"},
    {id:4,value:"Type:Charger",label:"Charger"},
    {id:5,value:"Type:Ear-Piece",label:"Ear-Piece"},
    {id:6,value:"Type:Power-bank",label:"Power-bank"},
    {id:7,value:"Type:Air-Pod",label:"Air-Pod"},
    {id:8,value:"Type:Phone-Cover",label:"Phone-Cover"},
    {id:9,value:"Type:Screen-Guard",label:'Screen-Guard'},
    {id:10,value:"Type:Panel",label:"Panel"},
    {id:11,value:"Type:Battery",label:"Battery"},
    {id:12,value:"Type:Head-Phone",label:"Head-Phone"},
    {id:13,value:"Type:Others",label:"Others"},
  ]

  const phoneAccesoriesBrand=[
    {id:0,value:"",label:'',},
    {id:1,value:"Brand:Oraimo",label:"Oraimo"},
    {id:2,value:"Brand:New-Age",label:"New-Age"},
    {id:3,value:"Brand:San-Disk",label:"San-Disk"},
    {id:4,value:"Brand:Apple",label:"Apple"},
    {id:5,value:"Brand:Samsung",label:"Samsung"},
    {id:6,value:"Brand:Tecno",label:"Tecno"},
    {id:7,value:"Brand:Infinix",label:"Infinix"},
    {id:8,value:"Brand:SH-Plus",label:"SH-PLUS"},
    {id:9,value:"Brand:Huawei",label:"Huawei"},
    {id:10,value:"Brand:Nokia",label:"Nokia"},
    {id:11,value:"Brand:Transparent",label:"Transparent"},
    {id:12,value:"Brand:Xiaomi",label:"Xiaomi"},
    {id:13,value:"Brand:I-tel",label:"I-tel"},
    {id:14,value:"Brand:Others",label:"Others"},



  ]

  const computerAccesoriesTYPE=[
    {id:0,value:"",label:""},
    {id:1,value:"Type:Keyboard",label:"Keyboard"},
    {id:2,value:"Type:Monitor-Screen",label:"Monitor-Screen"},
    {id:3,value:"Type:Mouse",label:"Mouse"},
    {id:4,value:"Type:Hard-disk",label:"Hard-Disk"},
    {id:5,value:"Type:RAM",label:"RAM"},
    {id:6,value:"Type:Mother-board",label:"Mother-Board"},
    {id:7,value:"Type:Projector",label:"Projector"},
    {id:8,value:"Type:Printer",label:"Printer"},
    {id:9,value:"Type:Scanner",label:"Scanner"},
    {id:10,value:"Type:Adapter",label:"Adapter"},
    {id:11,value:"Type:Battery",label:"Battery"},
    {id:12,value:"Type:Others",label:"Others"},
  ]
const computerRam=[

  {id:0,value:"",label:""},
  {id:1,value:"ram:2gb",label:"2gb"},
  {id:2,value:"ram:3gb",label:"3gb"},
  {id:3,value:"ram:4gb",label:"4gb"},
  {id:4,value:"ram:6gb",label:"6gb"},
  {id:5,value:"ram:8gb",label:"8gb"},
  {id:6,value:"ram:12gb",label:"12gb"},
  {id:7,value:"ram:16gb",label:"16gb"},
  {id:8,value:"ram:32gb",label:"32gb"},
  {id:9,value:"ram:64gb",label:"64gb"},
  {id:10,value:"ram:Others",label:"Others"},


]

const computerDiskSpace=[
  {id:0,value:"",label:""},
  {id:1,value:"Disk-Space:128gb",label:"128gb"},
  {id:2,value:"Disk-Space:256gb",label:"256gb"},
  {id:3,value:"Disk-Space:250gb",label:"250gb"},
  {id:4,value:"Disk-Space:500gb",label:"500gb"},
  {id:5,value:"Disk-Space:512gb",label:"512gb"},
  {id:6,value:"Disk-Space:1tb",label:"1tb"},
  {id:7,value:"Disk-Space:700gb",label:"700gb"},
  {id:8,value:"Disk-Space:750gb",label:"750gb"},
  {id:9,value:"Disk-Space:2tb",label:"2tb"},
  {id:10,value:"Disk-Space:3tb",label:"3tb"},
  {id:11,value:"Disk-Space:4tb",label:"4tb"},
  {id:12,value:"Disk-Space:Others",label:"Others"},




]

const computerDisplay=[

  {id:0,value:"",label:""},
  {id:1,value:"Display:21-inch",label:"21-inch"},
  {id:2,value:"Display:20.1-inch",label:"20.1-inch"},
  {id:3,value:"Display:19-inch",label:"19-inch"},
  {id:4,value:"Display:17/17.3-inch",label:"17/17.3-inch"},
  {id:5,value:"Display:16-inch",label:"16-inch"},
  {id:6,value:"Display:15/15.6-inch",label:"15/15.6-inch"},
  {id:7,value:"Display:14-inch",label:"14-inch"},
  {id:8,value:"Display:13-inch",label:"13-inch"},
  {id:9,value:"Display:12/12.3-inch",label:"12/12.3-inch"},
  {id:10,value:"Display:1/11.6-inch",label:"11/11.6-inch"},
  {id:11,value:"Display:10-inch",label:"10-inch"},
  {id:12,value:"Display:Others",label:"Others"},


]

const phoneRAM=[
  {id:0,value:"",label:""},
  {id:1,value:"ram:less than 500mb",label:"less than 500mb"},
  {id:2,value:"ram:500mb",label:"500mb"},
  {id:3,value:"ram:1gb",label:"1gb"},
  {id:4,value:"ram:2gb",label:"2gb"},
  {id:5,value:"ram:3gb",label:"3gb"},
  {id:6,value:"ram:4gb",label:"4gb"},
  {id:7,value:"ram:6gb",label:"6gb"},
  {id:8,value:"ram:8gb",label:"8gb"},
  {id:9,value:"ram:12gb",label:"12gb"},
  {id:10,value:"ram:Others",label:"Others"},


]

const phoneDiskSpace=[
  {id:0,value:"",label:""},
  {id:1,value:"Disk-Space:less than 2gb",label:"less-than-2gb"},
  {id:2,value:"Disk-Space:2gb",label:"2gb"},
  {id:3,value:"Disk-Space:4gb",label:"4gb"},
  {id:4,value:"Disk-Space:6gb",label:"6gb"},
  {id:5,value:"Disk-Space:8gb",label:"8gb"},
  {id:6,value:"Disk-Space:16gb",label:"16gb"},
  {id:7,value:"Disk-Space:32gb",label:"32gb"},
  {id:8,value:"Disk-Space:64gb",label:"64gb"},
  {id:9,value:"Disk-Space:128gb",label:"128gb"},
  {id:10,value:"Disk-Space:256gb",label:"256gb"},
  {id:11,value:"Disk-Space:512gb",label:"512gb"},
  {id:12,value:"Disk-Space:Others",label:"Others"},
 


]


if(Category==='category:Clothing'){
    virtualBrand=clothingBrand
    virtualSize=clothingSize
    virtualType=clothingType
}
else if(Category==='category:Shoes'){
  virtualBrand=shoeBrand
  virtualSize=shoeSize
  virtualType=shoeType
}
else if(Category==='category:Bags'){
virtualBrand=bagsBrand
virtualSize=bagSize
virtualType=bagsType
}

else if (Category==='category:Wrist-Watches'){
virtualBrand=wristWatchBrand
virtualType=wristWatchType

}

else if(Category==='category:Fragrances'){
  virtualBrand=fragrancesBrand
  virtualType=fragrancesType
}

else if(Category==='category:Fabrics'){
    virtualType=fabricsType
  
  }
  else if(Category==='category:Mobile-Phones'){
    virtualType=phoneType
    virtualBrand=phoneBrand
    virtualRam=phoneRAM
    virtualDiskSpace=phoneDiskSpace
  
  }
else if(Category==='category:Computers'){
    virtualType=computerType
    virtualBrand=computerBrand
    virtualRam=computerRam
    virtualDiskSpace=computerDiskSpace
}

else if(Category==='category:Home-appliances'){
 virtualType=homeTYPE
 virtualBrand=homeBrand
}
else if(Category==='category:Phone-accessories'){
  virtualType=phoneAccesoriesTYPE
  virtualBrand=phoneAccesoriesBrand
}

else if(Category==='category:Computer-accessories'){
    virtualType=computerAccesoriesTYPE
    virtualBrand=computerBrand
  }


const fashionTag={
     'empty':'',
    "brand":virtualBrand,
    "type":virtualType,
    "size":virtualSize,
    "product-condition":  [{id:0,value:"",label:''},
    {id:1,value:"STATE:New",label:'Brand-New'},
    {id:2,value:"STATE:Used",label:'Used'}],
    "Genders":[
        {id:0,value:"",label:''},
        {id:1,value:"Gender:MALE",label:"MALE"},
        {id:2,value:"Gender:FEMALE",label:"FEMALE"}, 
        {id:3,value:"Gender:UNISEX",label:"UNISEX"},    
      ]
    
}





const phoneTag={

  "RAM":[
    {id:0,value:"",label:""},
    {id:1,value:"ram:less than 500mb",label:"less than 500mb"},
    {id:2,value:"ram:500mb",label:"500mb"},
    {id:3,value:"ram:1gb",label:"1gb"},
    {id:4,value:"ram:2gb",label:"2gb"},
    {id:5,value:"ram:3gb",label:"3gb"},
    {id:6,value:"ram:4gb",label:"4gb"},
    {id:7,value:"ram:6gb",label:"6gb"},
    {id:8,value:"ram:8gb",label:"8gb"},
    {id:9,value:"ram:12gb",label:"12gb"},
    {id:10,value:"ram:Others",label:"Others"},

  ],
   

  
   
  "Hard-Disk-Space":[
    {id:0,value:"",label:""},
    {id:1,value:"Disk-Space:less than 2gb",label:"less-than-2gb"},
    {id:2,value:"Disk-Space:2gb",label:"2gb"},
    {id:3,value:"Disk-Space:4gb",label:"4gb"},
    {id:4,value:"Disk-Space:6gb",label:"6gb"},
    {id:5,value:"Disk-Space:8gb",label:"8gb"},
    {id:6,value:"Disk-Space:16gb",label:"16gb"},
    {id:7,value:"Disk-Space:32gb",label:"32gb"},
    {id:8,value:"Disk-Space:64gb",label:"64gb"},
    {id:9,value:"Disk-Space:128gb",label:"128gb"},
    {id:10,value:"Disk-Space:256gb",label:"256gb"},
    {id:11,value:"Disk-Space:512gb",label:"512gb"},
    {id:12,value:"Disk-Space:Others",label:"Others"},
   
   

  ],

  

  "Display-Size":[
    {id:0,value:"",label:""},
    {id:1,value:"Display:4-5 inches",label:"4-5 inches"},
    {id:2,value:"Display:5.1-6inches",label:"5.1-6inches"},
    {id:3,value:"Display:above-6-inches",label:"above-6-inches"},
    {id:4,value:"Display:below-4-inches",label:"below-4-inches"},
  ],




    "Condition":[
      {id:0,value:"",label:""},
      {id:1,value:"STATE:New",label:"Brand-New"},
      {id:2,value:"STATE:Used",label:"Used"},
      {id:3,value:"STATE:Refurbished",label:"Refurbished"},
  
    ],
    "brand":virtualBrand,
    "type":virtualType,
    
      "Swap":[
          {id:0,value:"",label:""},
          {id:1,value:"SWAP:YES",label:"YES"},
          {id:2,value:"SWAP:NO",label:"NO"},    
      
      ],

    
  }



const electronicTag={

  "RAM":virtualRam,
   

  "Processor":[
    {id:0,value:"",label:""},
    {id:1,value:"Processor:intel-core-i3",label:"Intel-Core-i3"},
    {id:2,value:"Processor:intel-core-i5",label:"Intel-Core-i5"},
    {id:3,value:"Processor:intel-core-i7",label:"Intel-Core-i7"},
    {id:4,value:"Processor:intel-core-i9",label:"Intel-Core-i9"},
    {id:5,value:"Processor:intel-celeron",label:"Intel-Celeron"},
    {id:6,value:"Processor:intel-pentium",label:"Intel-Pentium"},
    {id:7,value:"Processor:intel-atom",label:"Intel-Atom"},
    {id:8,value:"Processor:Apple-M1",label:"Apple-M1"},
    {id:9,value:"Processor:Apple-M1-PRO",label:"Apple-M1-PRO"},
    {id:10,value:"Processor:Apple-M1-Max",label:"Apple-M1-Max"},
    {id:11,value:"Processor:Apple-M2",label:"Apple-M2"},
    {id:12,value:"Processor:Apple-M2-Ultra",label:"Apple-M2-Ultra"},
    {id:13,value:"Processor:AMD",label:"AMD"},
    {id:14,value:"Processor:AMD-Ryzen",label:"AMD-Ryzen"},
    {id:15,value:"Processor:AMD-Ryzen-3",label:"AMD-Ryzen-3"},
    {id:16,value:"Processor:AMD-Ryzen-5",label:"AMD-Ryzen-5"},
    {id:17,value:"Processor:AMD-Ryzen-7",label:"AMD-Ryzen-7"},
    {id:18,value:"Processor:AMD-Ryzen-9",label:"AMD-Ryzen-9"},
    {id:19,value:"Processor:AMD-A-4",label:"AMD-A-4"},
    {id:20,value:"Processor:AMD-A-6",label:"AMD-A-6"},
    {id:21,value:"Processor:AMD-A-8",label:"AMD-A-8"},
    {id:22,value:"Processor:AMD-A-10",label:"AMD-A-10"},
    {id:23,value:"Processor:Others",label:"Others"},

  ],
   
  "Hard-Disk-Space":virtualDiskSpace,

  "Hard-Disk-Type":[
    {id:0,value:"",label:""},
    {id:1,value:"Disk-Type:HDD",label:"HDD"},
    {id:2,value:"Disk-Type:SSD",label:"SSD"},
    {id:3,value:"Disk-Type:SSD+HDD",label:"SSD+HDD"},
    {id:4,value:"Disk-Type:SSHD(Hybrid)",label:"SSHD(Hybrid)"},
    {id:5,value:"Disk-Type:eMMC",label:"eMMC"},
    

  ],

  "Display-Size":[
    {id:0,value:"",label:""},
    {id:1,value:"Display:21-inch",label:"21-inch"},
    {id:2,value:"Display:20.1-inch",label:"20.1-inch"},
    {id:3,value:"Display:19-inch",label:"19-inch"},
    {id:4,value:"Display:17/17.3-inch",label:"17/17.3-inch"},
    {id:5,value:"Display:16-inch",label:"16-inch"},
    {id:6,value:"Display:15/15.6-inch",label:"15/15.6-inch"},
    {id:7,value:"Display:14-inch",label:"14-inch"},
    {id:8,value:"Display:13-inch",label:"13-inch"},
    {id:9,value:"Display:12/12.3-inch",label:"12/12.3-inch"},
    {id:10,value:"Display:1/11.6-inch",label:"11/11.6-inch"},
    {id:11,value:"Display:10-inch",label:"10-inch"},
    {id:12,value:"Display:Others",label:"Others"},
  ],




    "Condition":[
      {id:0,value:"",label:""},
      {id:1,value:"STATE:New",label:"Brand-New"},
      {id:2,value:"STATE:Used",label:"Used"},
      {id:3,value:"STATE:Refurbished",label:"Refurbished"},
  
    ],
    "brand":virtualBrand,
    "type":virtualType,
    
      "Swap":[
          {id:0,value:"",label:""},
          {id:1,value:"SWAP:YES",label:"YES"},
          {id:2,value:"SWAP:NO",label:"NO"},    
      
      ],

    
  }


const handleFileUpload= async (event)=>{

  const file = event.target.files[0];
  const formData= new FormData()
  formData.append("file",file);
  formData.append("upload_preset","klojxcff")
 
  try{
   const response= await axios.post("https://api.cloudinary.com/v1_1/db6zfj4nq/image/upload",formData)
   const imageUrl = response.data.secure_url;
   const imageType = response.data.format;
   console.log("Image uploaded successfully.");
   console.log("Image URL:", imageUrl);
   if(response.status===200){
     setUrl(imageUrl);
     setType(imageType)
     setIsImageUploaded(true)
     console.log('urlff',url);
     console.log('type',type);
 
   }
  }
 catch(error){
   console.log(error);
 }





}



const handleSubmit= async (e)=>{
  e.preventDefault()
  console.log('TAGBRAND',tagBrand);
  console.log('TAGgender',tagGender);
  console.log('TAGtype',tagType);
  console.log('TAFASHIONCondition',tagFashionCondition);
  console.log('TAgsize',tagSize);

    tagContent.push(tagBrand,tagType,tagCondition,tagSwap,
    tagFashionCondition,tagGender,tagSize,tagRam,tagProcessor,tagDiskSpace,tagDiskType,tagDisplay)
    tags=tagContent.filter((tag)=>tag!=='')
    console.log('tagContent',tags);
    console.log('tagswithnoempty',tags);
    categoryContent.push(mCategory,Category)
    category=categoryContent.join()
    //category=Category
    console.log('tags',tags);
console.log('mCtegory',mainCategory,'brand',tagBrand,'swap',tagSwap,'type',tagType);

    if(mCategory==='mCategory:Electronic-gadget' &&(Category==='category:Mobile-Phones'  || Category==='category:Home-appliances'  || Category==='category:Phone-accessories' ||Category==='category:Computer-accessories')&& (!tagBrand||!tagSwap||!tagType||!tagCondition)){
        if(!tagBrand){
          VirtualnotChosenTag.push('brand')
        }
        if(!tagSwap){
          VirtualnotChosenTag.push('availability for swap')

        }
         if(!tagType){
          VirtualnotChosenTag.push('type')
        }
        if(!tagCondition){
          VirtualnotChosenTag.push('condition')
        }
        

      setAllTagNotChosen(true)
  }


else  if(mCategory==='mCategory:Electronic-gadget' && (Category==='category:Mobile-Phones'  || Category==='category:Home-appliances'  || Category==='category:Phone-accessories' ||Category==='category:Computer-accessories')&&(tagBrand||tagSwap||tagType||tagCondition)){
  setAllTagNotChosen(false)
}

if(mCategory==='mCategory:Electronic-gadget' &&(Category==='category:Computers'  ) &&(!tagBrand||!tagSwap||!tagType||!tagCondition ||! tagRam || !tagDiskSpace||!tagDisplay||!tagDiskType||!tagProcessor)){

  if(!tagBrand){
    VirtualnotChosenTag.push('Brand')
  }
  if(!tagSwap){
    VirtualnotChosenTag.push('Availability for Swap')

  }
   if(!tagType){
    VirtualnotChosenTag.push('Type')
  }
  if(!tagCondition){
    VirtualnotChosenTag.push('Condition')
  }
  if(!tagRam){
    VirtualnotChosenTag.push('RAM')
  }
  if(!tagDiskSpace){
    VirtualnotChosenTag.push('Hard-Disk-Space')
  }
  if(!tagDiskType){
    VirtualnotChosenTag.push('Hard-Disk-Type')
  }
  if(!tagProcessor){
    VirtualnotChosenTag.push('Processor-Type')
  }
  if(!tagDisplay){
    VirtualnotChosenTag.push('Screen-Size')
  }

  setAllTagNotChosen(true)
}

else if(mCategory==='mCategory:Electronic-gadget' &&(Category==='category:Computers')&&(tagBrand||tagSwap||tagType||tagCondition ||tagRam || tagDiskSpace||tagDisplay||tagDiskType||tagProcessor)){
  setAllTagNotChosen(false)

}


  if((mCategory==='mCategory:Fashion')&&(Category==="category:Clothing"||Category==="category:Shoes" ||Category==="category:Bags")&& (!tagBrand||!tagGender||!tagType||!tagFashionCondition||!tagSize)){

      if(!tagBrand){
          VirtualnotChosenTag.push('brand')
        }
        
         if(!tagType){
          VirtualnotChosenTag.push('type')
        }
        if(!tagFashionCondition){
          VirtualnotChosenTag.push('condition')
        }
        if(!tagSize){
          VirtualnotChosenTag.push('size')

        }
        if(!tagGender){
          VirtualnotChosenTag.push('gender')

        }
      setAllTagNotChosen(true)

  }

else  if((mCategory==='mCategory:Fashion')&&(Category==="category:Clothing"||Category==="category:Shoes" ||Category==="category:Bags")&& (tagBrand||tagGender||tagType||tagFashionCondition||tagSize)){
  setAllTagNotChosen(false)
}
///////////////

 
  if((mCategory==='mCategory:Fashion')&&(Category==="category:Wrist-Watches")&& (!tagBrand||!tagGender||!tagType||!tagFashionCondition)){

      if(!tagBrand){
          VirtualnotChosenTag.push('brand')
        }
        
         if(!tagType){
          VirtualnotChosenTag.push('type')
        }
        if(!tagFashionCondition){
          VirtualnotChosenTag.push('condition')
        }
       
        if(!tagGender){
          VirtualnotChosenTag.push('gender')

        }
        setAllTagNotChosen(true)
  }


else if((mCategory==='mCategory:Fashion')&&(Category==="category:Wrist-Watches")&& (tagBrand||tagGender||tagType||tagFashionCondition)){
  setAllTagNotChosen(false)
}

  if((mCategory==='mCategory:Fashion')&&(Category==="category:Fragrances")&& (!tagBrand||!tagType)){

      if(!tagBrand){
          VirtualnotChosenTag.push('brand')
        }
        
         if(!tagType){
          VirtualnotChosenTag.push('type')
        }
         
       
        setAllTagNotChosen(true)
  }


else if((mCategory==='mCategory:Fashion')&&(Category==="category:Fragrances")&& (tagBrand||tagType)){
  setAllTagNotChosen(false)
}


  if((mCategory==='mCategory:Fashion')&&(Category==="category:Fabrics")&& (!tagGender||!tagType)){
        
         if(!tagType){
          VirtualnotChosenTag.push('type')
        }
         
        if(!tagGender){
          VirtualnotChosenTag.push('gender')

        }
        setAllTagNotChosen(true)

  }

else if((mCategory==='mCategory:Fashion')&&(Category==="category:Fabrics")&& (tagGender||tagType)){
  setAllTagNotChosen(false)
}


const joinedNotChosen=VirtualnotChosenTag.join()
setNotChosenTag(joinedNotChosen)
console.log(VirtualnotChosenTag);

console.log('notChosenTag', notChosenTag,'joinednot',joinedNotChosen); 

const productData={
  name,
  description,
  category,
  image:[
   {
       url,
       type,
   }
  ],
  discount,
  amount,
  sku,
  tags,
}

console.log('is all tag not chosen',allTagNotChosen);
console.log(productData);

if(isImageUploaded && !allTagNotChosen){

  try{
    const url ='https://fmcg.onrender.com/products';
    const config={
      headers:{
          Authorization:`Bearer ${token}`
      }
    }
    const response= await axios.post(url,productData,config);
    if (response.status===201) {
  
      setIsProductUploaded(true)
      setName('')
      setDescription('')
      setUrl('')
      setType('')
      setSku(0)
      setAmount(0)
      setDiscount(0)
      tags=null;
      category=null;
      setMcategory('')
      setCategory('')
      setVtag('')
      setAppliedClass({})

      // Successful response status is 200
    } else {
      console.log('Response Status:', response.status);
      console.log('Response Data:', response.data);
      setIsProductNOTUploaded(true)
  
    }
  
      }
      catch(error){
          console.log(error);
      }

}


else{
  console.log('await function not run');
}



}







  








  


  return (
    <>
 <nav className='container-fluid  nav'>
        <div  className='container-fluid upload-nav'>
      <h6 className='sell-text1' >sell on hub6  </h6>
      <img src="download.jpeg" alt="" className='sell-logo' />
      <h6 className='divider1'>|</h6>
      <h6 className='sell-text2'>secured purchase</h6>
      <h6 className='divider2'>|</h6>
 <div className='round'></div>
            <div className='arc'></div>
            <h6 className='sell-text3'>{userName}  </h6>
      
   </div>
<h6> <strong>Hub6</strong>   designed by Encoded Enterprise </h6>
       

<br />
         
        <h1 className='logo'>hUb<span className='six'>6</span>
 </h1>             
    </nav>
<br />

  <section>
  <div className='container  first-input-col'> 
    <h5 className='first-input-text'>UPLOAD YOUR PRODUCT</h5>
</div> 
  <br />
  
<div  className='container  second-input-col'>
<br />
<form action="">

<input type="text" value={name}  onChange={(e)=>setName(e.target.value)} placeholder={'input name*'} className={'input-field'}/>
<br />
<br />
<input type="text" value={description}  onChange={(e)=>setDescription(e.target.value)} placeholder={'description*'} className={'input-field'}/>
<br />
<br />

<section className='tag'>
<h3>Select Product Main Category</h3>
<select name="" id="" onChange={handleMainCategory}>
   {
  
         mainCategory.map((category)=>{

return(
    <option  value={category.value}>
           {category.label}
    </option>
)
    
  })

   }  
   </select>  
  


<article>
{
    mCategory==='mCategory:Fashion' && (
          <>
          <h5>Select Product Category</h5>
        <select name="" id=""  onChange={handleCategory}>
        

          {
            fashionCategory.map((category)=>{
                return(

                    <option value={category.value}>
                    {category.label}
                </option>

                )
                
            })
          }

        </select>
        </>
    ) 
}

</article>



<article>
{
   (Category==='category:Clothing' ||Category==='category:Shoes' || 
   Category==='category:Bags' ) && (
    <>
    <h6>Please Select All Product Tag</h6>
        <select name="" id="" onChange={handleSubCategory}>
          {
            fashionTypeA.map((category)=>{
                return(

                    <option value={category.value} className={appliedClass[category.value] ?'field-grey':'tag'}>
                    {category.label}
                </option>

                )
                
            })
          }

        </select>
        </>
    ) 
}

</article>

<article>
{
   (Category==='category:Wrist-Watches' ) && (
    <>
        <h6>Please Select All Product Tag</h6>
        <select name="" id="" onChange={handleSubCategory}>
          {
            fashionTypeB.map((category)=>{
                return(

                    <option value={category.value} className={appliedClass[category.value] ?'field-grey':'tag'}>
                    {category.label}
                </option>

                )
                
            })
          }

        </select>
        </>
    ) 
}

</article>



<article>
{
   (Category==='category:Fragrances' ) && (
    <>
    <h6>Please Select All Product Tag</h6>
        <select name="" id="" onChange={handleSubCategory}>
          {
            fashionTypeD.map((category)=>{
                return(

                    <option value={category.value} className={appliedClass[category.value] ?'field-grey':'tag'}>
                    {category.label}
                </option>

                )
                
            })
          }

        </select>
        </>
    ) 
}

</article>


<article>
{
   (Category==='category:Fabrics' ) && (
    <>
     <h6>Please Select All Product Tag</h6>
        <select name="" id=""  onChange={handleSubCategory}>
          {
           
            fashionTypeC.map((category)=>{
                return(

                    <option value={category.value} className={appliedClass[category.value] ?'field-grey':'tag'}>
                    {category.label}
                </option>

                )
                
            })
          }

        </select>
</>
    ) 
}

</article>




<article>
{
   (subCategory) &&(Category==='category:Clothing' || Category==='category:Shoes' || Category==='category:Bags' ||Category==='category:Wrist-Watches' ||Category==='category:Fragrances' ||Category==='category:Fabrics' ) && (
        <select name="" id="" value={vTag} onChange={handleTag} >
          {
            fashionTag[subCategory].map((category)=>{
              const {id,label,value}=category
                return(

                    <option value={value}className={
                      category===vTag?'field-grey':'tag'
                    }>
                    {label}
                </option>

                )
                
            })
          }

        </select>

    ) 
}

</article>






<article>
  
{
    mCategory==='mCategory:Electronic-gadget' && (
      <>
      
      <h5>Select Product Category</h5>
        <select name="" id=""   onChange={handleCategory}>
           
          {
            electronicCategory.map((category)=>{
                return(

                    <option value={category.value}>
                    {category.label}
                </option>

                )
                
            })
          }

        </select>
        </>
    ) 
}

</article>



<article>
{
   ( Category==='category:Home-appliances'  || Category==='category:Phone-accessories' ||Category==='category:Computer-accessories' ) && (
    <>
       <h6>Please Select All Product Tag</h6>
        <select name="" id="" onChange={handleSubCategory}>
          {
            electronicSubCategory.map((category)=>{
                return(

                    <option value={category.value} className={appliedClass[category.value] ?'field-grey':'tag'}>
                    {category.label}
                </option>

                )
                
            })
          }

        </select>
        </>
    ) 
}

</article>


<article>
{
   (Category==='category:Mobile-Phones' ) && (
    <>
    <h6>Please Select All Product Tag</h6>
        <select name="" id="" onChange={handleSubCategory}>
          {
            electronicPhoneSubCategory.map((category)=>{
                return(

                    <option value={category.value} className={appliedClass[category.value] ?'field-grey':'tag'}>
                    {category.label}
                </option>

                )
                
            })
          }

        </select>
        </>
    ) 
}

</article>


<article>
{
   (Category==='category:Computers' ) && (
    <>
    <h6>Please Select All Product Tag</h6>
        <select name="" id="" onChange={handleSubCategory}>
          {
            electronicComputerSubCategory.map((category)=>{
                return(

                    <option value={category.value} className={appliedClass[category.value] ?'field-grey':'tag'}>
                    {category.label}
                </option>

                )
                
            })
          }

        </select>
        </>
    ) 
}

</article>




<article>
{
  
   (subCategory) &&(Category==='category:Mobile-Phones' ||Category==='category:Computers' || Category==='category:Home-appliances'  || Category==='category:Phone-accessories' ||Category==='category:Computer-accessories' ) && (
         <>
         
        <select name="" id="" value={vTag}  onChange={handleTag}>
          {
            electronicTag[subCategory].map((category)=>{
                return(

                    <option value={category.value}>
                    {category.label}
                </option>

                )
                
            })
          }

        </select>
        </>
    ) 
}

</article>



















</section>

<br />
<p className='input-field-text'>Add a photo</p>
<div className='field-container'>
<input type="file"className='file-field'  onChange={handleFileUpload}  />
</div>
   
<br />
<br /> 

<input type="number" value={discount}  onChange={(e)=>setDiscount(e.target.value)} placeholder={'discount*'} className={'input-field'}/>
<br />
<br />
<input type="number" value={amount}  onChange={(e)=>setAmount(e.target.value)} placeholder={'amount*'} className={'input-field'}/>
<br />
<br />
<input type="number" value={sku}  onChange={(e)=>setSku(e.target.value)} placeholder={'number of quantity*'} className={'input-field'}/>
<br />
<br />


<button type='submit' className='input-submit-button' onClick={handleSubmit}>submit</button>


</form>

</div>
     
    </section>  

    <div className={isProductUploaded?'upload-notification':'hide-form' }>
         <h3>Congrats!</h3>
         <p>you have successfully list your product for sale,kindly note that this product is awaiting review from the admin for approval, thank you.</p>
         <button onClick={()=>setIsProductUploaded(false)}>x</button>
    </div>

    <div className={isProductNOTUploaded?'non-upload-notification':'hide-form' }>
        <h6>Product not uploaded!</h6>
         
          <p> Kindly fill up all the input in the form </p> 
   <button onClick={()=>setIsProductNOTUploaded(false)}>x</button>
    </div>

    <div className={allTagNotChosen?'non-upload-notification':'hide-form' }>
        <h5>All Tags not Selected!</h5>
         
          <p> Please select all Tags,
            <br /> 
            PRODUCT:  <h6> {notChosenTag},</h6>has not been selected </p> 
   <button onClick={()=>setAllTagNotChosen(false)}>x</button>
    </div>
   




    </>






  )
}


 