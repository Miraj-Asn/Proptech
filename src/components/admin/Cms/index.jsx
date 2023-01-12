import React from "react"

function CmsPage() {
    return (
        <main>
            <div class="container-fluid px-4">
                <div class="row">
                    <div class="col-12">
                        <div class="page-title-box d-sm-flex align-items-center justify-content-between">
                            <h4 class="mb-sm-0">CMS</h4>
                            <div class="widget-right-header">
                                    <select>
                                        <option>-Select Site-</option>
                                        <option>Albay Flora</option>
                                        <option>Mnaila Blossom Flora.com</option>
                                    </select>
                                
                                <button type="button" class="btn btn-secondary">Export Excel</button>
                                <button type="button" class="btn btn-secondary" onclick="window.location.href='cms-seo-excel-upload.html'">Import Excel</button>
                                <button type="button" class="btn btn-secondary" onclick="window.location.href='add-edit-cms.html'">Add New</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12 dataTable__container">
                        <div class="dataTable-top">
                            <div class="dataTable-dropdown">
                                <label>
                                    <select class="dataTable-selector">
                                        <option value="5">5</option>
                                        <option value="10" selected="">10</option>
                                        <option value="15">15</option>
                                        <option value="20">20</option>
                                        <option value="25">25</option>
                                    </select> 
                                    entries per page
                                </label>
                            </div>
                            <div class="dataTable-search">
                                <input class="dataTable-input" placeholder="Search..." type="text" />
                            </div>
                        </div>
                        <div class="table-responsive">
                            <table class="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>Website</th>
                                        <th width="115px">Title</th>
                                        <th>Content</th>
                                        <th width="75px" class="text-center">SEO</th>
                                        <th width="200px" class="text-center">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>manilablossoms.com</td>
                                        <td>About Us</td>
                                        <td>ManilaBlossoms is an online flower shop from Manila that offers affordable flowers, flower bouquets, gifts, and flower arrangements, we also offer wholesale and retail flowers to any part of the Ph</td>
                                        <td class="text-center">NO</td>
                                        <td class="text-center">
                                            <button type="button" class="btn btn-info">Preview</button>
                                            <button type="button" class="btn btn-warning">Edit</button>
                                            <button type="button" class="btn btn-danger">Delete</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>manilablossoms.com</td>
                                        <td>About Us</td>
                                        <td>ManilaBlossoms is an online flower shop from Manila that offers affordable flowers, flower bouquets, gifts, and flower arrangements, we also offer wholesale and retail flowers to any part of the Ph</td>
                                        <td class="text-center">YES</td>
                                        <td class="text-center">
                                            <button type="button" class="btn btn-info">Preview</button>
                                            <button type="button" class="btn btn-warning">Edit</button>
                                            <button type="button" class="btn btn-danger">Delete</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div class="footerTable">
                                <p>Showing 1 to 10 of 2,908 entries</p>
                                <nav aria-label="Page navigation example">
                                    <ul class="pagination justify-content-end">
                                    <li class="page-item disabled">
                                        <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
                                    </li>
                                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                                    <li class="page-item">
                                        <a class="page-link" href="#">Next</a>
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
  
  export default CmsPage;
  

