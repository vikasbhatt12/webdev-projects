import React from 'react';

const SearchFilter = ({ 
  searchTerm, 
  setSearchTerm, 
  filterDept, 
  setFilterDept, 
  filterYear, 
  setFilterYear 
}) => {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-4">Search & Filter</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Search Input */}
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="search">
            Search
          </label>
          <input
            className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="search"
            type="text"
            placeholder="Search by name or reg no"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        {/* Department Filter */}
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="filterDept">
            Department
          </label>
          <select
            className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="filterDept"
            value={filterDept}
            onChange={(e) => setFilterDept(e.target.value)}
          >
            <option value="">All Departments</option>
            <option value="Computer Science">Computer Science</option>
            <option value="Information Technology">Information Technology</option>
            <option value="Electronics">Electronics</option>
            <option value="Mechanical">Mechanical</option>
            <option value="Civil">Civil</option>
            <option value="Electrical">Electrical</option>
          </select>
        </div>
        
        {/* Year Filter */}
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="filterYear">
            Year
          </label>
          <select
            className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="filterYear"
            value={filterYear}
            onChange={(e) => setFilterYear(e.target.value)}
          >
            <option value="">All Years</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
      </div>
      
      {/* Clear Filters Button */}
      {(searchTerm || filterDept || filterYear) && (
        <button
          className="mt-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={() => {
            setSearchTerm('');
            setFilterDept('');
            setFilterYear('');
          }}
        >
          Clear Filters
        </button>
      )}
    </div>
  );
};

export default SearchFilter;