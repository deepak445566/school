import React, { useState } from 'react';

const FranchiseForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    alternatePhone: '',
    city: '',
    state: '',
    investment: '',
    experience: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Web3Forms API
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: '', // Apna access key yahan lagao
          
          // Form fields
          name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          alternate_phone: formData.alternatePhone,
          city: formData.city,
          state: formData.state,
          investment: formData.investment,
          experience: formData.experience,
          message: formData.message,
          
          // Email settings
          subject: 'New Franchise Enquiry - Florawings School',
          from_name: 'Florawings Website',
          reply_to: formData.email
        })
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus('success');
        // Clear form
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          alternatePhone: '',
          city: '',
          state: '',
          investment: '',
          experience: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <div className="min-h-screen bg-[#F7FAE2] py-12 md:py-16 exo">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        
        {/* Header */}
        <div className="bg-white rounded-t-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-[#F15F25] to-[#FF8A5C] p-8 md:p-10 text-white text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">FLORAWINGS SCHOOL</h1>
            <p className="text-xl md:text-2xl">Franchise Application Form</p>
            <p className="text-lg mt-2 opacity-90">Partner with us - Expand Quality Education</p>
          </div>
          
          {/* Benefits Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-6 bg-gray-50 border-b">
            <div className="text-center">
              <div className="w-12 h-12 bg-[#F15F25]/10 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-[#F15F25] text-2xl">🏆</span>
              </div>
              <h3 className="font-semibold">Proven Model</h3>
              <p className="text-sm text-gray-600">Established since 2021</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#F15F25]/10 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-[#F15F25] text-2xl">📚</span>
              </div>
              <h3 className="font-semibold">Curriculum Support</h3>
              <p className="text-sm text-gray-600">Montessori & Modern Methods</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#F15F25]/10 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-[#F15F25] text-2xl">🤝</span>
              </div>
              <h3 className="font-semibold">Full Training</h3>
              <p className="text-sm text-gray-600">Staff Training & Support</p>
            </div>
          </div>
        </div>

        {/* Status Message */}
        {submitStatus === 'success' && (
          <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
            ✅ Thank you for your interest! Our franchise team will contact you within 24 hours.
          </div>
        )}
        
        {submitStatus === 'error' && (
          <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
            ❌ Submission failed. Please try again or call us directly.
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-b-2xl shadow-xl p-6 md:p-8 mt-4">
          
          {/* Personal Details */}
          <div className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-[#F15F25] inline-block">
              👤 Personal Details
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Full Name *</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F15F25] focus:border-transparent outline-none transition"
                  placeholder="Enter your full name"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F15F25] focus:border-transparent outline-none transition"
                  placeholder="Enter your email"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F15F25] focus:border-transparent outline-none transition"
                  placeholder="Enter your phone number"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2">Alternate Phone</label>
                <input
                  type="tel"
                  name="alternatePhone"
                  value={formData.alternatePhone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F15F25] focus:border-transparent outline-none transition"
                  placeholder="Alternate contact number"
                />
              </div>
            </div>
          </div>
          
          {/* Location Details */}
          <div className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-[#F15F25] inline-block">
              📍 Location Details
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">City *</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F15F25] focus:border-transparent outline-none transition"
                  placeholder="Enter your city"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2">State *</label>
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F15F25] focus:border-transparent outline-none transition"
                  placeholder="Enter your state"
                />
              </div>
            </div>
          </div>
          
          {/* Business Details */}
          <div className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-[#F15F25] inline-block">
              💼 Business Details
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Investment Capacity *</label>
                <select
                  name="investment"
                  value={formData.investment}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F15F25] focus:border-transparent outline-none transition"
                >
                  <option value="">Select Range</option>
                  <option value="5-10 Lakhs">5-10 Lakhs</option>
                  <option value="10-15 Lakhs">10-15 Lakhs</option>
                  <option value="15-20 Lakhs">15-20 Lakhs</option>
                  <option value="20-30 Lakhs">20-30 Lakhs</option>
                  <option value="30+ Lakhs">30+ Lakhs</option>
                </select>
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2">Previous Experience *</label>
                <select
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F15F25] focus:border-transparent outline-none transition"
                >
                  <option value="">Select Experience</option>
                  <option value="Education Field">Education Field</option>
                  <option value="Business">Business</option>
                  <option value="Teaching">Teaching</option>
                  <option value="School Management">School Management</option>
                  <option value="First Time">First Time Entrepreneur</option>
                </select>
              </div>
            </div>
          </div>
          
          {/* Message */}
          <div className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-[#F15F25] inline-block">
              💬 Additional Information
            </h2>
            
            <div>
              <label className="block text-gray-700 font-medium mb-2">Your Message / Questions</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F15F25] focus:border-transparent outline-none transition"
                placeholder="Tell us about your interest in franchise, preferred location, any questions..."
              ></textarea>
            </div>
          </div>
          
          {/* Terms */}
          <div className="mb-6">
            <label className="flex items-start gap-2">
              <input type="checkbox" required className="mt-1" />
              <span className="text-sm text-gray-600">
                I agree to the terms and conditions and confirm that the information provided is correct. 
                I authorize Florawings School to contact me regarding franchise opportunities.
              </span>
            </label>
          </div>
          
          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`bg-[#F15F25] text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 min-w-[250px] ${
                isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? 'Submitting...' : 'Apply for Franchise'}
            </button>
            <p className="text-gray-500 text-sm mt-4">
              * Required fields. Our franchise team will get back to you within 24-48 hours.
            </p>
          </div>
        </form>

        {/* Contact Info */}
        <div className="bg-white rounded-xl shadow-lg p-6 mt-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-3 text-center">📞 For Franchise Queries</h3>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-2">
              <span className="text-[#F15F25] text-xl">📱</span>
              <a href="tel:9999995603" className="text-gray-600 hover:text-[#F15F25]"></a>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#F15F25] text-xl">📧</span>
              <a href="mailto:franchise@florawings.com" className="text-gray-600 hover:text-[#F15F25]">franchise@florawings.com</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FranchiseForm;