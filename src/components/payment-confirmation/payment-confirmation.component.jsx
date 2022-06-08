import './payment-confirmation.styles.scss'
import CustomButton from '../button/button-component';
import { paymentAmount } from '../payment-brief/payment-brief.component';

const PaymentConfirmation = () => {
   
    return ( 
        <div>
            <div className="confirmation-content">
                <div className="row">
                    <div className="left col-md-6 col-12">
                    <CustomButton completePayment> Complete payment </CustomButton>
                    </div>
                    <div className="right col-md-6 col-12">
                    {paymentAmount.map(({Subtotal, EstimatedTax, PromotionCode}, index) =>{
                     const totalPayment = Subtotal + EstimatedTax + PromotionCode;
                    return(
                      <div key={index}>
                        <p>TOTAL: ₦{totalPayment} </p>
                      </div>  
                    )
                })}

                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default PaymentConfirmation;