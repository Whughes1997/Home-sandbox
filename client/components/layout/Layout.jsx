import React from "react";
import './Layout.css';
import video from '../../assets/rain.mp4'

export default function Layout({ children }) {
  return (
    <div className="layout">
      <video loop muted autoPlay id="bg-video">
        <source src={video} type="video/mp4" />
      </video>
      {children}
    </div>
  )
}