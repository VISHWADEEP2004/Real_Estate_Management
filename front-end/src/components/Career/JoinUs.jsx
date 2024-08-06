import React, { useState } from 'react';

const JoinUs = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    position: '',
    resume: null,
    coverLetter: '',
    linkedin: '',
    availability: '',
    referral: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form data submitted:', formData);
  };

  return (
    <section id="join-us" className="py-20 bg-gray-100">
      <div className="container mx-auto max-w-4xl bg-white p-8 border rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-center">Join Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-lg font-medium mb-2">Full Name</label>
              <input 
                type="text" 
                id="fullName" 
                name="fullName" 
                value={formData.fullName} 
                onChange={handleChange} 
                className="w-full border border-gray-300 rounded-lg p-3" 
                required 
              />
            </div>

            {/* Email Address */}
            <div>
              <label htmlFor="email" className="block text-lg font-medium mb-2">Email Address</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                className="w-full border border-gray-300 rounded-lg p-3" 
                required 
              />
            </div>

            {/* Phone Number */}
            <div>
              <label htmlFor="phone" className="block text-lg font-medium mb-2">Phone Number (Optional)</label>
              <input 
                type="tel" 
                id="phone" 
                name="phone" 
                value={formData.phone} 
                onChange={handleChange} 
                className="w-full border border-gray-300 rounded-lg p-3" 
              />
            </div>

            {/* Position Applying For */}
            <div>
              <label htmlFor="position" className="block text-lg font-medium mb-2">Position Applying For</label>
              <input 
                type="text" 
                id="position" 
                name="position" 
                value={formData.position} 
                onChange={handleChange} 
                className="w-full border border-gray-300 rounded-lg p-3" 
                required 
              />
            </div>

            {/* Resume/CV */}
            <div>
              <label htmlFor="resume" className="block text-lg font-medium mb-2">Resume/CV</label>
              <input 
                type="file" 
                id="resume" 
                name="resume" 
                onChange={handleFileChange} 
                className="w-full border border-gray-300 rounded-lg p-3" 
                accept=".pdf,.doc,.docx" 
                required 
              />
            </div>

            {/* Cover Letter */}
            <div className="md:col-span-2">
              <label htmlFor="coverLetter" className="block text-lg font-medium mb-2">Cover Letter</label>
              <textarea 
                id="coverLetter" 
                name="coverLetter" 
                value={formData.coverLetter} 
                onChange={handleChange} 
                className="w-full border border-gray-300 rounded-lg p-3 h-32" 
              />
            </div>

            {/* LinkedIn Profile */}
            <div>
              <label htmlFor="linkedin" className="block text-lg font-medium mb-2">LinkedIn Profile (Optional)</label>
              <input 
                type="url" 
                id="linkedin" 
                name="linkedin" 
                value={formData.linkedin} 
                onChange={handleChange} 
                className="w-full border border-gray-300 rounded-lg p-3" 
              />
            </div>

            {/* Availability */}
            <div>
              <label htmlFor="availability" className="block text-lg font-medium mb-2">Availability</label>
              <input 
                type="text" 
                id="availability" 
                name="availability" 
                value={formData.availability} 
                onChange={handleChange} 
                className="w-full border border-gray-300 rounded-lg p-3" 
                required 
              />
            </div>

            {/* How Did You Hear About Us? */}
            <div className="md:col-span-2">
              <label htmlFor="referral" className="block text-lg font-medium mb-2">How Did You Hear About Us?</label>
              <input 
                type="text" 
                id="referral" 
                name="referral" 
                value={formData.referral} 
                onChange={handleChange} 
                className="w-full border border-gray-300 rounded-lg p-3" 
              />
            </div>
          </div>

          <button 
            type="submit" 
            className="mt-6 bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600"
          >
            Submit Application
          </button>
        </form>
      </div>
    </section>
  );
};

export default JoinUs;
