import './button-styles.scss'
// export const BUTTON_TYPE_CLASSES = {
//     addCard: 'add-card',
//     completePayment: 'complete-payment',
//     customButton: 'custom-button'
// }

// const getButton = (buttonType) => (
//     {
//         [BUTTON_TYPE_CLASSES.addCard]: BUTTON_TYPE_CLASSES.addCard,
//         [BUTTON_TYPE_CLASSES.completePayment]: BUTTON_TYPE_CLASSES.completePayment,
//         [BUTTON_TYPE_CLASSES.customButton]: BUTTON_TYPE_CLASSES.customButton
//     }[buttonType]
// )




const CustomButton = ({children, addCard, completePayment,  ...otherProps}) => {
    return ( 
        <button className={`${ addCard? 'add-card' : ''}  ${completePayment ? "complete-payment" : ""} custom-button `} {...otherProps}>
            {children}
        </button>
     );
}
 
export default CustomButton;