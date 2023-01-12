import React from "react"
import AdminNav from './adminNav'
import Sidebar from './sidebar'
import Footer from './footer'

function Dashboard() {
    return (
        <>
        <div className='sb-nav-fixed'>
          <AdminNav />
          <div id="layoutSidenav">
              <Sidebar />
              <div id="layoutSidenav_content">
                <div className="dashboardContent"><h1>Welcome to Proptech.com Administrator Panel</h1> </div>     
                <Footer />
              </div>
          </div>
          </div>
      </>
    );
  }
  
  export default Dashboard;
  
