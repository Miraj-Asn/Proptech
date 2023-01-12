import React from "react"
import AdminNav from './adminNav'
import Sidebar from './sidebar'
import Footer from './footer'
import CmsPage from './Cms/index'


function Cms() {
    return (
        <>
        <div className='sb-nav-fixed'>
          <AdminNav />
          <div id="layoutSidenav">
              <Sidebar />
              <div id="layoutSidenav_content">
                  <CmsPage />
                 <Footer />
              </div>
          </div>
          </div>
      </>
    );
  }
  
  export default Cms;
  