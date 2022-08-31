import React from 'react'
import { contxtname } from './Context';
import ProductBox from './ProductBox'
import { NavLink, useNavigate } from 'react-router-dom';
const CategoryProducts = () => {
    const contxt = React.useContext(contxtname);
    const navigate = useNavigate();
    const addtocart = (e)=>{
        alert(e.target.id)
    }
    const detailspage =(e)=>{
        contxt.setDetailid(e.target.id);
        navigate('/details')
    }
  return (
    <div className='categorypage'>
        {contxt.products.map(i=>
        {if(contxt.cat_products == i.pcategory){
            return <ProductBox productpic={i.img}
            productname={i.pname}
            productprice={i.price}
            id={i.id}
            category={i.pcategory}
            addtocartbtn={addtocart}
            showdetails={detailspage}
            />
        }}
        
        )}
        
    </div>
  )
}

export default CategoryProducts