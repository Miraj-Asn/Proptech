import React from "react"
import AdminNav from './adminNav'
import Sidebar from './sidebar'
import Footer from './footer'
import CmsAddEditPage from './Cms/cmsAddEditPage'


function CmsAddEdit() {
    return (
        <>
        <div className='sb-nav-fixed'>
          <AdminNav />
          <div id="layoutSidenav">
              <Sidebar />
              <div id="layoutSidenav_content">
                  <CmsAddEditPage />
                 <Footer />
              </div>
          </div>
          </div>
      </>
    );
  }
  
  export default CmsAddEdit;
  