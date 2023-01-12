import React from "react"

function CmsExcelSeo() {
    return (
        <main>
             <div class="container-fluid px-4">
                <div class="row">
                    <div class="col-12">
                        <div class="page-title-box d-sm-flex align-items-center justify-content-between">
                            <h4 class="mb-sm-0">Cms Seo Excel Upload</h4>
                            <div class="widget-right-header">
                                <button type="button" class="btn btn-secondary" onclick="window.location.href='cms-template.html'">Back</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="row">
                        <label class="form-label mb-1 col-12">Upload Excel :</label>
                        <div class="col-md-6 mb-3">
                            <input type="file" class="form-control" aria-label="Email Subject" />
                            <span class="noteAdmin">[Only Excel(.xls and .xlsx) file is allowed] Bended Arrow RightUpload
                            </span>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <button type="button" class="btn btn-dark">Upload</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
  }
  
  export default CmsExcelSeo;
  

