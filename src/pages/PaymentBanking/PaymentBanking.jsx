import { useSelector } from "react-redux";

const PaymentBanking = () => {
    const orderId = useSelector(state => state.paymenBanking.orderId);

    return (
        <div className="px-[20%] py-[5%]">
            <div className="text-3xl mb-2">
                <span>Mã hóa đơn của quý khách là <strong>{orderId}</strong>.</span>
            </div>
            <div className="mb-2"> 
                <span>Vui lòng chuyển khoản vào tài khoản bên dưới để được kích hoạt khóa học</span>
            </div>
            <div>
                <span>Ngân hàng: SACOMBANK</span>
            </div>
            <div>
                <span>Tài khoản: 040081042898</span>
            </div>
            <div className="mb-2">
                <span>SĐT: 0865703869</span>
            </div>
            <div>
                <span>Nội dung chuyển khoản: <strong>KICHHOATKHOAHOC_{orderId}</strong> .</span>
            </div>
        </div>
    )
}

export default PaymentBanking;