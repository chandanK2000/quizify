import React, { useState } from 'react';
import { FiCamera, FiEdit } from 'react-icons/fi'; 

const EditProfileForm = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleImageClick = () => {
    document.getElementById('profile-image-upload').click();
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="text-center mb-4" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <label htmlFor="profile-image-upload" style={{ position: 'relative' }}>
              <FiCamera size={20} style={{ position: 'absolute', top: '70%', left: '50%', transform: 'translate(-50%, -50%)', visibility: isHovered ? 'visible' : 'hidden', transition: 'visibility 0.3s ease-in-out' }} />
              <img src="./siyaramsir.jpg" alt="Profile" className="img-fluid rounded-circle" style={{ width: '100px', height: '100px', cursor: 'pointer' }} onClick={handleImageClick} />
            </label>
            <input type="file" id="profile-image-upload" style={{ display: 'none' }} />
          </div>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" className="form-control" id="password" />
            </div>
            <div className="mb-3">
              <label htmlFor="address" className="form-label">Address</label>
              <input type="text" className="form-control" id="address" />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">Phone</label>
              <input type="text" className="form-control" id="phone" />
            </div>
            <div className='text-center'>
              <button type="submit" className="btn btn-primary mb-3"><FiEdit /> Edit Profile</button>

            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProfileForm;
