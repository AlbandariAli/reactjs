import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const MainLayout = ({children}) => {
  const count=useSelector(state=>state.counter)
  return ( 
<>

<header>
<nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary">
<div className="container-fluid">
<div className="navbar-brand me-auto">
    <Link className="nav-link text-warning fw-bold" to="/">EasyFiX</Link>
</div>
   <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <i className="fas fa-bars"></i>
    </button>
<div className="collapse navbar-collapse justify-content-center" id="navbarTogglerDemo02">
    <ul className="navbar-nav mb-2 mb-lg-0 d-flex gap-4">
    <li className="nav-item">
    <Link className="nav-link text-dark" to="/">الرئيسية</Link>
    </li>
    <li className="nav-item">
    <Link className="nav-link text-dark" to="/aboutus">من نحن</Link>
    </li>
    <li className="nav-item">
    <Link className="nav-link text-dark" to="/callme">اتصل بنا</Link>
    </li>
</ul>
</div>
<div className="nav-item position-relative ms-auto"> 
    <a href="/invoice" id="navbarDropdownMenuLink" role="button" className="link-secondary me-3 text-decoration-none" aria-expanded="false">
    <i className="bi bi-bag fs-5"></i>
    {count > 0 && (
    <span className="badge rounded-pill bg-warning position-absolute top-0 start-100 translate-middle" style={{ fontSize: "0.75rem", padding: "0.4em 0.5em" }}>{count}</span>
)}
</a>
</div>
</div> 
</nav>
</header>

<main>
    {children}
</main>

<footer className="text-center bg-body-secondary">
<div className="container pt-4">
    <section className="mb-4">
    <a className="btn btn-link btn-floating btn-lg text-body m-1" href="#!" role="button">
    <i className="fab fa-twitter"></i>
    </a>
    <a className="btn btn-link btn-floating btn-lg text-body m-1" href="#!" role="button">
    <i className="fab fa-google"></i>
    </a>
    <a className="btn btn-link btn-floating btn-lg text-body m-1" href="#!" role="button">
    <i className="fab fa-instagram"></i>
    </a>
    <a className="btn btn-link btn-floating btn-lg text-body m-1" href="#!" role="button">
    <i className="fab fa-linkedin"></i>
    </a>
    <a className="btn btn-link btn-floating btn-lg text-body m-1" href="#!" role="button">
    <i className="fab fa-github"></i>
    </a>
    </section>
</div>
<div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2024 Copyright{' '}
</div>
</footer>
</>
);
}
 
export default MainLayout;