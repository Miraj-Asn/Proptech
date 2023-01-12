import React from "react"
import AdminNav from './adminNav'
import Sidebar from './sidebar'
import Footer from './footer'
import CmsExcelSeo from './Cms/excelSeo'


function CmsSeo() {
    return (
        <>
        <div className='sb-nav-fixed'>
          <AdminNav />
          <div id="layoutSidenav">
              <Sidebar />
              <div id="layoutSidenav_content">
                  <CmsExcelSeo />
                 <Footer />
              </div>
          </div>
          </div>
      </>
    );
  }
  
  export default CmsSeo;
  