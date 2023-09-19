import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Form2 = ({ formData, setFormData, prevStep }) => {
  const navigate = useNavigate(); // Get the navigate function

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    const updatedInterests = checked
      ? [...formData.interests, name]
      : formData.interests.filter((interest) => interest !== name);
    setFormData({ ...formData, interests: updatedInterests });
  };

  const handlePreview = () => {
    // Navigate to the preview page with form data
    navigate('/preview', { state: { formData } });
  };

  const options = ['Reading Books', 'Watching Movies', 'Playing Cricket'];

  return (
    <form>
      <div>
        <label>Gender:</label>
        <input type="radio" name="gender" value="Male" onChange={handleChange} required /> Male
        <input type="radio" name="gender" value="Female" onChange={handleChange} required /> Female
      </div>
      <div>
        <label>Interests:</label>
        {options.map((interest) => (
          <label key={interest}>
            <input
              type="checkbox"
              name={interest}
              checked={formData.interests.includes(interest)}
              onChange={handleCheckboxChange}
            />{' '}
            {interest}
          </label>
        ))}
      </div>
      <div>
        <label>Location:</label>
        <select name="location" value={formData.location} onChange={handleChange} required>
          <option value="">Select Location</option>
          <option value="Delhi">New York</option>
          <option value="Noida">Los Angeles</option>
          <option value="Gurgaon">Chicago</option>
        </select>
      </div>
      <div>
        <label>About:</label>
        <textarea
          name="about"
          value={formData.about}
          onChange={handleChange}
          maxLength={100}
          rows="4"
          required
        />
      </div>
      <button onClick={prevStep}>Previous</button>
      <button onClick={handlePreview}>Preview</button>
    </form>
  );
};

export default Form2;
