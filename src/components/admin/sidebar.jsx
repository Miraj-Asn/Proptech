import React from "react"

function Sidebar() {
    return (
        <div id="layoutSidenav_nav">
        <nav class="sb-sidenav accordion sb-sidenav-light" id="sidenavAccordion">
            <div class="sb-sidenav-menu">
                <div class="nav">
                    <div class="accordion" id="accordionExample">
                        <div class="accordion-item">
                            <a class="accordion-button removArrow collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                              Menu 1
                            </a>
                        </div>
                        <div class="accordion-item">
                            <a class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapsetwo" aria-expanded="true" aria-controls="collapseOne">
                              Contents
                            </a>
                          <div id="collapsetwo" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <ul>
                                <li>
                                    <a class="nav-link" href="email-template.html">Email Template</a>
                                </li>
                                <li>
                                    <a class="nav-link" href="news-letter-template.html">NewsLetter Subscribe</a>
                                </li>
                                <li>
                                    <a class="nav-link" href="cms-template.html">CMS</a>
                                </li>
                                <li>
                                    <a class="nav-link active" href="blog-template.html">Blog</a>
                                </li>
                            </ul>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </div>
    );
  }
  
  export default Sidebar;
  