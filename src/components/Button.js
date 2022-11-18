import React from "react";

const Button = ({value,styleClass}) => {
return (  <button className={styleClass} >
    {value}
  </button>)

}
export default Button