import MainLayout from "../Layouts/MainLayout";
import { Link } from "react-router-dom";

const Aboutus = () => {
    return ( 
<>
<MainLayout>
<div className="container py-5">
    <h1 className="text-end mb-5 text-secondary">من نحن !</h1>
    <section className=" bg-light mb-5">
    <h2 className="text-end fw-semibold mb-3">نبذة عن EasyFiX</h2>
    <p className="text-muted text-end">
          EasyFiX هي منصة مبتكرة تهدف إلى تقديم حلول سهلة وسريعة لمشاكل الصيانة اليومية. 
          نسعى لتوفير خدمات موثوقة واحترافية للعملاء مع التركيز على الجودة والراحة.
    </p>
    </section>
    <section className="row mb-5">
<div className="col-md-6">
    <h3 className="text-primary-emphasis fw-bold">رؤيتنا</h3>
    <p className="text-muted">
            أن نكون الخيار الأول لخدمات الصيانة في العالم العربي من خلال تقديم 
            تجربة مميزة واحترافية تعتمد على الابتكار والتكنولوجيا.
    </p>
</div>
<div className="col-md-6">
    <h3 className="text-primary-emphasis fw-bold">رسالتنا</h3>
    <p className="text-muted">
            تمكين العملاء من الحصول على خدمات صيانة موثوقة وسهلة الوصول، 
            مع ضمان توفير حلول مميزة تضيف قيمة لحياتهم اليومية.
    </p>
</div>
    </section>
    <section className="text-center mb-5">
    <h2 className="fw-semibold mb-4 text-primary-emphasis">قيمنا</h2>
<div className="d-flex justify-content-center gap-4">
<div className="p-3 border rounded shadow-sm">
    <h5 className="fw-bold">الجودة</h5>
    <p className="text-muted">الالتزام بتقديم أفضل الخدمات بأعلى المعايير.</p>
</div>
<div className="p-3 border rounded shadow-sm">
    <h5 className="fw-bold">الثقة</h5>
    <p className="text-muted">بناء علاقات طويلة الأمد مع العملاء.</p>
</div>
<div className="p-3 border rounded shadow-sm">
    <h5 className="fw-bold">الابتكار</h5>
    <p className="text-muted">استخدام أحدث التقنيات لتحسين خدماتنا.</p>
</div>
</div>
    </section>
    <section className="text-center">
    <h2 className="fw-semibold mb-4 text-primary-emphasis">فريقنا</h2>
    <p className="text-muted mb-4"> فريقنا مكوّن من خبراء محترفين يعملون بشغف لتقديم خدمات عالية الجودة. </p>
    <img src="https://halenaha-sa.com/public/images/Group1809.svg" alt="فريق العمل" className="img-fluid rounded shadow" width={250} height={500}/>
</section>
</div>
</MainLayout>
</>
);
}
 
export default Aboutus;