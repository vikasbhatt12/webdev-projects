import React, { useState, useEffect } from 'react';

const StudentForm = ({ addStudent, updateStudent, editingStudent, setEditingStudent }) => {
  const initialFormState = {
    name: '',
    regNo: '',
    dept: '',
    year: '',
    marks: ''
  };

  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState({});

  // Update form data when editing student changes
  useEffect(() => {
    if (editingStudent) {
      setFormData(editingStudent);
    } else {
      setFormData(initialFormState);
    }
  }, [editingStudent]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Clear error for this field when user types
    if (errors[name]) {
      setErrors({ ...errors, [name]: null });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.regNo.trim()) {
      newErrors.regNo = 'Registration Number is required';
    }
    
    if (!formData.dept.trim()) {
      newErrors.dept = 'Department is required';
    }
    
    if (!formData.year.trim()) {
      newErrors.year = 'Year is required';
    } else if (isNaN(formData.year) || parseInt(formData.year) < 1 || parseInt(formData.year) > 5) {
      newErrors.year = 'Year must be a number between 1 and 5';
    }
    
    if (!formData.marks.trim()) {
      newErrors.marks = 'Marks is required';
    } else if (isNaN(formData.marks) || parseFloat(formData.marks) < 0 || parseFloat(formData.marks) > 100) {
      newErrors.marks = 'Marks must be a number between 0 and 100';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    // Format the data
    const formattedData = {
      ...formData,
      year: formData.year.trim(),
      marks: parseFloat(formData.marks)
    };
    
    if (editingStudent) {
      updateStudent(formattedData);
    } else {
      addStudent(formattedData);
    }
    
    // Reset form
    setFormData(initialFormState);
  };

  const cancelEdit = () => {
    setEditingStudent(null);
    setFormData(initialFormState);
    setErrors({});
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">
        {editingStudent ? 'Edit Student' : 'Add New Student'}
      </h2>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className={`shadow appearance-none border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Student Name"
          />
          {errors.name && <p className="text-red-500 text-xs italic mt-1">{errors.name}</p>}
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="regNo">
            Registration Number
          </label>
          <input
            className={`shadow appearance-none border ${errors.regNo ? 'border-red-500' : 'border-gray-300'} rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
            id="regNo"
            type="text"
            name="regNo"
            value={formData.regNo}
            onChange={handleChange}
            placeholder="Registration Number"
          />
          {errors.regNo && <p className="text-red-500 text-xs italic mt-1">{errors.regNo}</p>}
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dept">
            Department
          </label>
          <select
            className={`shadow appearance-none border ${errors.dept ? 'border-red-500' : 'border-gray-300'} rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
            id="dept"
            name="dept"
            value={formData.dept}
            onChange={handleChange}
          >
            <option value="">Select Department</option>
            <option value="Computer Science">Computer Science</option>
            <option value="Information Technology">Information Technology</option>
            <option value="Electronics">Electronics</option>
            <option value="Mechanical">Mechanical</option>
            <option value="Civil">Civil</option>
            <option value="Electrical">Electrical</option>
          </select>
          {errors.dept && <p className="text-red-500 text-xs italic mt-1">{errors.dept}</p>}
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="year">
            Year
          </label>
          <select
            className={`shadow appearance-none border ${errors.year ? 'border-red-500' : 'border-gray-300'} rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
            id="year"
            name="year"
            value={formData.year}
            onChange={handleChange}
          >
            <option value="">Select Year</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
          {errors.year && <p className="text-red-500 text-xs italic mt-1">{errors.year}</p>}
        </div>
        
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="marks">
            Marks
          </label>
          <input
            className={`shadow appearance-none border ${errors.marks ? 'border-red-500' : 'border-gray-300'} rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
            id="marks"
            type="number"
            name="marks"
            min="0"
            max="100"
            value={formData.marks}
            onChange={handleChange}
            placeholder="Marks (0-100)"
          />
          {errors.marks && <p className="text-red-500 text-xs italic mt-1">{errors.marks}</p>}
        </div>
        
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            {editingStudent ? 'Update' : 'Add'} Student
          </button>
          
          {editingStudent && (
            <button
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={cancelEdit}
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default StudentForm;