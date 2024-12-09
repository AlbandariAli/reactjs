import { useLocation, useNavigate } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import { useDispatch } from "react-redux";

const Details2 = () => {
    const maintenanceServices = [
        {
            id: 1,
            title: "صيانة الهواتف الذكية",
            description: "إصلاح الشاشة، البطارية، والأعطال البرمجية.",
            priceRange: "50-300",
            contact: "0501234567",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZpzOc1OEQABYPYC_o-f2MOA5T_EGyqXqaVg&s",
        },
        {
            id: 2,
            title: "صيانة أجهزة اللابتوب",
            description: "تنظيف داخلي، تغيير البطارية، إصلاح الشاشة أو لوحة المفاتيح.",
            priceRange: "100-500",
            contact: "0507654321",
            image: "https://www.elsupplier.com/_next/image?url=https%3A%2F%2Fportal.elsupplier.com%2Fbackend%2Fpublic%2Fstorage%2Fproducts%2Fimages%2F59891211075893.png&w=640&q=50",
        },
    ];

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const id = parseInt(queryParams.get("id"), 10);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const product = maintenanceServices.find((item) => item.id === id);

    if (!product) {
        return (
            <MainLayout>
                <div className="container text-center py-5">
                    <h3>عذرًا، لم يتم العثور على المنتج المطلوب.</h3>
                </div>
            </MainLayout>
        );
    }

    return (
        <MainLayout>
            <div className="container py-5">
                <div className="row">
                    <div className="col">
                        <div className="card mt-2">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-4">
                                        <img
                                            src={product.image}
                                            alt={product.title}
                                            className="img-fluid rounded"
                                        />
                                    </div>
                                    <div className="col-md-8 text-end">
                                        <h2>{product.title}</h2>
                                        <p>{product.description}</p>
                                        <span className="badge bg-warning">
                                            {product.priceRange} ريال
                                        </span>
                                        <div className="mt-5">
                                            <button
                                                className="btn btn-secondary me-2"
                                                onClick={() =>
                                                    dispatch({ type: "INCREMENT", payload: product })
                                                }
                                            >
                                                إضافة إلى السلة
                                            </button>
                                            <button
                                                className="btn btn-dark text-white"
                                                onClick={() =>
                                                    navigate("/checkout", {
                                                        state: { product },
                                                    })
                                                }
                                            >
                                                الذهاب للدفع
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default Details2;
