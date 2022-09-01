import { getDialogContentTextUtilityClass, TextField } from "@mui/material";
import React, { useState } from "react";
import { contxtname } from "./Context";
import apicall from "./db.js";
import { v4 as uid } from "uuid";
const Checkout = () => {
  const contxt = React.useContext(contxtname);
  const [name, setName] = useState("");
  const [mob_no, setMob_no] = useState("");
  const [home_no, setHome_no] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pin, setPin] = useState("");
  const [ttl, setTtl] = useState("");
 
  React.useEffect(()=>{
    let total = 0;
    contxt.addtocartstate.map(i=>{
    let q = Number(i.quantity);
    let p = Number(i.price);
      total = total + q*p;
    })
    setTtl(total)
  },contxt.cartcount);

  const placeorder = async () => {
    if (name == "" || home_no == "" || city == "" || state == "" || pin == "") {
      alert("All field are mendotary");
    } else {
      let items = {
        id:uid,
        // date:Date().getDate(),
        userid: contxt.userID,
        ordersofuser: [...[contxt.addtocartstate]],
        name: name,
        address: home_no + ", " + city + ", " + state + ", " + pin,
        mob_number: mob_no,
      };

      try {
        await apicall.post('/orders/', items);
        contxt.addtocartstate.map( async(i)=>{
          try {
            await apicall.delete(`/addtocart/${i.id}`);
            contxt.setAddtocartstate([]);
            contxt.setCartCount(0);
          } catch (er) {
            console.log(er);
          }
        })
        
        
      } catch (e) {
        console.log(e);
      }
      setTtl(0)
    }
    
  };
  return (
    <>
      {" "}
      <h1 style={{ marginTop: "100px", marginLeft: "20px" }}>Checkout </h1>
      <div className="productdetailspage">
        <div
          className="detailpropicdiv"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <TextField
            id="standard-basic"
            label="Enter your name"
            variant="standard"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <TextField
            id="standard-basic"
            label="Enter mobile number(optional if you want to change)"
            variant="standard"
            onChange={(e) => {
              setMob_no(e.target.value);
            }}
          />
          <TextField
            id="standard-basic"
            label="Enter House number"
            variant="standard"
            onChange={(e) => {
              setHome_no(e.target.value);
            }}
          />
          <TextField
            id="standard-basic"
            label="Enter City"
            variant="standard"
            onChange={(e) => {
              setCity(e.target.value);
            }}
          />
          <TextField
            id="standard-basic"
            label="Enter State"
            variant="standard"
            onChange={(e) => {
              setState(e.target.value);
            }}
          />
          <TextField
            id="standard-basic"
            label="Enter PIN Code"
            variant="standard"
            onChange={(e) => {
              setPin(e.target.value);
            }}
          />
        </div>
        <hr />
        <div className="detailprocartdiv">
          <p className="detailproname">
            Registered mobile number :{contxt.userID}
          </p>
          <p className="detailproname">
            <u>Details</u>
          </p>
          <div className="specicationdetails">
            <p>Number of Products : </p>
            <p> &nbsp;&nbsp; {contxt.cartcount}</p>
          </div>
          <div className="specicationdetails">
            <p>Total : </p>
            <p> &nbsp;&nbsp; ₹{ttl}</p>
          </div>
          <div className="specicationdetails">
            <p>Total Discount : </p>
            <p> &nbsp;&nbsp; ₹{0}</p>
          </div>
          <hr />
          <div className="cartbox">
            <div onClick={placeorder} className="addtocartbtndetails">
              Place Order
            </div>
          </div>
          <hr />
        </div>
      </div>
    </>
  );
};

export default Checkout;
