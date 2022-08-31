import React from 'react'
import { contxtname } from './Context';

const ProductDetailPage = (props) => {
    const contxt = React.useContext(contxtname);
  return (
    <div>
        {contxt.products.map(i=>{
            if(contxt.detailid == i.id){
                return <div className='productdetailspage'>
                <div className='detailpropicdiv'>
                    <img alt='' 
                    className='detailpropic'
                    src={i.img}
                    />
                </div>
                <hr />
                <div className='detailprocartdiv'>
                    <p className='detailproname'>{i.pname}</p><hr />
                    <div className='cartbox'>
                        <div id={i.id} className='addtocartbtndetails'>Add to Cart</div>
                    </div>
                    <hr />
                    <p className='detailproname'><u>Specifications</u></p>
                    <div className='specicationdetails'>
                        <p>Speciality : </p><p> &nbsp;&nbsp; Premium</p>
                    </div>
                    <div className='specicationdetails'>
                        <p>Category : </p><p> &nbsp;&nbsp; {i.pcategory}</p>
                    </div>
                    <div className='specicationdetails'>
                        <p>Price : </p><p> &nbsp;&nbsp; ₹{i.price}</p>
                    </div>
        
                </div>
            </div>
            }
        })}
    </div>
  )
}

export default ProductDetailPage



