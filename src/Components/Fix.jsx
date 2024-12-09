import { useEffect, useState } from "react";
import MainLayout from "../Layouts/MainLayout";
import { Link } from "react-router-dom";
const Fix = () => {

    const maintenanceServices = [
        {
            id: 1,
            title: "صيانة الهواتف الذكية",
            description: "إصلاح الشاشة، البطارية، والأعطال البرمجية.",
            priceRange: "50-300",
            contact: "0501234567",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZpzOc1OEQABYPYC_o-f2MOA5T_EGyqXqaVg&s"
        },
        {
            id: 2,
            title: "صيانة أجهزة اللابتوب",
            description: "تنظيف داخلي، تغيير البطارية، إصلاح الشاشة أو لوحة المفاتيح.",
            priceRange: "100-500",
            contact: "0507654321",
            image: "https://www.elsupplier.com/_next/image?url=https%3A%2F%2Fportal.elsupplier.com%2Fbackend%2Fpublic%2Fstorage%2Fproducts%2Fimages%2F59891211075893.png&w=640&q=50"
        },
    ]
    return ( 
        <>
        <MainLayout>
        <div className="container py-5">
        <h2 className="text-center mb-4">قائمة المنتجات</h2>
        <div className="row">
          {maintenanceServices.map((product) => (
            <div key={product.id} className="col-md-3">
              <div className="card shadow-sm mb-4 ">
                <img src={product.image} alt={product.title} className="card-img-top" style={{ height: "120px", objectFit: "contain" }}/>
                <div className="card-body text-center">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">{product.description}</p>
                  <span className="badge bg-warning mb-3">{product.priceRange}</span>
                  <div>
                  <Link to={`/details2?id=${product.id}`}>
                      <button className="btn btn-dark text-warning">معاينة التفاصيل</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
        </MainLayout>
        </>
     );
}
 
export default Fix;