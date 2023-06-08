import React, { useState,useEffect} from 'react'
import '../styles/UserInfo.style.css'
import { FaUser} from "react-icons/fa";
import {AiTwotoneMail} from "react-icons/ai"
import{FaBirthdayCake} from "react-icons/fa"
import{RiGpsLine} from "react-icons/ri"
import{BsTelephoneFill} from "react-icons/bs"
import{RiLockPasswordFill} from "react-icons/ri"



const UserInfo = ({randomUser,stateButton}) => {
   const [infoUser,setInfoUser]=useState({
    email:randomUser?.email,
    birthday:randomUser?.dob.date,
    address_number:randomUser?.location.street.number,
    address_name:randomUser?.location.street.name,
    phone:randomUser?.phone,
    password:randomUser?.login.password
   })

   const [tagName,setTagName]=useState("")

   useEffect(()=>{
    setInfoUser({first:"",last:"",title:""})
    setTagName("Name")
   },[stateButton]) 

   const handleOverName=()=>{
      setInfoUser({title:randomUser.name.title,
      first:randomUser.name.first,
      last:randomUser.name.last})
      setTagName("Name")
   }

   const handleOverEmail=()=>{
    setInfoUser({email:randomUser.email})
    setTagName("Email")
   }

   const handleOverBirthday=()=>{
    const date=new Date(randomUser.dob.date)
    const day= date.getDate()
    const month=date.getMonth()+1 // month goes from 0 to 11, so plus 1
    const year=date.getFullYear()
    setInfoUser({birthday:`${day}/${month}/${year}`})
    setTagName("Birthday")
   }

   const handleOverAddress=()=>{
      setInfoUser({address_number:randomUser.location.street.number,
      address_name:randomUser.location.street.name})
      setTagName("Address")
   }

   const handleOverPhone=()=>{
    setInfoUser({phone:randomUser.phone})
    setTagName("Phone")
   }

   const handleOverPassword=()=>{
      setInfoUser({password:randomUser.login.password})
      setTagName("Password")
   }
 
  
  return (
   <article className='article-user-info'>
    <header className='header-article'>
    <img src={randomUser?.picture.large} alt="imageUser"/>
    </header>

    <div className='article-greet'>
    <h3>Hi, my {tagName} is:</h3>
    
    <h2>{infoUser.title==="" ? randomUser?.name.title : infoUser.title} { infoUser.first==="" ? randomUser?.name.first : infoUser.first} {infoUser.last==="" ? randomUser?.name.last : infoUser.last}</h2>
    <h2>{infoUser.email}</h2>
    <h2>{infoUser.birthday}</h2>
    <h2>{infoUser.address_number} {infoUser.address_name}</h2>
    <h2>{infoUser.phone}</h2>
    <h2>{infoUser.password}</h2>
    </div>

    <div className='article-buttons'>
    
    <span onMouseOver={handleOverName}><FaUser style={{color:'#83BA43', fontSize:"28px", hover:'green'}}/></span>
    <span onMouseOver={handleOverEmail}><AiTwotoneMail style={{color:'#83BA43', fontSize:"28px", hover:'green'}}/></span>
    <span onMouseOver={handleOverBirthday}><FaBirthdayCake style={{color:'#83BA43', fontSize:"28px", hover:'green'}}/></span>
    <span onMouseOver={handleOverAddress}><RiGpsLine style={{color:'#83BA43', fontSize:"28px", hover:'green'}}/></span>
    <span onMouseOver={handleOverPhone}><BsTelephoneFill style={{color:'#83BA43', fontSize:"28px", hover:'green'}}/></span>
    <span onMouseOver={handleOverPassword}><RiLockPasswordFill style={{color:'#83BA43', fontSize:"28px", hover:'green'}}/></span>
    </div> 

    </article>
  )
}

export default UserInfo