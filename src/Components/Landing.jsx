import React, { useState } from 'react'
import MainLayout from '../Layouts/MainLayout'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
const Landing = () => {
  
    return ( 
<>
<MainLayout>
  <div className="container py-5">
    <div className="row text-center mb-5">
      <div className="col-mt-5">
        <h1 className="text-white fw-bold">
          <span className="rounded bg-dark text-warning">أهلاً بكم في موقعنا ..</span>
        </h1>
        <div className="col-mt-5">
        <h3 className="text-end ">موقعنا يساعدك في أي مشكلة تواجهك.</h3>
        <h3 className="text-end">لا تجينا... احنا بنجيك!</h3>
      </div>
    </div>
    </div>
    <div className="row g-4 d-flex justify-content-center">
      <div className="col-lg-4 col-md-6">
        <Link to="/fix" className="text-decoration-none">
          <div className="card border-0 shadow-lg h-100 rounded-3 overflow-hidden">
            <div className="card-body text-center bg-secondary text-white">
              <i className="bi bi-phone fs-1 mb-3"></i>
              <h5 className="fw-bold">صيانة الهواتف</h5>
              <p className="text-light">خدمات صيانة الهواتف السريعة والفعالة.</p>
            </div>
            <div className="card-footer text-center bg-dark">
              <button className="btn btn-outline-light">اكتشف المزيد</button>
            </div>
          </div>
        </Link>
      </div>

      <div className="col-lg-4 col-md-6">
        <Link to="/list" className="text-decoration-none">
          <div className="card border-0 shadow-lg h-100 rounded-3 overflow-hidden">
            <div className="card-body text-center bg-secondary text-white">
              <i className="bi bi-laptop fs-1 mb-3"></i>
              <h5 className="fw-bold">منتجات متنوعة</h5>
              <p className="text-light">تصفح مجموعة متنوعة من المنتجات.</p>
            </div>
            <div className="card-footer text-center bg-dark">
              <button className="btn btn-outline-light">اكتشف المزيد</button>
            </div>
          </div>
        </Link>
      </div>
    </div>
  </div>
</MainLayout>

</>
);
}
 
export default Landing;