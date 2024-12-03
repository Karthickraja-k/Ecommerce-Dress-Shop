import SuccessImage from '../../images/success.png'

export default function OrderSuccess() {
    return (
        <div className="row justify-content-center">
            <div className="col-6 mt-5 text-center">
                <img className="my-5 img-fluid d-block mx-auto" src={SuccessImage} alt="Order Success" width="200" height="200" />

                <h2>Your Order has been placed successfully.</h2>

                <a href="/orders">Go to Orders</a>
            </div>

        </div>
    )
}  