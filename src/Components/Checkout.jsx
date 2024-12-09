import { useLocation, useNavigate } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state?.product;

  if (!product) {
    return (
      <MainLayout>
        <div className="container py-5">
          <h2 className="text-center">لا يوجد منتج للدفع</h2>
        </div>
      </MainLayout>
    );
  }
  const handleCompletePayment = () => {
    navigate("/invoice", { state: { product } });
  };
  return (
    <MainLayout>
      <div className="container py-5">
        <h2 className="text-center mb-4">الدفع</h2>
        <div className="card shadow-sm mx-auto" style={{ maxWidth: "600px" }}>
          <img
            src={product.image}
            alt={product.name}
            className="card-img-top"
            style={{ height: "250px", objectFit: "contain" }}
          />
          <div className="card-body text-center">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">{product.description}</p>
            <span className="badge bg-warning mb-3">{product.price}</span>
            <button className="btn btn-success"onClick={handleCompletePayment}>إتمام الدفع</button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Checkout;
