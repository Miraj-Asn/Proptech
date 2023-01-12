import React from "react"
import AdminNav from './adminNav'
import Sidebar from './sidebar'
import Footer from './footer'
import BlogAddEditPage from './Blog/blogAddEditPage'


function BlogAddEdit() {
    return (
        <>
        <div className='sb-nav-fixed'>
          <AdminNav />
          <div id="layoutSidenav">
              <Sidebar />
              <div id="layoutSidenav_content">
                  <BlogAddEditPage />
                 <Footer />
              </div>
          </div>
          </div>
      </>
    );
  }
  
  export default BlogAddEdit;
  