import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, redirect, RouterProvider } from 'react-router-dom';
import App from './App';
import {Review} from './review';
import { AppProvider } from './context';
import {Shoes} from './shoes';
import {Clothes} from './clothes'
import { Fragrances } from './fragrance';
import { Watches } from './watch';
import { Fabrics } from './fabrics';
import { Bags } from './bags';
import {Landing} from './landing-page'
import {ListedProducts} from './listed-products'
import {Input} from './input'
import {ProductInfo} from './product-info'

//import { Filter } from './filter';
//import { AppProvider } from './context';


import './index.css'





//import{load} from './App'
//every object to be rendered must be imported to the root file in this case index.js...last file listed will always be the file to be rendered //

const router=createBrowserRouter(
  [
    {
      path:'/',
      element:<App></App>
    },
    {
      path:'/',
      element:<AppProvider></AppProvider>
    },

  
    
   {
      path:'landing-page',
      element:<Landing></Landing>
    },




    
    {
      path:'input',
      element:<Input></Input>
    },
   
    {
      path:'listed-products',
      element:<ListedProducts></ListedProducts>
    },
    {
      path:'product-info',
      element:<ProductInfo></ProductInfo>
    },


    {
      path:'clothes',
      element:<Clothes></Clothes>
    },
     {
      path:'review',
      element:<Review></Review>
    },
    

      {
      path:'shoes',
      element:<Shoes></Shoes>
    },
    {
      path:'fragrance',
      element:<Fragrances></Fragrances>
    },
    {
      path:'watch',
      element:<Watches></Watches>
    },
    {
      path:'fabrics',
      element:<Fabrics></Fabrics>
    },
    {
      path:'bags',
      element:<Bags></Bags>
    },
    
    
     
   
  ]
)


ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
  
<RouterProvider router={router}></RouterProvider>
   
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
