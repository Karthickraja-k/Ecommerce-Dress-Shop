import { Fragment, useEffect} from 'react'
import MetaData from '../layouts/MetaData';
import {MDBDataTable} from 'mdbreact'
import { useDispatch, useSelector } from 'react-redux';
import { userOrders as userOrdersAction, cancelOrder } from '../../actions/orderActions';
import { Link } from 'react-router-dom';

export default function UserOrders () {
    const { userOrders = []} = useSelector(state => state.orderState)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userOrdersAction)
    },[dispatch])

    const handleCancelOrder = (orderId) => {
        // Dispatch an action to cancel the order
        dispatch(cancelOrder(orderId));
      };

    const setOrders = () => {
        const data = {
            columns: [
                {
                    label: "Order ID",
                    field: 'id',
                    sort: "asc"
                },
                {
                    label: "Number of Items",
                    field: 'numOfItems',
                    sort: "asc"
                },
                {
                    label: "Amount",
                    field: 'amount',
                    sort: "asc"
                },
                {
                    label: 'Size',
                    field: 'size',
                    sort: 'asc'
                },
                {
                    label: "Status",
                    field: 'status',
                    sort: "asc"
                },
                {
                    label: "Actions",
                    field: 'actions',
                    sort: "asc"
                }
            ],
            rows:[]
        }

        userOrders.forEach(userOrder => {

            const sizes = userOrder.orderItems.map(item => item.size).join(', ');

            data.rows.push({
                id:  userOrder._id,
                numOfItems: userOrder.orderItems.length,
                amount: `₹${userOrder.totalPrice}`,
                size: sizes,
                status: userOrder.orderStatus && userOrder.orderStatus.includes('Delivered') ?
                (<p style={{color: 'green'}}> {userOrder.orderStatus} </p>):
                (<p style={{color: 'red'}}> {userOrder.orderStatus} </p>),
                actions: (
                    <>
                      <Link to={`/order/${userOrder._id}`} className="btn btn-primary">
                        <i className='fa fa-eye'></i>
                      </Link>

                    {' '}
                    

                      {userOrder.cancellable ? (
                        <button
                          className="btn btn-danger"
                          onClick={() => handleCancelOrder(userOrder._id)}
                        >
                          Cancel Order
                        </button>
                      ) : (
                        <span style={{ color: 'gray' }}>Not cancellable</span>
                      )}
                    </>
                
                )
            })
        })
        return  data;
    }


    return (
        <Fragment>
            <MetaData title="My Orders" />
            <h1 className='mt-5'>My Orders</h1> 
            <MDBDataTable
                className='px-3'
                bordered
                striped
                hover
                data={setOrders()}
            />
        </Fragment>
    )
}

    /* import { Fragment, useEffect } from 'react';
import MetaData from '../layouts/MetaData';
import { useDispatch, useSelector } from 'react-redux';
import { userOrders as userOrdersAction, cancelOrder } from '../../actions/orderActions';
import { Link } from 'react-router-dom';

export default function UserOrders() {
    const { userOrders = [] } = useSelector(state => state.orderState);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userOrdersAction());
    }, [dispatch]);

    const handleCancelOrder = (orderId) => {
        dispatch(cancelOrder(orderId));
    };

    return (
        <Fragment>
            <MetaData title="My Orders" />
            <h1 className="mt-5">My Orders</h1>
            
            <div className="table-responsive">
                <table className="table table-bordered table-hover">
                    <thead className="thead-light">
                        <tr>
                            <th>Order ID</th>
                            <th>Number of Items</th>
                            <th>Amount</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userOrders.map(userOrder => (
                            <tr key={userOrder._id}>
                                <td>{userOrder._id}</td>
                                <td>{userOrder.orderItems.length}</td>
                                <td>₹{userOrder.totalPrice}</td>
                                <td>
                                    {userOrder.orderStatus && userOrder.orderStatus.includes('Delivered') ? (
                                        <p style={{ color: 'green' }}>{userOrder.orderStatus}</p>
                                    ) : (
                                        <p style={{ color: 'red' }}>{userOrder.orderStatus}</p>
                                    )}
                                </td>
                                <td>
                                    <Link to={`/order/${userOrder._id}`} className="btn btn-primary">
                                        <i className="fa fa-eye"></i>
                                    </Link>
                                    {' '}
                                    {userOrder.cancellable ? (
                                        <button
                                            className="btn btn-danger"
                                            onClick={() => handleCancelOrder(userOrder._id)}
                                        >
                                            Cancel Order
                                        </button>
                                    ) : (
                                        <span style={{ color: 'gray' }}>Not cancellable</span>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Fragment>
    );
} */

    