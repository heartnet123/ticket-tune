import React, { useState, useRef } from 'react';
import '@material/web/button/filled-button.js';
import '@material/web/button/outlined-button.js';
import './ProfileManagement.css';

function ProfileManagement() {
  const [profileImage, setProfileImage] = useState('https://pfps.gg/assets/pfps/7707-.gif'); /* รูปโปรไฟล์ ู */
  const [isEditingName, setIsEditingName] = useState(false);
  const [name, setName] = useState('สมชาย ใจดี');
  const [tempName, setTempName] = useState(''); 
  const [activeTab, setActiveTab] = useState('Profile'); 
  const fileInputRef = useRef(null);

  const handleOpenProfileModalClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleNameChange = (event) => {
    setTempName(event.target.value);
  };

  const handleSaveClick = () => {
    setName(tempName);
    setIsEditingName(false);
  };

  const handleCancelClick = () => {
    setTempName(name);
    setIsEditingName(false);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="profile-container">
      <div className='sidebar-container'>
        <button onClick={() => handleTabChange('Profile')}>Profile</button>
        <button onClick={() => handleTabChange('Payment')}>Payment</button>
        <button onClick={() => handleTabChange('Booking')}>Booking</button>
      </div>
      {activeTab === 'Profile' && (
        <div className="profile">
          <label className='Userdetail'>User Detail</label>
          <img src={profileImage} alt="Profile Icon" />
          <input type="file" ref={fileInputRef} onChange={handleFileChange} style={{ display: 'none' }} />
          <label className='name'><strong>Name</strong></label>
          <button className="changebtn" onClick={handleOpenProfileModalClick}>Change</button>
          <div>
      
          {isEditingName ? (
            <div>
              <input value={tempName} onChange={handleNameChange} />
              <md-filled-button onClick={handleSaveClick}>Save</md-filled-button>
              <md-outlined-button onClick={handleCancelClick}>Cancel</md-outlined-button>
            </div>
          ) : (
            <p onClick={() => { setIsEditingName(true); setTempName(name); }}>
              {name} <button onClick={() => { setIsEditingName(true); setTempName(name); }}>Edit</button>
            </p>
          )}
        </div>
      </div>
      )}
      {activeTab === 'Payment' && (
        <div className="payment-content">
          {/* เนื้อหา Payment */}
        </div>
      )}
      {activeTab === 'Booking' && (
        <div className="booking-content">
          {/* เนื้อหา Booking */}
        </div>
      )}
    </div>
  );
}

export default ProfileManagement;
