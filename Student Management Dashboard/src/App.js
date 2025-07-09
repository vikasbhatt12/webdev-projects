import React, { useState, useEffect } from 'react';
import StudentForm from './components/StudentForm';
import StudentTable from './components/StudentTable';
import SearchFilter from './components/SearchFilter';

function App() {
  const [students, setStudents] = useState([]);
  const [editingStudent, setEditingStudent] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterDept, setFilterDept] = useState('');
  const [filterYear, setFilterYear] = useState('');

  // Load data from localStorage on component mount
  useEffect(() => {
    const savedStudents = localStorage.getItem('students');
    if (savedStudents) {
      setStudents(JSON.parse(savedStudents));
    }
  }, []);

  // Save data to localStorage whenever students change
  useEffect(() => {
    localStorage.setItem('students', JSON.stringify(students));
  }, [students]);

  // Add new student
  const addStudent = (student) => {
    setStudents([...students, { ...student, id: Date.now().toString() }]);
  };

  // Update existing student
  const updateStudent = (updatedStudent) => {
    setStudents(
      students.map((student) =>
        student.id === updatedStudent.id ? updatedStudent : student
      )
    );
    setEditingStudent(null);
  };

  // Delete student
  const deleteStudent = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  // Start editing a student
  const editStudent = (student) => {
    setEditingStudent(student);
  };

  // Filter students based on search and filter criteria
  const filteredStudents = students.filter((student) => {
    const matchesSearch = 
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.regNo.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesDept = filterDept ? student.dept === filterDept : true;
    const matchesYear = filterYear ? student.year === filterYear : true;
    
    return matchesSearch && matchesDept && matchesYear;
  });

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
          Student Management Dashboard
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 bg-white rounded-lg shadow-md p-6">
            <StudentForm 
              addStudent={addStudent} 
              updateStudent={updateStudent}
              editingStudent={editingStudent}
              setEditingStudent={setEditingStudent}
            />
          </div>
          
          <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-6">
            <SearchFilter 
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              filterDept={filterDept}
              setFilterDept={setFilterDept}
              filterYear={filterYear}
              setFilterYear={setFilterYear}
            />
            
            <StudentTable 
              students={filteredStudents} 
              deleteStudent={deleteStudent} 
              editStudent={editStudent} 
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;