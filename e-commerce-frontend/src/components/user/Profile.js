    // import { useSelector } from 'react-redux';
    // import { Link } from 'react-router-dom';
    // import './Profile.css'
    
    // export default function Profile() {
    //   const { user } = useSelector(state => state.authState);
    
    //   return (
    //     <div className="profile-container mt-5">
    //       <div className="profile-header text-center mb-4">
    //         <figure className="avatar-profile">
    //           <img 
    //             className="img-fluid" 
    //             src={user.avatar ?? './images/'} 
    //             alt="User Avatar" 
    //             style={{ width: '600px', height: '280px', objectFit: 'cover' }}
    //           />
    //         </figure>
    //         <Link to="/myprofile/update" id="edit_profile" className="btn btn-primary mt-4">
    //           Edit Profile
    //         </Link>
    //       </div>
    
    //       <div className="profile-details">
    //         <div className="profile-item mb-3">
    //           <h4>Full Name</h4>
    //           <p>{user.name}</p>
    //         </div>
    
    //         <div className="profile-item mb-3">
    //           <h4>Email Address</h4>
    //           <p>{user.email}</p>
    //         </div>
    
    //         <div className="profile-item mb-3">
    //           <h4>Joined</h4>
    //           <p>{String(user.createdAt).substring(0, 10)}</p>
    //         </div>
    
    //         <div className="profile-actions mt-4">
    //           <Link to="/orders" className="btn w-100 mb-3" style={{backgroundColor:'grey'}}>
    //             My Orders
    //           </Link>
    
    //           <Link to="/myprofile/update/password" className="btn w-100" style={{backgroundColor:'grey'}}>
    //             Change Password
    //           </Link>
    //         </div>
    //       </div>
    //     </div>
    //   );
    // }
    


    import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Profile() {
  const { user } = useSelector(state => state.authState);

  const profileStyle = {
    backgroundColor: '#f4f5f7',
    minHeight: '100vh', // Ensures full viewport height
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const cardStyle = {
    borderRadius: '.5rem',
    width: '1000px', // Adjust width as needed
    maxWidth: '80%',
    margin: '0 auto',
  };

  const imageStyle = {
    width: '250px',
    height: '250px',
    borderRadius: '50%',
    objectFit: 'cover', // Ensures image fills container
  };

  const infoSectionStyle = {
    padding: '20px',
  };

  return (
    <section style={profileStyle}>
      <h4>Profile Detail</h4>
      <div style={cardStyle}>
        <div style={{ display: 'flex', marginLeft: '' }}>
          {/* <img src={user.avatar || './images/default_avatar.png'} alt="Avatar" style={imageStyle} /> */}
          <img src={user.avatar || './Images/profile.jpg'} alt="Avatar" style={imageStyle} />
          {/* <div style={{ marginLeft: '620px', flex: 1, marginTop:'250px' }}>
          <Link to="/myprofile/update" className="" style={{background:'rgb(122, 236, 193)', padding:'8px'}}>
              Edit Profile
            </Link>           
          </div> */}
        </div>
        <div style={infoSectionStyle}>
          <h5>Information</h5>
          <hr />
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <p>Name:</p>
            <p>{user.name}</p>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <p>Email:</p>
            <p>{user.email}</p>
          </div>
          <h5>Joined</h5>
          <hr />
          <p>{String(user.createdAt).substring(0, 10)}</p>
        </div>

        <div style={{ marginLeft: '900px', flex: 1}}>
          <Link to="/myprofile/update" className="btn btn-primary" style={{background:'rgb(63, 127, 223)', padding:'8px',color:'white',textDecoration:'none'}}>
              Edit Profile
            </Link>           
          </div>

      </div>
    </section>
  );
}