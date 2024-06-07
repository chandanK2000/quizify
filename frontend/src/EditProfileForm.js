import React, { useState, useEffect } from 'react';
import { FiCamera, FiEdit } from 'react-icons/fi';

const EditProfileForm = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [userData, setUserData] = useState({
    _id: '', // User ID
    name: '',
    email: '',
    password: '',
    mobile: '',
    address: '',
    profession: '',
    state: '',
    gender: '',
    bio: '',
    image: null, // Updated to null, as we'll handle file object for image
  });

  const statesOfIndia = [
    'Andhra Pradesh',
    'Arunachal Pradesh',
    'Assam',
    'Bihar',
    'Chhattisgarh',
    'Goa',
    'Gujarat',
    'Haryana',
    'Himachal Pradesh',
    'Jharkhand',
    'Karnataka',
    'Kerala',
    'Madhya Pradesh',
    'Maharashtra',
    'Manipur',
    'Meghalaya',
    'Mizoram',
    'Nagaland',
    'Odisha',
    'Punjab',
    'Rajasthan',
    'Sikkim',
    'Tamil Nadu',
    'Telangana',
    'Tripura',
    'Uttar Pradesh',
    'Uttarakhand',
    'West Bengal',
    'Andaman and Nicobar Islands',
    'Chandigarh',
    'Dadra and Nagar Haveli and Daman and Diu',
    'Delhi',
    'Lakshadweep',
    'Puducherry',
  ];

  useEffect(() => {
    // Get user data from sessionStorage
    const storedUserData = sessionStorage.getItem('userData');
    if (storedUserData) {
      const parsedUserData = JSON.parse(storedUserData);
      // Fetch the user data using the user ID from sessionStorage
      fetch(`http://localhost:4000/api/users/${parsedUserData.userId}`)
        .then(response => response.json())
        .then(data => setUserData(data))
        .catch(error => console.error('Error fetching user data:', error));
    }
  }, []);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  // Handle image upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUserData(prevState => ({ ...prevState, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };
  // Handle form field changes
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setUserData(prevState => ({ ...prevState, [id]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      for (let key in userData) {
        formData.append(key, userData[key]);
      }
      const response = await fetch(`http://localhost:4000/api/users/${userData._id}`, {
        method: 'PUT',
        body: formData,
      });
      if (response.ok) {
        console.log('User data updated successfully');
        // Optionally, you can redirect the user to another page after successful update
      } else {
        console.error('Failed to update user data');
      }
    } catch (error) {
      console.error('Error updating user data:', error);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className='col-lg-12'>
          <div className="text-center mb-4" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <label htmlFor="profile-image-upload" style={{ position: 'relative' }}>
              <FiCamera size={20} style={{ position: 'absolute', top: '70%', left: '50%', transform: 'translate(-50%, -50%)', visibility: isHovered ? 'visible' : 'hidden', transition: 'visibility 0.3s ease-in-out' }} />
<img src={userData.image} alt="Profile" className="img-fluid rounded-circle" style={{ width: '100px', height: '100px', cursor: 'pointer' }} />
            </label>
            <input type="file" id="profile-image-upload" style={{ display: 'none' }} onChange={handleImageChange} />
          </div>
        </div>
      </div>
      <div className="row my-4">
        <div className="col-lg-6">
          <form onSubmit={handleSubmit}>
            <div className="row mb-3">
              <div className="col-lg-6">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" value={userData.name} onChange={handleInputChange} />
              </div>
              <div className="col-lg-6">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" value={userData.email} onChange={handleInputChange} />
              </div>
              <div className="col-lg-6">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" value={userData.password} onChange={handleInputChange} />
              </div>
              <div className="col-lg-6">
                <label htmlFor="mobile" className="form-label">Mobile</label>
                <input type="text" className="form-control" id="mobile" value={userData.mobile} onChange={handleInputChange} />
              </div>
              <div className="col-lg-6">
                <label htmlFor="bio" className="form-label">Bio</label>
                <textarea className="form-control" id="bio" rows="3" value={userData.bio} onChange={handleInputChange}></textarea>
              </div>
            </div>
            <button type="submit" className="btn btn-primary"><FiEdit /> Save Changes</button>
          </form>
        </div>
        <div className="col-lg-6">
          <div className="row">
            <div className="col-lg-6">
              <label htmlFor="address" className="form-label">Address</label>
              <input type="text" className="form-control" id="address" value={userData.address} onChange={handleInputChange} />
            </div>
            <div className="col-lg-6">
              <label htmlFor="profession" className="form-label">Profession</label>
              <input type="text" className="form-control" id="profession" value={userData.profession} onChange={handleInputChange} />
            </div>
            <div className="col-lg-6">
              <label htmlFor="state" className="form-label">State</label>
              <select className="form-select" id="state" value={userData.state} onChange={handleInputChange}>
                <option value="">Select State</option>
                {statesOfIndia.map(state => (
                  <option key={state} value={state}>{state}</option>
                ))}
              </select>
            </div>
            <div className="col-lg-6">
              <label htmlFor="gender" className="form-label">Gender</label>
              <select className="form-select" id="gender" value={userData.gender} onChange={handleInputChange}>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfileForm;
