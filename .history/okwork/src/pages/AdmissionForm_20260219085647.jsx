import React, { useState } from 'react';

const AdmissionForm = () => {
  const [formData, setFormData] = useState({
    childName: '',
    dob: '',
    gender: '',
    program: '',
    class: '',
    fatherName: '',
    motherName: '',
    phone: '',
    alternatePhone: '',
    email: '',
    address: '',
    city: '',
    pincode: '',
    previousSchool: '',
    comments: ''
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
      // Web3Forms API endpoint - YAHI HAI API LAGANE KA TARIKA
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: process.env.REACT_APP_WEB3FORMS_KEY, // Tumhara access key
          
          // Form fields
          child_name: formData.childName,
          date_of_birth: formData.dob,
          gender: formData.gender,
          program: formData.program,
          class_applying: formData.class,
          father_name: formData.fatherName,
          mother_name: formData.motherName,
          phone: formData.phone,
          alternate_phone: formData.alternatePhone,
          email: formData.email,
          address: formData.address,
          city: formData.city,
          pincode: formData.pincode,
          previous_school: formData.previousSchool,
          comments: formData.comments,
          
          // Email settings
          subject: 'New Admission Enquiry - Florawings School',
          from_name: 'Florawings Website',
          reply_to: formData.email
        })
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus('success');
        // Form clear karo
        setFormData({
          childName: '',
          dob: '',
          gender: '',
          program: '',
          class: '',
          fatherName: '',
          motherName: '',
          phone: '',
          alternatePhone: '',
          email: '',
          address: '',
          city: '',
          pincode: '',
          previousSchool: '',
          comments: ''
        });
      } else {
        setSubmitStatus('error');
        console.log('Error:', data);
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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        
        {/* School Header */}
        <div className="bg-white rounded-t-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-[#F15F25] to-[#FF8A5C] p-6 md:p-8 text-white">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center">FLORAWINGS PRE-PRIMARY SCHOOL</h1>
            <p className="text-center text-lg mt-2">Admission Application Form 2025-26</p>
          </div>
          
          {/* School Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-6 bg-gray-50 border-b">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#F15F25]/10 rounded-full flex items-center justify-center">
                <span className="text-[#F15F25] text-xl">🏫</span>
              </div>
              <div>
                <p className="text-xs text-gray-500">Established</p>
                <p className="font-semibold">2021</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#F15F25]/10 rounded-full flex items-center justify-center">
                <span className="text-[#F15F25] text-xl">✓</span>
              </div>
              <div>
                <p className="text-xs text-gray-500">Recognised by</p>
                <p className="font-semibold">State Government (UP)</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#F15F25]/10 rounded-full flex items-center justify-center">
                <span className="text-[#F15F25] text-xl">📍</span>
              </div>
              <div>
                <p className="text-xs text-gray-500">Address</p>
                <p className="font-semibold text-sm">I-642, Street no-6, Loni, GZB</p>
              </div>
            </div>
          </div>
        </div>

        {/* Status Message */}
        {submitStatus === 'success' && (
          <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
            ✅ Form submitted successfully! We will contact you soon.
          </div>
        )}
        
        {submitStatus === 'error' && (
          <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
            ❌ Submission failed. Please try again or contact us directly.
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-b-2xl shadow-xl p-6 md:p-8 mt-4">
          
          {/* Child Details */}
          <div className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-[#F15F25] inline-block">
              👶 Child's Details
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Child's Full Name *</label>
                <input
                  type="text"
                  name="childName"
                  value={formData.childName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F15F25] focus:border-transparent outline-none transition"
                  placeholder="Enter child's full name"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2">Date of Birth *</label>
                <input
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F15F25] focus:border-transparent outline-none transition"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2">Gender *</label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F15F25] focus:border-transparent outline-none transition"
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2">Program *</label>
                <select
                  name="program"
                  value={formData.program}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F15F25] focus:border-transparent outline-none transition"
                >
                  <option value="">Select Program</option>
                  <option value="Play Way">Play Way</option>
                  <option value="Nursery">Nursery</option>
                  <option value="Kindergarten">Kindergarten (KG)</option>
                  <option value="Primary">Primary (1st-5th)</option>
                </select>
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2">Class Applying For *</label>
                <select
                  name="class"
                  value={formData.class}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F15F25] focus:border-transparent outline-none transition"
                >
                  <option value="">Select Class</option>
                  <option value="Play Group">Play Group</option>
                  <option value="Nursery">Nursery</option>
                  <option value="LKG">LKG</option>
                  <option value="UKG">UKG</option>
                  <option value="1st">1st Standard</option>
                  <option value="2nd">2nd Standard</option>
                  <option value="3rd">3rd Standard</option>
                  <option value="4th">4th Standard</option>
                  <option value="5th">5th Standard</option>
                </select>
              </div>
            </div>
          </div>
          
          {/* Parent Details */}
          <div className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-[#F15F25] inline-block">
              👨‍👩‍👧 Parent/Guardian Details
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Father's Name *</label>
                <input
                  type="text"
                  name="fatherName"
                  value={formData.fatherName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F15F25] focus:border-transparent outline-none transition"
                  placeholder="Enter father's name"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2">Mother's Name *</label>
                <input
                  type="text"
                  name="motherName"
                  value={formData.motherName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F15F25] focus:border-transparent outline-none transition"
                  placeholder="Enter mother's name"
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
                  placeholder="Enter phone number"
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
                  placeholder="Enter alternate phone"
                />
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-gray-700 font-medium mb-2">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F15F25] focus:border-transparent outline-none transition"
                  placeholder="Enter email address"
                />
              </div>
            </div>
          </div>
          
          {/* Address Details */}
          <div className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-[#F15F25] inline-block">
              📍 Address Details
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className="block text-gray-700 font-medium mb-2">Residential Address *</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F15F25] focus:border-transparent outline-none transition"
                  placeholder="Enter full address"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2">City *</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F15F25] focus:border-transparent outline-none transition"
                  placeholder="Enter city"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2">Pincode *</label>
                <input
                  type="text"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F15F25] focus:border-transparent outline-none transition"
                  placeholder="Enter pincode"
                />
              </div>
            </div>
          </div>
          
          {/* Additional Info */}
          <div className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-[#F15F25] inline-block">
              📝 Additional Information
            </h2>
            
            <div className="grid grid-cols-1 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Previous School (if any)</label>
                <input
                  type="text"
                  name="previousSchool"
                  value={formData.previousSchool}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F15F25] focus:border-transparent outline-none transition"
                  placeholder="Enter previous school name"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2">Any Comments or Special Requirements</label>
                <textarea
                  name="comments"
                  value={formData.comments}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F15F25] focus:border-transparent outline-none transition"
                  placeholder="Enter any comments or special requirements..."
                ></textarea>
              </div>
            </div>
          </div>
          
          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`bg-[#F15F25] text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ${
                isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Admission Form'}
            </button>
            <p className="text-gray-500 text-sm mt-4">
              * Required fields. We'll contact you within 24 hours.
            </p>
          </div>
        </form>

        {/* Contact Info Footer */}
        <div className="bg-white rounded-xl shadow-lg p-6 mt-6 text-center">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">📞 For Any Assistance</h3>
          <div className="flex flex-wrap justify-center gap-6">
            <div>
              <span className="text-[#F15F25] font-medium">MD:</span>
              <a href="tel:9999995603" className="text-gray-600 hover:text-[#F15F25] ml-2">9999995603</a>
            </div>
            <div>
              <span className="text-[#F15F25] font-medium">Principal:</span>
              <a href="tel:9891965767" className="text-gray-600 hover:text-[#F15F25] ml-2">9891965767</a>
            </div>
            <div>
              <span className="text-[#F15F25] font-medium">Coordinator:</span>
              <a href="tel:8588831055" className="text-gray-600 hover:text-[#F15F25] ml-2">8588831055</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionForm;