import React from "react"


function BlogPage() {
    return (
        <main>
            <div className="container-fluid px-4">
                <div className="row">
                    <div className="col-12">
                        <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                            <h4 className="mb-sm-0">BLOG LIST</h4>
                            <div className="widget-right-header">
                                <button type="button" className="btn btn-secondary">Add New</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 dataTable__container">
                        <div className="dataTable-top">
                            <div className="dataTable-dropdown">
                                <label>
                                    <select className="dataTable-selector">
                                        <option value="5">5</option>
                                        <option value="10">10</option>
                                        <option value="15">15</option>
                                        <option value="20">20</option>
                                        <option value="25">25</option>
                                    </select> 
                                    entries per page
                                </label>
                            </div>
                            <div className="dataTable-search">
                                <input className="dataTable-input" placeholder="Search..." type="text" />
                            </div>
                        </div>
                        <div className="table-responsive">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th style={{width:85 }}></th>
                                        <th>Website</th>
                                        <th>Title</th>
                                        <th style={{width:75 }} className="text-center">SEO</th>
                                        <th style={{width:75 }} className="text-center">Status</th>
                                        <th style={{width:200 }} className="text-center">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <img src="images/image-bg.jpeg" style={{width: '65px', height: 'auto'}} />
                                        </td>
                                        <td>manilablossoms.com</td>
                                        <td>ManilaBlossoms is an online flower shop from Manila that offers affordable flowers, flower bouquets, gifts, and flower arrangements</td>
                                        <td className="text-center">NO</td>
                                        <td className="text-center">Active</td>
                                        <td className="text-center">
                                            <button type="button" className="btn btn-info">Preview</button>
                                            <button type="button" className="btn btn-warning">Edit</button>
                                            <button type="button" className="btn btn-danger">Delete</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td>philflora.com</td>
                                        <td>ManilaBlossoms is an online flower shop from Manila that offers affordable flowers, flower bouquets, gifts, and flower arrangements</td>
                                        <td className="text-center">NO</td>
                                        <td className="text-center">Active</td>
                                        <td className="text-center">
                                            <button type="button" className="btn btn-info">Preview</button>
                                            <button type="button" className="btn btn-warning">Edit</button>
                                            <button type="button" className="btn btn-danger">Delete</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="footerTable">
                                <p>Showing 1 to 10 of 2,908 entries</p>
                                <nav aria-label="Page navigation example">
                                    <ul className="pagination justify-content-end">
                                    <li className="page-item disabled">
                                        <a className="page-link" href="#" aria-disabled="true">Previous</a>
                                    </li>
                                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                                    <li className="page-item">
                                        <a className="page-link" href="#">Next</a>
                                    </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
  }
  
  export default BlogPage;
  

