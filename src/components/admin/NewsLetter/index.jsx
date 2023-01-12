import React from "react"

function NewsLetterPage() {
    return (
        <main>
            <div class="container-fluid px-4">
                <div class="row">
                    <div class="col-12">
                        <div class="page-title-box d-sm-flex align-items-center justify-content-between">
                            <h4 class="mb-sm-0">Newsletter List</h4>
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
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Mobile</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>manilablossoms.com</td>
                                        <td>05.10_2chekdonorovPC https://apple.com</td>
                                        <td>sema.valov.9595@mail.ru</td>
                                        <td>sema.valov.9595</td>
                                        <td class="text-center">
                                            <button type="button" class="btn btn-danger">Delete</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>manilablossoms.com</td>
                                        <td>05.10_2chekdonorovPC https://apple.com</td>
                                        <td>sema.valov.9595@mail.ru</td>
                                        <td>sema.valov.9595</td>
                                        <td class="text-center">
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
  
export default NewsLetterPage;
  

