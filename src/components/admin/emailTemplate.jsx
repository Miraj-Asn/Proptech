import React from "react"
import AdminNav from './adminNav'
import Sidebar from './sidebar'
import Footer from './footer'
import EmailTemplatePage from './EmailTemplate/index'


function EmailTemplate() {
    return (
        <>
        <div className='sb-nav-fixed'>
          <AdminNav />
          <div id="layoutSidenav">
              <Sidebar />
              <div id="layoutSidenav_content">
                  <EmailTemplatePage />
                 <Footer />
              </div>
          </div>
          </div>
      </>
    );
  }
  
  export default EmailTemplate;
  