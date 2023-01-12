import React from "react"
import AdminNav from './adminNav'
import Sidebar from './sidebar'
import Footer from './footer'
import NewsLetterPage from './NewsLetter/index'


function NewsLetter() {
    return (
        <>
        <div className='sb-nav-fixed'>
          <AdminNav />
          <div id="layoutSidenav">
              <Sidebar />
              <div id="layoutSidenav_content">
                  <NewsLetterPage />
                 <Footer />
              </div>
          </div>
          </div>
      </>
    );
  }
  
  export default NewsLetter;
  