'use client'
import React from 'react'
import { Outlet } from 'react-router-dom'
import ImpactNav from './ImpactNav'
import dfvImage from "../../assets/dvf.png"

export default function ImpactLayoutPage() {
  return (
    <div className="layout-container">
      <img src='/assets/dvf.png' alt="dfv image" className='dfv-img'/>
      <ImpactNav />
      <div className="main">
        <Outlet />
      </div>
    </div>
  );
}
