import { useState } from "react"
import './payment-details.styles.scss'
import chip from "../../assets/chip.png"
import CustomButton from "../button/button-component"

const defaultPaymentDetails = {
    cardNumber: '',
    expirationDate: '',
    securityCode: '',
    postalCode: '',
}
const PaymentDetails = () => {

    const [paymentDetails, setPaymentDetails] = useState(defaultPaymentDetails)
    const [checked, setChecked] = useState(false)
    const{cardNumber, expirationDate, securityCode, postalCode} = paymentDetails

    const handleOnCheck = (e) => {
        setChecked(e.target.checked)
    }

    const handleOnChange = (e) => {
        const {name, value} = e.target 
        setPaymentDetails({...defaultPaymentDetails, [name]: value})
    
    }
    return(
        <div className="payment-info-container">
            
            <div className="row" >
                <div className="left col-md-6 col-12">
                    <div className="payment-card">
                        <div className="card-content">
                            <i className="fas fa-wifi"></i>
                            <div className="card-details">
                                <p>CARD NUMBER</p>
                                <p id='card-number'>4324 5433 9382 1030</p>
                                <img src={chip} alt="" srcSet="" />
                                <p id='expiration-date'>EXPIRATION DATE</p>
                                <p>03 / 24</p>
                                <p>John Doe</p>
                            </div>
                            <div className="card-logo">
                                <h1>
                                <i className="mastercard-icon"></i>
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            <div className="right col-md-6 col-12" >
                <div className="form-input">
                    <form action="#">
                        <div className="row">
                            <div className="col-md-6">
                                <p>Credit Card Number</p>
                                <input
                                    className="card-input"
                                    type='tel'
                                    value={cardNumber}
                                    name='cardNumber'
                                    onChange={handleOnChange}
                                    placeholder='4324 5433 9382 1030'
                                />
                            </div>
                            <div className="col-md-6">
                                <p>Expiration Date</p>
                                <input
                                    className="card-input"
                                    type='tel'
                                    value={expirationDate}
                                    name='expirationDate'
                                    onChange={handleOnChange}
                                    placeholder='03/24'
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <p>Security code</p>
                                <input
                                    className="card-input"
                                    type='tel'
                                    value={securityCode}
                                    name='securityCode'
                                    onChange={handleOnChange}
                                    placeholder='420'
                                />
                            </div>
                            <div className="col-md-6">
                                <p>Postal code</p>
                                <input
                                    className="card-input"
                                    type='tel'
                                    value={postalCode}
                                    name='postalCode'
                                    onChange={handleOnChange}
                                    placeholder='10119'
                                />
                            </div>
                        </div>
                        <div className="check-box">
                            <input
                                id="card-consent-check"
                                name='isChecked'
                                type='checkbox'
                                checked={checked}
                                onChange={handleOnCheck}
                            />
                            <label htmlFor="card-consent-check" className="no-select"> Use this card for next time purchase</label>
                        </div>
                        <CustomButton addCard>Add Card</CustomButton>
                    </form>
                </div>
            </div>
            </div>

           

            
        </div>
        
    )

}

export default PaymentDetails 