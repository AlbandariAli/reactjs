import MainLayout from "../Layouts/MainLayout";
import { Link } from "react-router-dom";

const CallMe = () => {
    return ( 
<>
<MainLayout>
<div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
    <h1 style={{ textAlign: 'center', color: '#333' }}>اتصل بنا</h1>
    <p style={{ textAlign: 'center', color: '#555' }}>
        نحن هنا لمساعدتك. تواصل معنا لأي استفسارات أو دعم تحتاجه.
    </p>
    <form style={{ marginTop: '20px' }}>
    <label style={{ display: 'block', marginBottom: '10px', fontWeight: 'bold' }}>الاسم:</label>
    <input
          type="text"
          placeholder="اسمك الكامل"
          style={{
            width: '100%',
            padding: '10px',
            marginBottom: '20px',
            border: '1px solid #ccc',
            borderRadius: '5px',
}}/>
    <label style={{ display: 'block', marginBottom: '10px', fontWeight: 'bold' }}>البريد الإلكتروني:</label>
    <input
          type="email"
          placeholder="example@example.com"
          style={{
            width: '100%',
            padding: '10px',
            marginBottom: '20px',
            border: '1px solid #ccc',
            borderRadius: '5px',
}}/>
    <label style={{ display: 'block', marginBottom: '10px', fontWeight: 'bold' }}>الرسالة:</label>
    <textarea
          placeholder="اكتب رسالتك هنا"
          rows="5"
          style={{
            width: '100%',
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '5px',
}}>
    </textarea>
    <button type="submit"
          style={{
            marginTop: '20px',
            padding: '10px 20px',
            backgroundColor: 'gray',
            color: 'yellow',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}>إرسال</button>
    </form>
<div style={{ marginTop: '40px', textAlign: 'center', color: '#333' }}>
    <p><strong> الهاتف:</strong> +966 555 555 555</p>
    <p><strong> البريد الإلكتروني:</strong> support@EasyFiX.com</p>
</div>
</div>
</MainLayout>
</>
);
}
 
export default CallMe;