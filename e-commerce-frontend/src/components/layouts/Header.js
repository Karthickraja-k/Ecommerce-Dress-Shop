import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Search from './Search';
import { useDispatch, useSelector } from 'react-redux';
import { Dropdown, Image } from 'react-bootstrap';
import { logout } from '../../actions/userActions';
import { FaShoppingCart } from 'react-icons/fa';
import LogoImage from '../../images/logo1.jpg';
import  Whatsapp  from '../../images/download.jpg';

export default function Header() {
  const { isAuthenticated, user } = useSelector((state) => state.authState);
  const { items: cartItems } = useSelector((state) => state.cartState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //console.log(cartItems)

  const logoutHandler = () => {
    dispatch(logout);
  };

  if (!isAuthenticated) {
    return null;
  }

  return (
    <nav className="navbar row">
      <div className="col-12 col-md-1">
        <div className="navbar-brand">
          <Link to="/" style={{ textDecoration: 'none' }}>
            <img src={LogoImage} alt='' style={{ paddingLeft: '40px', fontSize: '25px', height: '70px', width: '200px' }} />
          </Link>
        </div>
      </div>

      <div className="col-12 col-md-6 mt-2 mt-md-0">
        <Search />
      </div>

      <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
        <Dropdown className="d-inline">
          <Dropdown.Toggle variant="default text-white pr-5" id="dropdown-basic">
            <figure className="avatar avatar-nav">
              <Image width="50px" src={user.avatar ?? './images/default_avatar.png'} />
            </figure>
            <span>{user.name}</span>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {user.role === 'admin' && <Dropdown.Item onClick={() => navigate('admin/dashboard')} className="text-dark">Dashboard</Dropdown.Item>}
            {user.role === 'user' && <Dropdown.Item onClick={() => navigate('user/filtered-products')} className="text-dark">Products Filter</Dropdown.Item>}
            {user.role === 'user' && <Dropdown.Item onClick={() => navigate('wishlist')} className="text-dark">My WishList</Dropdown.Item>}
            <Dropdown.Item onClick={() => navigate('/myprofile')} className="text-dark">Profile</Dropdown.Item>
            <Dropdown.Item onClick={() => navigate('/orders')} className="text-dark">Orders</Dropdown.Item>
            <Dropdown.Item onClick={logoutHandler} className="text-danger">Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Link to="/cart">
          <span id="cart" className="ml-3" style={{ color: 'white' }}>
            <FaShoppingCart size={24} />
          </span>
        </Link>
        <span className="ml-1" id="cart_count">
          {cartItems.length}
        </span>
      </div>
      <div class="whatsapp-icon">
    <a href="https://wa.me/7010778478" target="_blank">
      <img src={Whatsapp} alt="WhatsApp" width="60" height="60" />
    </a>
  </div> 
    </nav>
  );
}
