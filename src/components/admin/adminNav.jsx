import React from "react"

function AdminNav() {
    return (
        <nav class="sb-topnav navbar navbar-expand navbar-dark bg-dark">
        <a class="navbar-brand ps-3" href="index.html">RealState</a>
        <button class="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle">
            <img class="hideMenu" src="images/menu.png" />
            <img class="showMenu" src="images/arrow-right.png" />
        </button>
        <div>
            <ul class="navbar-nav profileNav">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle"><i class="fas fa-user fa-fw"></i>Ravi Partap Singh</a>
                    <ul class="dropdown-menu dropdown-menu-end">
                        <li><a class="dropdown-item" href="#!">profile</a></li>
                        <li><hr class="dropdown-divider" /></li>
                        <li><a class="dropdown-item" href="#!">Logout</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    </nav>
    );
  }
  
  export default AdminNav;
  