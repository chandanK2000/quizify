import React, { useState, useEffect } from 'react';
import { FiCamera, FiEdit } from 'react-icons/fi';
import "./editProfileForm.css"
import { toast } from 'react-toastify';
import { Button } from '@mui/material';

const EditProfileForm = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [userData, setUserData] = useState({
    _id: '',
    name: '',
    email: '',
    password: '',
    mobile: '',
    address: '',
    profession: '',
    state: '',
    gender: '',
    bio: '',
    image: '', // Store image URL
  });
  const [imagePreview, setImagePreview] = useState('');
  const [statesOfIndia, setStatesOfIndia] = useState([]); 
  const [bioWordCount, setBioWordCount] = useState(0); 

  useEffect(() => {
    const storedUserData = sessionStorage.getItem('userData');
    if (storedUserData) {
      const parsedUserData = JSON.parse(storedUserData);
      fetch(`${process.env.REACT_APP_BACKEND_URL}/api/users/${parsedUserData.userId}`)
        .then(response => response.json())
        .then(data => {
          setUserData(data);
          setImagePreview(`${process.env.REACT_APP_BACKEND_URL}/${data.image}`); // Set initial image preview
        })
        .catch(error => console.error('Error fetching user data:', error));
    }

    // Fetch the states of India
    const states = [
      'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
      'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka',
      'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram',
      'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu',
      'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal'
    ];
    setStatesOfIndia(states);
  }, []);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUserData(prevState => ({ ...prevState, image: file }));
      setImagePreview(URL.createObjectURL(file)); // Update image preview
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      for (let key in userData) {
        if (key === 'image' && userData[key] instanceof File) {
          formData.append(key, userData[key]);
        } else {
          formData.append(key, userData[key]);
        }
      }

      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/users/${userData._id}`, {
        method: 'PUT',
        body: formData,
      });

      if (response.ok) {
        console.log('User data updated successfully');
        toast.success("User data updated successfully");
      } else {
        console.error('Failed to update user data');
        const errorData = await response.json();
        console.error('Error details:', errorData);
      }
    } catch (error) {
      console.error('Error updating user data:', error);
    }
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === 'bio') {
      setUserData(prevState => ({ ...prevState, [id]: value }));
      // Counting words in bio
      const words = value.trim().split(/\s+/);
      setBioWordCount(words.length);
    } else {
      setUserData(prevState => ({ ...prevState, [id]: value }));
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className='col-lg-12'>
          <div className="text-center mb-4 profile-image" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <label htmlFor="profile-image-upload" style={{ position: 'relative' }}>
              <FiCamera size={20} className="fi-camera-icon" />
              {imagePreview ? (
                <img src={imagePreview} alt="Profile" className="img-fluid rounded-circle" style={{ width: '100px', height: '100px', cursor: 'pointer' }} />
              ) : (
                <img src="./avatar.webp" alt="Profile" className="img-fluid rounded-circle" style={{ width: '100px', height: '100px', cursor: 'pointer' }} />
              )}
            </label>
            <input type="file" id="profile-image-upload" style={{ display: 'none' }} onChange={handleImageChange} />
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-lg-6'>
          <div>
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="name" value={userData.name} onChange={handleInputChange} />
          </div>
          <div>
            <label htmlFor="mobile" className="form-label">Mobile</label>
            <input type="text" className="form-control" id="mobile" value={userData.mobile} onChange={handleInputChange} />
          </div>
          <div>
            <label htmlFor="profession" className="form-label">Profession</label>
            <input type="text" className="form-control" id="profession" value={userData.profession} onChange={handleInputChange} />
          </div>
          <div>
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" disabled className="form-control" id="password" value={userData.password} onChange={handleInputChange} />
          </div>
        </div>

        <div className='col-lg-6'>
          <div>
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" value={userData.email} onChange={handleInputChange} />
          </div>


          <div>
            <label htmlFor="address" className="form-label">Address</label>
            <input type="text" className="form-control" id="address" value={userData.address} onChange={handleInputChange} />
          </div>
          <div>
            <label htmlFor="state" className="form-label">State</label>
            <select className="form-select" id="state" value={userData.state} onChange={handleInputChange}>
              <option value="">Select State</option>
              {statesOfIndia.map(state => (
                <option key={state} value={state}>{state}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="gender" className="form-label">Gender</label>
            <select className="form-select" id="gender" value={userData.gender} onChange={handleInputChange}>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className="col-lg-12">
          <label htmlFor="bio" className="form-label"></label>
          <textarea className="form-control" id="bio" rows="3" value={userData.bio} onChange={handleInputChange}></textarea>
          <span className="biography">({bioWordCount}/200 words)</span>
        </div>
      </div>
      <div className='row'>
        <div className='col-lg-12 text-center my-3'>
          <Button type="submit" variant='contained' onClick={handleSubmit}><FiEdit />  Save Changes </Button>
        </div>
      </div>
    </div>
  );
};

export default EditProfileForm;
