import React from "react"

function CmsAddEditPage() {
    return (
        <main>
           <div class="container-fluid px-4">
                <div class="row">
                    <div class="col-12">
                        <div class="page-title-box d-sm-flex align-items-center justify-content-between">
                            <h4 class="mb-sm-0">Add / Edit Cms</h4>
                            <div class="widget-right-header">
                                <button type="button" class="btn btn-secondary" onclick="window.location.href='cms-template.html'">Back</button>
                            </div>
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
                    <label class="form-label mb-1 col-12">Title</label>
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
                    <label class="form-label mb-1 col-12">Content</label>
                    <div class="col-md-6 mb-3">
                        <textarea class="form-control" aria-label="With textarea"></textarea>
                    </div>
                </div>
            </div>
            <div class="container-fluid px-4">
                <div class="row">
                    <div class="col-12 table-container">
                        <div class="page-title-box d-sm-flex align-items-center justify-content-between">
                            <h4 class="mb-sm-0">SEO Betails</h4>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <label class="form-label mb-1 col-12">Page Title</label>
                    <div class="col-md-6 mb-3">
                        <textarea class="form-control" aria-label="With textarea"></textarea>
                        <span class="noteAdmin">250 Characters Remaining of Maximum 250</span>
                    </div>
                </div>
                <div class="row">
                    <label class="form-label mb-1 col-12">Meta Description</label>
                    <div class="col-md-6 mb-3">
                        <textarea class="form-control" aria-label="With textarea"></textarea>
                        <span class="noteAdmin">250 Characters Remaining of Maximum 250</span>
                    </div>
                </div>
                <div class="row">
                    <label class="form-label mb-1 col-12">Meta Keywords </label>
                    <div class="col-md-6 mb-3">
                        <textarea class="form-control" aria-label="With textarea"></textarea>
                        <span class="noteAdmin">250 Characters Remaining of Maximum 250</span>
                    </div>
                </div>
                <div class="row">
                    <label class="form-label mb-1 col-12">Header Content</label>
                    <div class="col-md-6 mb-3">
                        <textarea class="form-control" aria-label="With textarea"></textarea>
                    </div>
                </div>
                <div class="row">
                    <label class="form-label mb-1 col-12">Footer Content </label>
                    <div class="col-md-6 mb-3">
                        <textarea class="form-control" aria-label="With textarea"></textarea>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6 mb-3">
                        <button type="button" class="btn btn-dark mr-1">Save & Continue</button>
                        <button type="button" class="btn btn-dark">Save & Close</button>
                    </div>
                </div>
            </div>
        </main>
    );
  }
  
  export default CmsAddEditPage;
  

