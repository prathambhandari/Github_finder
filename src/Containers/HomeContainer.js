
import React from 'react'
import Navbar from '../components/Navbar'
import Search from '../components/Search'
import Users from '../components/Users'


const homestyle = {
  padding: "1rem",
  width:"80%",
  marginLeft: '12rem'
}


function HomeContainer() {

    const [searchData,setSearchData] = React.useState([]);
  
    const storeSearchData = (data)=>{
      setSearchData(data);
    }

    console.log(searchData)


  return (
    <React.Fragment>
        <Navbar/>
        <div style={homestyle}>
    
            
            <Search searchData={storeSearchData} showClear={searchData.length > 0 ?true :false}/>
            <Users data={searchData}/>
            
            
          
        </div>
    </React.Fragment>
  )
}

export default HomeContainer