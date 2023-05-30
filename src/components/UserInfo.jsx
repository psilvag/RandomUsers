import React, { useState,useEffect } from 'react'



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
   <article >
    <header>
    <img src={randomUser?.picture.large} alt="imageUser"/>
    </header>

    <div>
    <h3>Hi, my {tagName} is:</h3>
    
    <h2>{infoUser.title==="" ? randomUser?.name.title : infoUser.title} { infoUser.first==="" ? randomUser?.name.first : infoUser.first} {infoUser.last==="" ? randomUser?.name.last : infoUser.last}</h2>
    <h2>{infoUser.email}</h2>
    <h2>{infoUser.birthday}</h2>
    <h2>{infoUser.address_number} {infoUser.address_name}</h2>
    <h2>{infoUser.phone}</h2>
    <h2>{infoUser.password}</h2>
    </div>

    <div>
    
    <button onMouseOver={handleOverName}>NAME</button>
    <button onMouseOver={handleOverEmail}>EMAIL</button>
    <button onMouseOver={handleOverBirthday}>BIRTHDAY</button>
    <button onMouseOver={handleOverAddress}>ADDRESS</button>
    <button onMouseOver={handleOverPhone}>PHONE</button>
    <button onMouseOver={handleOverPassword}>PASSWORD</button>
    </div> 

    </article>
  )
}

export default UserInfo