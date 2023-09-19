import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Form1 from './Form1';
import Form2 from './Form2';
import PreviewPage from './PreviewPage';

const RegistrationForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // ... (form fields)
    firstName: '',
    lastName: '',
    email: '',
    contactNumber: '',
    gender: '',
    interests: [],
    location: '',
    about: '',
  });

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handlePreview = () => {
    // Redirect to the preview page with form data
    // Use the Navigate component to programmatically navigate
    return <Navigate to="/preview" state={{ formData }} />;
  };

  const handleSubmit = () => {
  
    alert('Form submitted successfully!');
  };

  return (
    <Router>
      <div>
        <h2>Registration Form - Step {step}</h2>
        <Routes>
          <Route path="/preview" element={<PreviewPage formData={formData} prevStep={prevStep} handleSubmit={handleSubmit} />} />
          <Route path="/" element={step === 1 ? <Form1 formData={formData} setFormData={setFormData} nextStep={nextStep} /> 
          : <Form2 formData={formData} setFormData={setFormData} prevStep={prevStep} handlePreview={handlePreview} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default RegistrationForm;
