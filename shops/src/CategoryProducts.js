import React from "react";
import { contxtname } from "./Context";
import apicall from "./db.js";
import ProductBox from "./ProductBox";
import { NavLink, useNavigate } from "react-router-dom";
const CategoryProducts = () => {
  const contxt = React.useContext(contxtname);
  const navigate = useNavigate();

  const addtocart = (e) => {

    contxt.products.map(async (i) => {
      if (i.id == e.target.id) {
        if(contxt.addtocartstate.length != 0){

          contxt.addtocartstate.map(async (j) => {
            if (e.target.id == j.id) {
              let items = {
                id: j.id,
                pcategory: j.pcategory,
                pname: j.pname,
                quantity: j.quantity+1,
                price: j.price,
                img: j.img,
              };
              console.log(contxt.addtocartstate);
              try 
              {
                await apicall.put(`/addtocart/${i.id}`, items);
                let addtocart = await apicall.get("/addtocart");
                contxt.setAddtocartstate(addtocart.data);
              } 
              catch (e) 
              {
                console.log(e);
              }
            }
            else{
              let item = {
                id: i.id,
                pcategory: i.pcategory,
                pname: i.pname,
                quantity: 1,
                price: i.price,
                img: i.img,
              };
              console.log(item);
              console.log(contxt.addtocartstate);
              try {
                await apicall.post("/addtocart", item);
                let addtocart = await apicall.get("/addtocart");
                contxt.setAddtocartstate(addtocart.data);
                contxt.setCartCount(addtocart.data.length);
              } catch (e) {
                console.log(e);
              }
            }
        });}

        else{
          let item = {
            id: i.id,
            pcategory: i.pcategory,
            pname: i.pname,
            quantity: 1,
            price: i.price,
            img: i.img,
          };
          console.log(item);
          console.log(contxt.addtocartstate);
          try {
            await apicall.post("/addtocart", item);
            let addtocart = await apicall.get("/addtocart");
            contxt.setAddtocartstate(addtocart.data);
            contxt.setCartCount(addtocart.data.length);
          } catch (e) {
            console.log(e);
          }
        }
      }}
    );
  };
  const detailspage = (e) => {
    contxt.setDetailid(e.target.id);
    navigate("/details");
  };
  return (
    <div className="categorypage">
      {contxt.products.map((i) => {
        if (contxt.cat_products == i.pcategory) {
          return (
            <ProductBox
              productpic={i.img}
              productname={i.pname}
              productprice={i.price}
              id={i.id}
              category={i.pcategory}
              addtocartbtn={addtocart}
              showdetails={detailspage}
            />
          );
        }
      })}
    </div>
  );
};

export default CategoryProducts;
