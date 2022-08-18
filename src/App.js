import React from 'react'
import ProfileCard from './components/ProfileCard'
import ProfileForm from './components/ProfileForm'
import { useState } from 'react'

function App() {

  const [allProfiles,setAllprofiles]=useState([

    {
      firstname:"Alhas",
      lastname:"Maj",
      email:"maj,baanga60@gmail.com",
      phone:"0245419828"
    }
  ])

   const updateallprofiles=(profile)=>{
    let arr = allProfiles;
    arr.push(profile)
    setAllprofiles([...arr])
   };

 return (
    <> 
    <div className='app'>
       <h1>Our profile maker</h1>
    </div>
    <ProfileForm submit={updateallprofiles}/>
    <hr/>
    <div className='list'>
       {allProfiles.map((person, index)=>(
        <ProfileCard key={index} card={person}/>
       ))}


    </div>
    </>

  )
}

export default App