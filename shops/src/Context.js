import React, { useState } from "react";
import apicall from './db.js';
export const contxtname = React.createContext();
export const Context = (props) => {
  const [products, setProducts] = useState([]);
  const [cat_products, setCat_Products] = useState([]);
  const [detailid, setDetailid] = useState('');
  React.useEffect(()=>{
    const ax = async ()=>{
      try{
        let allusers = await apicall.get("/users");
        let allproducts = await apicall.get("/products");

        console.log(allusers.data)
        console.log(allproducts.data)
        setProducts(allproducts.data);
        setCat_Products(allproducts.data);
   
      }
      catch(e){
        console.log(e)
      }
    }
   ax();
  },[])

  return (
    <contxtname.Provider
      value=
      {{ 
        products: products, 
        setProducts: setProducts,
        cat_products:cat_products,
        setCat_Products: setCat_Products,
        detailid:detailid, 
        setDetailid:setDetailid
      }}
    >
      {props.children}
    </contxtname.Provider>
  );
};
