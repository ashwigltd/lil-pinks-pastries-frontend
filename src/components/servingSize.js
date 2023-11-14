// Render Prop
import React from "react"
import './button'
import { useState } from "react";
import Button from "./button";

export default class servingSize extends React.Component {
  render() {
    const [isOpen, setIsOpen] = useState(false);

    const Popup = <img src="../assets/servingSize.jpg" alt="serving size"></img>
  
    function toggle() {
      setIsOpen((isOpen) => !isOpen)
    };

    return (
      <div className="App">
        {isOpen && <Popup />}
        <Button onClick={toggle}>Toggle show</Button>
      </div>
    );
  }
}