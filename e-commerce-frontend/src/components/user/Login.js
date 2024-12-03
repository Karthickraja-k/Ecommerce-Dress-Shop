  import { Fragment, useEffect, useState } from 'react';
  import { useDispatch, useSelector } from 'react-redux';
  import { clearAuthError, login } from '../../actions/userActions';
  import MetaData from '../layouts/MetaData';
  import { toast } from 'react-toastify';
  import { Link, useLocation, useNavigate } from 'react-router-dom';
  
  export default function Login() {
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
      const dispatch = useDispatch();
      const navigate = useNavigate();
      const location = useLocation();
  
      const { loading, error, isAuthenticated } = useSelector(state => state.authState);
      const redirect = location.search ? '/' + location.search.split('=')[1] : '/';
  
      const submitHandler = (e) => {
          e.preventDefault();
          dispatch(login(email, password));
      }
  
      useEffect(() => {
          if (isAuthenticated) {
              navigate(redirect);
          }
  
          if (error) {
              toast(error, {
                  position: toast.POSITION.BOTTOM_RIGHT,
                  type: 'error',
                  onOpen: () => { dispatch(clearAuthError) }
              });
              return;
          }
      }, [error, isAuthenticated, dispatch, navigate, redirect]);
  
      return (
          <Fragment>
              <MetaData title={`Login`} />
              <div className="row justify-content-center mt-5">
                  <div className="col-12 col-md-10 col-lg-8 d-flex">
                      {/* Left side - Image */}
                      <div className="login-image-container col-6 d-none d-md-block">
                          <img 
                              src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?size=338&ext=jpg&ga=GA1.1.1413502914.1724716800&semt=ais_hybrid" 
                              alt="Login" 
                              className="img-fluid" 
                          />
                      </div>
  
                      {/* Right side - Login Form */}
                      <div className="login-form-container col-12 col-md-6 p-4 border rounded">
                          <form onSubmit={submitHandler}>
                              <h1 className="mb-4 text-center">Login</h1>
  
                              <div className="form-group">
                                  <label htmlFor="email_field">Email</label>
                                  <input
                                      type="email"
                                      id="email_field"
                                      className="form-control"
                                      value={email}
                                      onChange={e => setEmail(e.target.value)}
                                  />
                              </div>
  
                              <div className="form-group mt-3">
                                  <label htmlFor="password_field">Password</label>
                                  <input
                                      type="password"
                                      id="password_field"
                                      className="form-control"
                                      value={password}
                                      onChange={e => setPassword(e.target.value)}
                                  />
                              </div>
  
                              <Link to="/password/forgot" className="d-block text-right mt-2">Forgot Password?</Link>
  
                              <button
                                  id="login_button"
                                  type="submit"
                                  className="btn btn-primary btn-block mt-4"
                                  disabled={loading}
                              >
                                  LOGIN
                              </button>
  
                              <Link to="/register" className="d-block text-center mt-3">New User?</Link>
                          </form>
                      </div>
                  </div>
              </div>
          </Fragment>
      );
  }
  