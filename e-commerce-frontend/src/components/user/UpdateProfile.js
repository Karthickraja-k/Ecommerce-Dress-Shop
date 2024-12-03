// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux"
// import { toast } from "react-toastify";
// import { updateProfile, clearAuthError } from "../../actions/userActions";
// import { clearUpdateProfile } from "../../slices/authSlice";
// import './UpdateProfile.css';

// export default function UpdateProfile () {
//     const {  error, user, isUpdated } = useSelector(state => state.authState);
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [avatar, setAvatar] = useState("");
//     const [avatarPreview, setAvatarPreview] = useState("/images/default_avatar.png");
//     const dispatch = useDispatch();

//     const onChangeAvatar = (e) => {
//         const reader = new FileReader();
//         reader.onload = () => {
//              if(reader.readyState === 2) {
//                  setAvatarPreview(reader.result);
//                  setAvatar(e.target.files[0])
//              }
//         }


//         reader.readAsDataURL(e.target.files[0])
//     }

//     const submitHandler  = (e) =>{
//         e.preventDefault();
//         const formData = new FormData();
//         formData.append('name', name)
//         formData.append('email', email)
//         formData.append('avatar', avatar);
//         dispatch(updateProfile(formData))
//     }

//     useEffect(() => {
//         if(user) {
//             setName(user.name);
//             setEmail(user.email);
//             if(user.avatar) {
//                 setAvatarPreview(user.avatar)
//             }
//         }

//         if(isUpdated) {
//             toast('Profile updated successfully',{
//                 type: 'success',
//                 position: toast.POSITION.BOTTOM_RIGHT,
//                 onOpen: () => dispatch(clearUpdateProfile())
//             })
//             return;
//         }

//         if(error)  {
//             toast(error, {
//                 position: toast.POSITION.BOTTOM_RIGHT,
//                 type: 'error',
//                 onOpen: ()=> { dispatch(clearAuthError) }
//             })
//             return
//         }
//     },[user, isUpdated, error, dispatch])
    

//     return (
//         <div className="update-profile-container">
//             <form onSubmit={submitHandler} className="update-profile-form" encType='multipart/form-data'>
//                 <h1 className="form-title">Update Profile</h1>

//                 <div className="form-group">
//                     <label htmlFor="name_field">Name</label>
//                     <input 
//                         type="text" 
//                         id="name_field" 
//                         className="form-input"
//                         name='name'
//                         value={name}
//                         onChange={e => setName(e.target.value)}
//                     />
//                 </div>

//                 <div className="form-group">
//                     <label htmlFor="email_field">Email</label>
//                     <input
//                         type="email"
//                         id="email_field"
//                         className="form-input"
//                         name='email'
//                         value={email}
//                         onChange={e => setEmail(e.target.value)}
//                     />
//                 </div>

//                 <div className="form-group avatar-upload">
//                     <label htmlFor="avatar_upload">Pofile Image</label>
//                     <div className="avatar-preview-container">
//                         <img
//                             src={avatarPreview}
//                             className='avatar-preview'
//                             alt='Avatar Preview'
//                         />
//                         <input
//                             type='file'
//                             name='avatar'
//                             className='file-input'
//                             id='customFile'
//                             onChange={onChangeAvatar}
//                         />
//                         <label className='file-label' htmlFor='customFile'>
//                             Choose Image
//                         </label>
//                     </div>
//                 </div>

//                 <button type="submit" className="update-button">Update</button>
//             </form>
//         </div>
//     );
// }

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { updateProfile, clearAuthError } from "../../actions/userActions";
import { clearUpdateProfile } from "../../slices/authSlice";

export default function UpdateProfile() {
  const { error, user, isUpdated } = useSelector(state => state.authState);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState("");
//   const [avatarPreview, setAvatarPreview] = useState("/images/default_avatar.png");
  const [avatarPreview, setAvatarPreview] = useState("Images/profile.jpg");
  const dispatch = useDispatch();

  const onChangeAvatar = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setAvatarPreview(reader.result);
        setAvatar(e.target.files[0]);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("avatar", avatar);
    dispatch(updateProfile(formData));
  };

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
      if (user.avatar) {
        setAvatarPreview(user.avatar);
      }
    }

    if (isUpdated) {
      toast("Profile updated successfully", {
        type: "success",
        position: toast.POSITION.BOTTOM_CENTER,
        onOpen: () => dispatch(clearUpdateProfile()),
      });
      return;
    }

    if (error) {
      toast(error, {
        position: toast.POSITION.BOTTOM_CENTER,
        type: "error",
        onOpen: () => dispatch(clearAuthError()),
      });
      return;
    }
  }, [user, isUpdated, error, dispatch]);

  return (
    <div className="update-profile" style={{marginTop:'20px'}}>
      {/* Form Container */}
      <div className="form-container" style={{width:'1100px', marginLeft:'100px'}}>
        <form onSubmit={submitHandler} encType="multipart/form-data">
          {/* Heading */}
          <h1>Update Profile</h1>

          {/* Name Field */}
          <div className="form-group" >
            <label htmlFor="name_field">Name</label>
            <input
              type="name"
              id="name_field"
              className="form-control"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          {/* Email Field */}
          <div className="form-group">
            <label htmlFor="email_field">Email</label>
            <input
              type="email"
              id="email_field"
              className="form-control"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Avatar Field */}
          <div className="form-group">
            <label htmlFor="avatar_upload">Avatar</label>
            <div className="d-flex align-items-center">
              <div >
                <img src={avatarPreview} alt="Profile Picture" className="rounded-circle" style={{width:'150px'}} />
              </div>
              <div className="custom-file" style={{marginLeft:'20px'}}>
                <input
                  type="file"
                  name="avatar"
                  className="custom-file-input"
                  id="customFile"
                  onChange={onChangeAvatar}
                />
                <label className="custom-file-label" htmlFor="customFile">
                  Choose Avatar
                </label>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button type="submit" className="update-btn" style={{marginLeft:'1030px', marginTop:'100px'}}>
            Update
          </button>
        </form>
      </div>
    </div>
  );
}