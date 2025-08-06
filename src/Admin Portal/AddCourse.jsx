import React, { useState } from 'react';
import { BookOpen, Save, AlertCircle, CheckCircle, GraduationCap } from 'lucide-react';

const AddCourse = () => {
  const [formData, setFormData] = useState({
    courseCode: '',
    courseTitle: '',
    courseCredit: '',
    description: '',
    department: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  const departments = [
    'Computer Science',
    'Mathematics',
    'Physics',
    'Chemistry',
    'Biology',
    'English',
    'History',
    'Psychology',
    'Economics',
    'Business Administration',
    'Engineering',
    'Medicine',
    'Law',
    'Architecture'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear messages when user starts typing
    if (message.text) {
      setMessage({ type: '', text: '' });
    }
  };

  const validateForm = () => {
    const errors = [];
    
    if (!formData.courseCode.trim()) errors.push('Course Code is required');
    if (!formData.courseTitle.trim()) errors.push('Course Title is required');
    if (!formData.courseCredit || formData.courseCredit <= 0) errors.push('Valid Course Credit is required');
    if (!formData.description.trim()) errors.push('Description is required');
    if (!formData.department) errors.push('Department is required');
    
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const validationErrors = validateForm();
    if (validationErrors.length > 0) {
      setMessage({
        type: 'error',
        text: validationErrors.join(', ')
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setMessage({
        type: 'success',
        text: 'Course created successfully! (Frontend demo - no backend connected)'
      });
      
      // Reset form
      setFormData({
        courseCode: '',
        courseTitle: '',
        courseCredit: '',
        description: '',
        department: ''
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-white/20">
          {/* Header */}
          <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 px-8 py-8">
            <div className="flex items-center space-x-4">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-3">
                <GraduationCap className="w-10 h-10 text-white" />
              </div>
              <div>
                <h1 className="text-4xl font-bold text-white mb-2">Course Management</h1>
                <p className="text-indigo-100 text-lg">Create and manage academic courses</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column */}
              <div className="space-y-6">
                {/* Course Code */}
                <div className="space-y-3">
                  <label htmlFor="courseCode" className="flex items-center space-x-2 text-sm font-bold text-gray-700">
                    <BookOpen className="w-4 h-4 text-green-700" />
                    <span>Course Code *</span>
                  </label>
                  <input
                    type="text"
                    id="courseCode"
                    name="courseCode"
                    value={formData.courseCode}
                    onChange={handleInputChange}
                    placeholder="e.g., CS101, MATH201"
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-indigo-100 focus:border-indigo-500 transition-all duration-300 text-gray-900 font-medium bg-gray-50 hover:bg-white"
                    required
                  />
                </div>

                {/* Course Title */}
                <div className="space-y-3">
                  <label htmlFor="courseTitle" className="flex items-center space-x-2 text-sm font-bold text-gray-700">
                    <span>Course Title *</span>
                  </label>
                  <input
                    type="text"
                    id="courseTitle"
                    name="courseTitle"
                    value={formData.courseTitle}
                    onChange={handleInputChange}
                    placeholder="e.g., Introduction to Computer Science"
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-indigo-100 focus:border-indigo-500 transition-all duration-300 text-gray-900 font-medium bg-gray-50 hover:bg-white"
                    required
                  />
                </div>

                {/* Course Credit */}
                <div className="space-y-3">
                  <label htmlFor="courseCredit" className="flex items-center space-x-2 text-sm font-bold text-gray-700">
                    <span>Course Credit *</span>
                  </label>
                  <input
                    type="number"
                    id="courseCredit"
                    name="courseCredit"
                    value={formData.courseCredit}
                    onChange={handleInputChange}
                    placeholder="3"
                    min="1"
                    max="6"
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-indigo-100 focus:border-indigo-500 transition-all duration-300 text-gray-900 font-medium bg-gray-50 hover:bg-white"
                    required
                  />
                </div>

                {/* Department */}
                <div className="space-y-3">
                  <label htmlFor="department" className="flex items-center space-x-2 text-sm font-bold text-gray-700">
                    <span>Department *</span>
                  </label>
                  <select
                    id="department"
                    name="department"
                    value={formData.department}
                    onChange={handleInputChange}
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-indigo-100 focus:border-indigo-500 transition-all duration-300 text-gray-900 font-medium bg-gray-50 hover:bg-white"
                    required
                  >
                    <option value="">Select Department</option>
                    {departments.map((dept) => (
                      <option key={dept} value={dept}>
                        {dept}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                {/* Description */}
                <div className="space-y-3">
                  <label htmlFor="description" className="flex items-center space-x-2 text-sm font-bold text-gray-700">
                    <span>Course Description *</span>
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="Enter a detailed description of the course objectives, topics covered, and learning outcomes..."
                    rows="12"
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-indigo-100 focus:border-indigo-500 transition-all duration-300 text-gray-900 font-medium bg-gray-50 hover:bg-white resize-none"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Message Display */}
            {message.text && (
              <div className={`mt-8 flex items-center space-x-3 p-5 rounded-xl border-l-4 ${
                message.type === 'success' 
                  ? 'bg-emerald-50 text-emerald-800 border-emerald-400' 
                  : 'bg-red-50 text-red-800 border-red-400'
              }`}>
                {message.type === 'success' ? (
                  <CheckCircle className="w-6 h-6 flex-shrink-0" />
                ) : (
                  <AlertCircle className="w-6 h-6 flex-shrink-0" />
                )}
                <span className="font-semibold text-base">{message.text}</span>
              </div>
            )}

            {/* Submit Button */}
            <div className="mt-8 flex justify-center">
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white py-4 px-12 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed transform transition-all duration-300 hover:scale-105 active:scale-95 flex items-center space-x-3"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                    <span>Adding Course...</span>
                  </>
                ) : (
                  <>
                    <Save className="w-6 h-6" />
                    <span>Add Course</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Form Data Preview */}
        {(formData.courseCode || formData.courseTitle) && (
          <div className="mt-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-white/20">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center space-x-2">
              <BookOpen className="w-5 h-5 text-indigo-600" />
              <span>Preview</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              {formData.courseCode && (
                <div>
                  <span className="font-semibold text-gray-600">Code:</span>
                  <span className="ml-2 text-gray-800">{formData.courseCode}</span>
                </div>
              )}
              {formData.courseTitle && (
                <div>
                  <span className="font-semibold text-gray-600">Title:</span>
                  <span className="ml-2 text-gray-800">{formData.courseTitle}</span>
                </div>
              )}
              {formData.courseCredit && (
                <div>
                  <span className="font-semibold text-gray-600">Credits:</span>
                  <span className="ml-2 text-gray-800">{formData.courseCredit}</span>
                </div>
              )}
              {formData.department && (
                <div>
                  <span className="font-semibold text-gray-600">Department:</span>
                  <span className="ml-2 text-gray-800">{formData.department}</span>
                </div>
              )}
            </div>
            {formData.description && (
              <div className="mt-3">
                <span className="font-semibold text-gray-600">Description:</span>
                <p className="mt-1 text-gray-800 text-sm leading-relaxed">{formData.description}</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AddCourse;