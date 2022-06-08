import PaymentBrief from "../../components/payment-brief/payment-brief.component"
import PaymentConfirmation from "../../components/payment-confirmation/payment-confirmation.component"
import PaymentDetails from "../../components/payment-details/payment-details.component"
import './payment-page.styles.scss'
import  VisaLogo from "../../assets/VisaLogo.svg?component"
import DiscoverLogo from "../../assets/DiscoverCardLogo.svg?component"
import MastercardLogo from "../../assets/mastercard.svg?component"
import PaypalLogo from "../../assets/PayPal.svg?component"

const PaymentPage = () => {
    return (
        <div className="payment-page">
            <div className="line"></div>
            <div className="payment-page-row">
                <div className="text">
                <h4>Payment Information</h4>
                <p>Choose your method of payment</p>
                </div>
                <div className="payment-method-icon">
                    <VisaLogo/>
                    <DiscoverLogo/>
                    <MastercardLogo/>
                    <PaypalLogo/>
                </div>
            </div>
            <PaymentDetails/>
            <div className="line"></div>
            <PaymentBrief/>
            <div className="line"></div>
            <PaymentConfirmation/>
        </div>
    )
}

export default PaymentPage