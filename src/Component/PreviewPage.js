import React from 'react';

const PreviewPage = ({ formData }) => {

  const handleFormSubmit = () => {
    
    console.log('Form Data Submitted:', formData);
    alert('Form data submitted successfully!');
    
  };

  return (
    <div>
      <h2>Preview</h2>
      <div>
        <strong>First Name:</strong> {formData.firstName}
      </div>
      <div>
        <strong>Last Name:</strong> {formData.lastName}
      </div>
      <div>
        <strong>Email:</strong> {formData.email}
      </div>
      <div>
        <strong>Contact Number:</strong> {formData.contactNumber}
      </div>
      <div>
        <strong>Gender:</strong> {formData.gender}
      </div>
      <div>
        <strong>Interests:</strong> {formData.interests.join(', ')}
      </div>
      <div>
        <strong>Location:</strong> {formData.location}
      </div>
      <div>
        <strong>About:</strong> {formData.about}
      </div>
      <button onClick={handleFormSubmit}>Submit</button>
    </div>
  );
};

export default PreviewPage;
