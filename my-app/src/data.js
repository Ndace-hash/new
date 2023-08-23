
import React from 'react';

export const data=[
    {
      shoes:[
          {
            palm:[
                   {cat:'shoes',id:1, sex:`male`, size:42, price:3000,img:'Screenshot_20230616-031551_1.png',popular:'yes'},
                   {cat:'shoes',id:2, sex:`female`, size:34, price:1000,img:'Dwt_Designs3879.jpg', popular:'no'},
                   {cat:'shoes',id:3, sex:`female`, size:30, price:2500,img:'Dwt_Designs4009.jpg', popular:"yes"},
                   {cat:'shoes',id:4, sex:`male`, size:31, price:1200,img:'Screenshot_20230616-031556_1.png',popular:"no"},
                   {cat:'shoes',id:5, sex:`male`, size:42, price:4000,img:'Screenshot_20230616-031602_1.png',popular:"yes"},
            ]
        },

         {
            officeShoes:[
                  {cat:'shoes',id:6, sex:`male`, size:32, price:30000, img:'Screenshot_20230616-031247_1.png'},
                   {cat:'shoes',id:7, sex:`female`, size:41, price:3700,img:'Screenshot_20230616-031317_2.png',popular:"yes"},
                   {cat:'shoes',id:8, sex:`male`, size:39, price:5000, img:'Screenshot_20230616-031241_1 - Copy.png',popular:"no"},
                   {cat:'shoes',id:9, sex:`male`, size:42, price:4500,img:'Screenshot_20230616-031254_1.png',popular:"yes"},

            ]
        },
         {
            sneakers:[
                 {cat:'shoes',id:10, sex:`male`, size:32, price:30000, brand:`adidas`, img:'Screenshot_20230616-031441_1.png',popular:"yes"},
                   {cat:'shoes',id:11, sex:`female`, size:41, price:4000,brand:`nike`,img:'Screenshot_20230616-032700_1.png',popular:"yes"},
                   {cat:'shoes',id:12, sex:`male`, size:39, price:2500,brand:`nike`, img:'353820429_597159069181261_5395302010889946331_n.jpg',popular:"yes"},
                   {cat:'shoes',id:13, sex:`male`, size:42, price:2000,brand:`puma`,img:'Screenshot_20230616-031450_1.png',popular:"yes"}
            ]
        },
      ] 

    },

   
    {
      clothes:[
          {
            casual:[
                   {cat:'clothes',id:14, sex:`male`, size:42, price:3000,img:'1-5.jpg',popular:"yes"},
                   {cat:'clothes',id:15, sex:`female`, size:34, price:1000,img:'1-12.jpg',popular:"no"},
                   {cat:'clothes',id:16, sex:`female`, size:30, price:2500,img:'1-13.jpg',popular:"yes"},
                   {cat:'clothes',id:17, sex:`male`, size:30, price:1200,img:'1-3.jpg',popular:"yes"},
                   {cat:'clothes',id:18, sex:`male`, size:42, price:4000,img:'1-2.jpg',popular:"yes"},
            ]
        },

         {
            officeWears:[
                  {cat:'clothes',id:19, sex:`male`, size:32, price:1300,img:'download-2.webp',popular:"yes"},
                   {cat:'clothes',id:20, sex:`female`, size:41, price:800,img:'1-18.jpg',popular:"yes"},
                   {cat:'clothes',id:21, sex:`male`, size:39, price:2500,img:'download-4.webp',popular:"yes"},
                    {cat:'clothes',id:22, sex:`female`, size:39, price:25000,img:'1-16.jpg',popular:"yes"},
                     {cat:'clothes',id:23, sex:`male`, size:39, price:2600,img:'download-3.webp',popular:"no"},
                   {cat:'clothes',id:24, sex:`male`, size:42, price:4000,img:'download-1.webp',popular:"yes"},
            ]
        },
         {
            partyWears:[
                 {cat:'clothes',id:25, sex:`male`, size:32, price:3000, brand:`louis-votton`, img:'il_300x300.847310775_3yt9.jpg',popular:"yes"},
                   {cat:'clothes',id:26, sex:`female`, size:41, price:4500,brand:`gucci`,img:'1-10.jpg',popular:"yes"},
                   {cat:'clothes',id:27, sex:`female`, size:39, price:25000,brand:`armani`,img:'1-11.jpg',popular:"yes"},
                   {cat:'clothes',id:28, sex:`male`, size:42, price:6000,brand:`dolce&gabbana`,img:'il_300x300.3335695758_eskh.jpg',popular:"no"}
            ]
        },
      ] 

    },


]

export const dataArray = [
  {
    _id: "64db5c2c547c9b8c7684adbe",
    name: "A coloured shirt",
    description: "A coloured shirt suitable for outing",
    category: "mCategory:Fashion,category:Clothing",
    slug: "a-coloured-shirt-1692097580870",
    image: [
      {
        url: "https://res.cloudinary.com/db6zfj4nq/image/upload/v1692097547/a62xheirtjdzbhb4sg5d.jpg",
        type: "jpg",
        _id: "64db5c2c547c9b8c7684adbf"
      }
    ],
    discount: 0,
    amount: 20000,
    sku: 2,
    status: "verified",
    available: true,
    tags: [
      "BRAND:Gucci",
      "TYPE:Tops",
      "STATE:New",
      "Gender:MALE",
      "SIZE:Medium"
    ],
    reviews: [],
    seller: {
      address: {
        houseNumber: "15",
        street: "sawmill Street",
        city: "Ilorin",
        state: "Kwara",
        country: "Nigeria"
      },
      _id: "64c42958ef33ce6fd406c108",
      firstName: "Ismail",
      lastName: "Umar",
      email: "ismailumar@gmail.com",
      telephone: "09131425976"
    },
    createdAt: "2023-08-15T10:48:35.564Z",
    isDeleted: false,
    __v: 0
  },
  // Add more objects here...
];

console.log(dataArray);
