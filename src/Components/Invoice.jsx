import MainLayout from "../Layouts/MainLayout";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from 'react';

const Invoice = () => {
    const location=useLocation();
    const product = location.state?.product;
    return ( 
    <>
  <MainLayout>
      <div className="container py-5">
        <h2 className="text-center mb-4">الفاتورة النهائية</h2>
        <div className="card shadow-sm mx-auto" style={{ maxWidth: "800px" }}>
          <div className="card-body">
            <h5 className="card-title">تفاصيل الفاتورة</h5>
            <ul className="list-unstyled">
              <li>
                <strong>اسم المنتج:</strong> {product.title}
              </li>
              <li>
                <strong>الوصف:</strong> {product.description}
              </li>
              <li>
                <strong>السعر:</strong> {product.priceRange}
              </li>
            </ul>
            <div className="text-center mt-4">
              <button
                className="btn btn-dark text-warning"
                onClick={() => alert("شكراً لتعاملكم معنا!")}
              >
                إنهاء
              </button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
    </> );
}
 
export default Invoice;