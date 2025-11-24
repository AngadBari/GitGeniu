import React from 'react'
import Navbar from './components/navBar/Navbar'
import SearchBox from './components/searchBox/Searchbox'


const App = () => {
  return (
   <>
     <Navbar/>
    
     
      
     <div className="min-h-screen w-full bg-white relative">
   
  <div
    className="absolute inset-0"
    style={{
      backgroundImage: `
        linear-gradient(45deg, transparent 49%, #e5e7eb 49%, #e5e7eb 51%, transparent 51%),
        linear-gradient(-45deg, transparent 49%, #e5e7eb 49%, #e5e7eb 51%, transparent 51%)
      `,
      backgroundSize: "40px 40px",
    }}
  />
   <SearchBox/>
 
</div>
 


   </>
  )
}

export default App