import React from "react";
export const contxtname = React.createContext();
const Contxt = (props) => {
    
  const [login,setLogin] = React.useState('');
  const [bgs,setBgs] = React.useState('white');

  
  return (
    <contxtname.Provider value={
      { 
      login:login,
      setLogin:setLogin,
      bgs:bgs,
      setBgs:setBgs,
     }
      }>
      {props.children}
    </contxtname.Provider>
  );
};

export default Contxt;
