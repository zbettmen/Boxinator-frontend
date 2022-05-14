import React from 'react'
import "../styles/header.scss"
export default function Header({setPage}){
    return <div className='head'>
        <p className='addbox'onClick={()=> setPage("formpage")} > Add box </p>
        <p className='seboxes'onClick={()=> setPage("tablepage")} > See boxes </p>
    </div>
}