import React from "react"
import AdminNav from './adminNav'
import Sidebar from './sidebar'
import Footer from './footer'
import BlogPage from './Blog/index'


function Blog() {
    return (
        <>
        <div className='sb-nav-fixed'>
          <AdminNav />
          <div id="layoutSidenav">
              <Sidebar />
              <div id="layoutSidenav_content">
                  <BlogPage />
                 <Footer />
              </div>
          </div>
          </div>
      </>
    );
  }
  
  export default Blog;
  