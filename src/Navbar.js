import React from 'react';
import {Link} from 'react-router-dom';
export default function Navbar(){
    return(  

<nav className="navbar navbar-expand-lg bg-success">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img className="rounded-circle" src="https://t3.ftcdn.net/jpg/05/03/08/02/360_F_503080266_bGEkFXiDz8Z97cgHa3fmjCbuFCi4yICt.jpg"  alt=""height="75px"/>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active fs-5 " aria-current="page" to='/'>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fs-5" to='features'>Features</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fs-5" to='product'>Product</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fs-5" to='contact'>Contact</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fs-5" to='services'>Services</Link>
              </li>
            </ul>
         
          </div>
        </div>
          </nav>
       
     
     
    )
}