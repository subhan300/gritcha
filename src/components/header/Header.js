import React,{useState,useEffect} from 'react'
import "./Header.css"

import { FiSearch} from "react-icons/fi"
import {ImLocation2} from "react-icons/im"
import {AiOutlineClose} from "react-icons/ai"
function TransDesign() {
    const [isMobile, setIsMobile] = useState(true)
    const [isPrimaryMenuDisplay, setIsPrimaryMenu] = useState(false)
    const [navHeight,setNavHeight] = useState(false)
    const [responsiveSidebar,setResponsiveSidebar] = useState(true)
    const [topNav,setTopNav] = useState(false)
    const sideBar=()=>{
        
       if(responsiveSidebar==true){
        setResponsiveSidebar(false)
        setNavHeight(true)
        
       }
       else{
        setResponsiveSidebar(true)
        setNavHeight(false)
       }

    }
    const handleResize = () => {
        if (window.innerWidth < 1100) {
            setIsMobile(false)
            setIsPrimaryMenu(true)
        

        } else {
            setIsMobile(true)
            setIsPrimaryMenu(false)
            // setResponsiveSidebar(false)
        }
      }
      const top_nav_width=()=>{
        if (window.innerWidth < 820) {
            setTopNav(true)
        

        } else {
           setTopNav(false)
        }
      }
      // create an event listener
      useEffect(() => {
        window.addEventListener("resize", handleResize)
        window.addEventListener("resize", top_nav_width)
      })
      
    return (
        <>
    <div className="top_nav bd_green">
             <div className="top_nav_container bd_red">
                  <div className="top_nav_container_left  row">
                      <div className="top_nav_container_left_content">Individuals</div>
                       <div className="top_nav_container_left_content">Enterprise</div>
                       <div className="top_nav_container_left_content">Government</div>
                  </div>
                  <div className="top_nav_container_right  row">
                       {(topNav==false)?<>
                 
                       <div className="icon_right_div row ">
                       <div className="top_nav_container_right_content " style={{fontSize:"18px"}}>
                            Help
                           
                       </div>
                       <div className="top_nav_container_right_content" style={{marginTop:"10px"}}>
                            <FiSearch   />
                           
                       </div>
                       <div className="top_nav_container_right_content" style={{marginTop:"10px"}}>
                            <ImLocation2    />
                           
                       </div>
                       </div>
                        <div className="top_nav_container_right_content">عربي</div>
                       </>:
                    
                        <div className="top_nav_container_right_content">عربي</div>
                       }
                  </div>
             </div>
    </div>

<div className={`main_nav ${navHeight && 'nav_height'}   container_nav` }>


<div className="nav_container row ">
    <div className={`responsive_sidebar ${responsiveSidebar && 'responsive_sidebar_display'}`}>
    <div onClick={sideBar} className="close_menu"><AiOutlineClose /></div>
       <div className="sideBar_content ">
            <div className="sideBar_content_elements">Individuals</div>
            <div className="sideBar_content_elements">Sendings</div>
            <div className="sideBar_content_elements">Individuals</div>
            <div className="sideBar_content_elements">Sendings</div>

       </div>
     
    </div>
    <div className="nav_container_secondary row ">
       
       {(topNav)? <>

           <div className="top_nav_container_right_content " style={{fontSize:"16px",color:"black"}}>
                       Help
                      
                  </div>
                  <div className="top_nav_container_right_content" style={{marginTop:"10px",color:"black",fontSize:"17px !important"}}>
                       <FiSearch   />
                      
                  </div>
                  <div className="top_nav_container_right_content" style={{marginTop:"10px",color:"black",fontSize:"17px !important"}}>
                       <ImLocation2    />
                      
                  </div>
       </>
                  :
               <>
               <div className="nav_side_content">Sign up</div>
                <div className="nav_side_content">Login</div>
             
               </>
                  
                  } 
   

</div>
    <div className="nav_container_primary  row">
    
   
       <div className={`nav_content_ul row  ${isPrimaryMenuDisplay && 'nav_content_hide'}`}>
           <div className="nav_content_ul_element">Sending</div>
           <div className="nav_content_ul_element">Recieving</div>
           <div className="nav_content_ul_element">Awfar</div>
           <div className="nav_content_ul_element">Alami</div>
           <div className="nav_content_ul_element">National Address</div>
           <div className="nav_content_ul_element">Retail Service</div>
       </div>
       <div className="logo"><img className="logo_img" src="https://splonline.com.sa/Design/images/Logo.svg"></img></div>
       
       <div type="button" onClick={sideBar} className={`hammer ${isMobile && 'hammer_display'}`}>
              <div  className="hammer_line"></div>
              <div className="hammer_line"></div>
              <div className="hammer_line"></div>
        </div>
    </div>

  
     


          
</div>
</div>



      </>










































             
    
    )
}

export default TransDesign
