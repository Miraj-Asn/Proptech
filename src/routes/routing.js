import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Dashboard from '../components/admin/dashboard'
import Blog from '../components/admin/blog'
import BlogAddEdit from '../components/admin/blogAddEdit'
import Cms from '../components/admin/cms'
import CmsAddEdit from '../components/admin/cmsAddEdit'
import CmsSeo from '../components/admin/cmsSeo'
import EmailTemplate from '../components/admin/emailTemplate'
import NewsLetter from '../components/admin/newsLetterTemplate'

const Routing = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="admin">
            <Route path="dashboard" element={<Dashboard />} />      
            <Route path="blog" element={<Blog />} />
            <Route path="blog-add-edit" element={<BlogAddEdit />} />
            <Route path="cms" element={<Cms />} />
            <Route path="cms-add-edit" element={<CmsAddEdit />} />
            <Route path="cms-seo" element={<CmsSeo />} />
            <Route path="email-template" element={<EmailTemplate />} />
            <Route path="newsletter" element={<NewsLetter />} />
            cms_seo        
        </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default Routing