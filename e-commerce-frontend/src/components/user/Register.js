import {useEffect, useState} from 'react';
import {useDispatch, useSelector } from 'react-redux'
import { register, clearAuthError } from '../../actions/userActions'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export default function Register() {
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        password: ""
    });
    const [avatar, setAvatar] = useState("");
    const [avatarPreview, setAvatarPreview] = useState("/images/default_avatar.png");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loading, error, isAuthenticated } = useSelector(state => state.authState)

    const onChange = (e) => {
        if(e.target.name === 'avatar') {
           const reader = new FileReader();
           reader.onload = () => {
                if(reader.readyState === 2) {
                    setAvatarPreview(reader.result);
                    setAvatar(e.target.files[0])
                }
           }


           reader.readAsDataURL(e.target.files[0])
        }else{
            setUserData({...userData, [e.target.name]:e.target.value })
        }
    }

    const submitHandler = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', userData.name)
        formData.append('email', userData.email)
        formData.append('password', userData.password)
        formData.append('avatar', avatar);
        dispatch(register(formData))
    }

    useEffect(()=>{
        if(isAuthenticated) {
            navigate('/');
            return
        }
        if(error)  {
            toast(error, {
                position: toast.POSITION.BOTTOM_RIGHT,
                type: 'error',
                onOpen: ()=> { dispatch(clearAuthError) }
            })
            return
        }
    },[error, isAuthenticated, dispatch, navigate])

    
        return (
            <div className="row justify-content-center mt-5">
              <div className="col-12 col-md-8 col-lg-6 d-flex">

              <div className="login-image-container col-6 d-none d-md-block">
                          <img 
                              src="https://img.freepik.com/premium-vector/illustration-vector-graphic-cartoon-character-online-registration_516790-1807.jpg" 
                              alt="Login" 
                              className="img-fluid" 
                          />
                      </div>

                <form onSubmit={submitHandler} className="p-4 border rounded">
                  <h1 className="mb-4 text-center">Register</h1>
          
                  <div className="form-group">
                    <label htmlFor="name_field">Name</label>
                    <input 
                      name="name" 
                      onChange={onChange} 
                      type="text" 
                      id="name_field" 
                      className="form-control" 
                    />
                  </div>
          
                  <div className="form-group">
                    <label htmlFor="email_field">Email</label>
                    <input
                      type="email"
                      id="email_field"
                      name="email"
                      onChange={onChange}
                      className="form-control"
                    />
                  </div>
          
                  <div className="form-group">
                    <label htmlFor="password_field">Password</label>
                    <input
                      name="password"
                      onChange={onChange}
                      type="password"
                      id="password_field"
                      className="form-control"
                    />
                  </div>
          
                  <div className="form-group">
                    <label htmlFor="avatar_upload">Profile Image</label>
                    <div className="d-flex align-items-center">
                      <figure className="avatar mr-3">
                        <img
                          src={avatarPreview}
                          className="rounded-circle"
                          alt="Avatar"
                        />
                      </figure>
                      <div className="custom-file">
                        <input
                          type="file"
                          name="avatar"
                          onChange={onChange}
                          className="custom-file-input"
                          id="customFile"
                        />
                        <label className="custom-file-label" htmlFor="customFile">
                          Choose file
                        </label>
                      </div>
                    </div>
                  </div>
          
                  <button
                    id="register_button"
                    type="submit"
                    className="btn btn-primary btn-block mt-4"
                    disabled={loading}
                  >
                    REGISTER
                  </button>
                </form>
              </div>
            </div>
          );         
          
}