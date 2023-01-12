import React from "react"

function NewsLetterPage() {
    return (
        <main>
            <div class="container-fluid px-4">
                <div class="row">
                    <div class="col-12">
                        <div class="page-title-box d-sm-flex align-items-center justify-content-between">
                            <h4 class="mb-sm-0">Email Template</h4>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <label class="form-label mb-1 col-12">Website</label>
                    <div class="col-md-6 mb-3">
                        <select class="form-select" aria-label="Default select">
                            <option selected>-Select Site-</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                </div>
                <div class="row">
                    <label class="form-label mb-1 col-12">Select Email Type</label>
                    <div class="col-md-6 mb-3">
                        <select class="form-select" aria-label="Default select">
                            <option selected>-Select Type-</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                </div>
                <div class="row">
                    <label class="form-label mb-1 col-12">Email Subject</label>
                    <div class="col-md-6 mb-3">
                        <input type="text" class="form-control" aria-label="Email Subject" />
                    </div>
                </div>
                <div class="row">
                    <label class="form-label mb-1 col-12">Email From Address</label>
                    <div class="col-md-6 mb-3">
                        <input type="text" class="form-control" aria-label="Email Subject" />
                    </div>
                </div>
                <div class="row">
                    <label class="form-label mb-1 col-12">Email Header</label>
                    <div class="col-md-6 mb-3">
                        <textarea class="form-control" aria-label="With textarea"></textarea>
                    </div>
                </div>
                <div class="row">
                    <label class="form-label mb-1 col-12">Email Footer</label>
                    <div class="col-md-6 mb-3">
                        <textarea class="form-control" aria-label="With textarea"></textarea>
                    </div>
                </div>
                <div class="row">
                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <button type="button" class="btn btn-dark">Update</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
  }
  
export default NewsLetterPage;
  

