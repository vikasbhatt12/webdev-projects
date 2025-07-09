import React from 'react';

const StudentTable = ({ students, deleteStudent, editStudent }) => {
  if (students.length === 0) {
    return (
      <div className="text-center py-4">
        <p className="text-gray-500">No students found. Add a new student to get started.</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full bg-white">
        <thead>
          <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">Name</th>
            <th className="py-3 px-6 text-left">Reg No</th>
            <th className="py-3 px-6 text-left">Department</th>
            <th className="py-3 px-6 text-center">Year</th>
            <th className="py-3 px-6 text-center">Marks</th>
            <th className="py-3 px-6 text-center">Actions</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm">
          {students.map((student) => (
            <tr key={student.id} className="border-b border-gray-200 hover:bg-gray-50">
              <td className="py-3 px-6 text-left">{student.name}</td>
              <td className="py-3 px-6 text-left">{student.regNo}</td>
              <td className="py-3 px-6 text-left">{student.dept}</td>
              <td className="py-3 px-6 text-center">{student.year}</td>
              <td className="py-3 px-6 text-center">
                <span className={`py-1 px-3 rounded-full text-xs ${
                  student.marks >= 75 ? 'bg-green-200 text-green-800' :
                  student.marks >= 50 ? 'bg-yellow-200 text-yellow-800' :
                  'bg-red-200 text-red-800'
                }`}>
                  {student.marks}
                </span>
              </td>
              <td className="py-3 px-6 text-center">
                <div className="flex item-center justify-center">
                  <button
                    onClick={() => editStudent(student)}
                    className="transform hover:text-blue-500 hover:scale-110 transition-all duration-150 mr-3"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </button>
                  <button
                    onClick={() => {
                      if (window.confirm('Are you sure you want to delete this student?')) {
                        deleteStudent(student.id);
                      }
                    }}
                    className="transform hover:text-red-500 hover:scale-110 transition-all duration-150"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;