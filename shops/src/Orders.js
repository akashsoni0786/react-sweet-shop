import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { contxtname } from "./Context";
import apicall from './db.js';
import Row from "./Row";
export default function Orders() {
  const contxt = React.useContext(contxtname);
  const [available, setAvailable] = React.useState("no");
  
  React.useEffect(() => {
    const avail = async()=>{
        let allorders = await apicall.get(`/orders`);
        contxt.setOrders(allorders.data);
        contxt.orders.map(i=>{
          if(i.userid == contxt.userID){
            setAvailable("yes");
          }
        })
    }
    avail();
  }, []);

  return (
    <>
      {available == "yes" ? (
        <>
          {" "}
          <h1 sx={{ margin: "1300px 10px" }}>Orders</h1>
          <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
              <TableHead>
                <TableRow>
                  <TableCell />
                  <TableCell>Order ID</TableCell>
                  <TableCell align="left">Customer</TableCell>
                  <TableCell align="left">Address</TableCell>
                  <TableCell align="right">Date</TableCell>
                  <TableCell align="right">Total</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
               
                {contxt.orders.map((i) => {
                  if (i.userid == contxt.userID) {
                    return (
                      <Row
                        oid={i.id}
                        uname={i.name}
                        date={i.date}
                        total={i.total}
                        address={i.address}
                        orderitemsarr={i.orderitems}
                      
                      />
                    );
                  }
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      ) 
      :
      (
        <>
          <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            marginTop: "100px",
          }}
        >
          <h1>No Order </h1>
          <img alt="" style={{ width: "40%" }} src="empty.png" />
        </div>
        </>
      )}
    </>
  );
}




