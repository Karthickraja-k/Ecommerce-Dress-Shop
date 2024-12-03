/* import { Link } from "react-router-dom";

export default function CheckoutSteps({shipping, confirmOrder, payment}) {
    return (

        <div className="checkout-progress d-flex justify-content-center mt-5">
            {
            shipping ?
            <Link to="/shipping">
                <div className="triangle2-active"></div>
                <div className="step active-step">Shipping Info</div>
                <div className="triangle-active"></div>
            </Link>:
             <Link to="/shipping">
                <div className="triangle2-incomplete"></div>
                <div className="step incomplete">Shipping Info</div>
                <div className="triangle-incomplete"></div>
             </Link>
            }

            { confirmOrder ?
            <Link to="/order/confirm">
                <div className="triangle2-active"></div>
                <div className="step active-step">Confirm Order</div>
                <div className="triangle-active"></div>
            </Link>:
             <Link to="/order/confirm">
                <div className="triangle2-incomplete"></div>
                <div className="step incomplete">Confirm Order</div>
                <div className="triangle-incomplete"></div>
             </Link>
            }

            
            { payment ?
            <Link to="/payment">
                <div className="triangle2-active"></div>
                <div className="step active-step">Payment</div>
                <div className="triangle-active"></div>
            </Link>:
             <Link to="/payment">
                <div className="triangle2-incomplete"></div>
                <div className="step incomplete">Payment</div>
                <div className="triangle-incomplete"></div>
             </Link>
            }
    
      </div>
    )
} */

    import { Link } from "react-router-dom";
    import './CheckoutSteps.css'; // Make sure to create this CSS file for the styles
    
    export default function CheckoutSteps({ shipping, confirmOrder, payment }) {
        return (
            <div className="checkout-progress d-flex justify-content-center mt-5">
                <div className={`step-container ${shipping ? 'active' : 'inactive'}`}>
                    <Link to="/shipping" className="step-link">
                        <div className={`step-circle ${shipping ? 'active' : 'inactive'}`}></div>
                        <div className={`step-label ${shipping ? 'active' : 'inactive'}`}>Shipping Info</div>
                    </Link>
                </div>
    
                <div className={`step-container ${confirmOrder ? 'active' : 'inactive'}`}>
                    <Link to="/order/confirm" className="step-link">
                        <div className={`step-circle ${confirmOrder ? 'active' : 'inactive'}`}></div>
                        <div className={`step-label ${confirmOrder ? 'active' : 'inactive'}`}>Confirm Order</div>
                    </Link>
                </div>
    
                <div className={`step-container ${payment ? 'active' : 'inactive'}`}>
                    <Link to="/payment" className="step-link">
                        <div className={`step-circle ${payment ? 'active' : 'inactive'}`}></div>
                        <div className={`step-label ${payment ? 'active' : 'inactive'}`}>Payment</div>
                    </Link>
                </div>
            </div>
        );
    }
    