import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { contxtname } from "./Context";
import apicall from './db.js';
function Row(props) {
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {props.oid}
        </TableCell>
        <TableCell align="left">{props.uname}</TableCell>
        <TableCell align="left">{props.address}</TableCell>
        <TableCell align="right">{props.date}</TableCell>
        <TableCell align="right">{props.total}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Details
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Image</TableCell>
                    <TableCell>Product Name</TableCell>
                    <TableCell align="right">Quantity</TableCell>
                    <TableCell align="right">Total price</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {props.orderitemsarr.map((j) => {
                    return (
                      <TableRow key={j.id}>
                        <TableCell>
                          <img
                            alt=""
                            src={j.img}
                            style={{ height: "40px", width: "40px" }}
                          />
                        </TableCell>
                        <TableCell>{j.pname}</TableCell>
                        <TableCell align="right">{j.quantity}</TableCell>
                        <TableCell align="right">{j.price}</TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      })
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};

export default function Orders() {
  const contxt = React.useContext(contxtname);
  const [available, setAvailable] = React.useState("yes");
  // React.useEffect(() => {
  //   // contxt.orders.map((i) => {
  //   //   if (i.id == contxt.userID) {
  //   //     setAvailable("yes");
  //   //   }
  //   // });
  //   const avail = async()=>{
  //       let allorders = await apicall.get(`/orders/${contxt.userID}`);
  //       console.log(allorders.data);
  //   }
  //   avail();
  // }, []);
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
               
                {/* {contxt.orders.map((i) => {
                  if (i.userid == contxt.userID) {
                    return (
                      <Row
                        oid={i.id}
                        uname={i.name}
                        date={i.date}
                        total={i.total}
                        address={i.address}
                        orderitemsarr={i.ordersofuser}
                      />
                    );
                  }
                })} */}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      ) : (
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
