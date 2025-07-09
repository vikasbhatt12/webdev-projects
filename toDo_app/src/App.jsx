import { useState, useEffect } from "react";
import { PlusIcon, PencilIcon, TrashIcon, CheckIcon, XMarkIcon } from "@heroicons/react/24/outline";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [editTaskId, setEditTaskId] = useState(null);
  const [editTaskText, setEditTaskText] = useState("");
  const [filter, setFilter] = useState("all");

  // Load tasks from localStorage on component mount
  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  // Save tasks to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Add a new task
  const addTask = () => {
    if (newTask.trim() === "") return;
    
    const newTaskObj = {
      id: Date.now(),
      text: newTask,
      completed: false,
      createdAt: new Date().toISOString(),
    };
    
    setTasks([...tasks, newTaskObj]);
    setNewTask("");
  };

  // Delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  // Toggle task completion status
  const toggleComplete = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  // Start editing a task
  const startEdit = (task) => {
    setEditTaskId(task.id);
    setEditTaskText(task.text);
  };

  // Save edited task
  const saveEdit = () => {
    if (editTaskText.trim() === "") return;
    
    setTasks(tasks.map(task => 
      task.id === editTaskId ? { ...task, text: editTaskText } : task
    ));
    
    setEditTaskId(null);
    setEditTaskText("");
  };

  // Cancel editing
  const cancelEdit = () => {
    setEditTaskId(null);
    setEditTaskText("");
  };

  // Filter tasks based on selected filter
  const filteredTasks = tasks.filter(task => {
    if (filter === "all") return true;
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    return true;
  });

  // Format date for display
  const formatDate = (dateString) => {
    const options = { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-indigo-600 px-4 py-5">
          <h1 className="text-2xl font-bold text-white text-center">To-Do List</h1>
        </div>
        
        {/* Add Task Form */}
        <div className="px-4 py-4 sm:px-6 border-b">
          <div className="flex items-center space-x-2">
            <input
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && addTask()}
              placeholder="Add a new task..."
              className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              onClick={addTask}
              className="p-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <PlusIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
        
        {/* Filter Tabs */}
        <div className="px-4 py-3 sm:px-6 bg-gray-50 border-b">
          <div className="flex space-x-4 justify-center">
            <button
              onClick={() => setFilter("all")}
              className={`px-3 py-1 rounded-md ${filter === "all" ? "bg-indigo-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}
            >
              All
            </button>
            <button
              onClick={() => setFilter("pending")}
              className={`px-3 py-1 rounded-md ${filter === "pending" ? "bg-indigo-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}
            >
              Pending
            </button>
            <button
              onClick={() => setFilter("completed")}
              className={`px-3 py-1 rounded-md ${filter === "completed" ? "bg-indigo-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}
            >
              Completed
            </button>
          </div>
        </div>
        
        {/* Task List */}
        <ul className="divide-y divide-gray-200 max-h-[60vh] overflow-y-auto">
          {filteredTasks.length === 0 ? (
            <li className="px-4 py-6 sm:px-6 text-center text-gray-500">
              No tasks found
            </li>
          ) : (
            filteredTasks.map(task => (
              <li key={task.id} className="px-4 py-4 sm:px-6 hover:bg-gray-50">
                {editTaskId === task.id ? (
                  <div className="flex items-center space-x-2">
                    <input
                      type="text"
                      value={editTaskText}
                      onChange={(e) => setEditTaskText(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && saveEdit()}
                      className="flex-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      autoFocus
                    />
                    <button
                      onClick={saveEdit}
                      className="p-1.5 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                    >
                      <CheckIcon className="h-4 w-4" />
                    </button>
                    <button
                      onClick={cancelEdit}
                      className="p-1.5 bg-gray-500 text-white rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
                    >
                      <XMarkIcon className="h-4 w-4" />
                    </button>
                  </div>
                ) : (
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          checked={task.completed}
                          onChange={() => toggleComplete(task.id)}
                          className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                        />
                        <span 
                          className={`ml-3 text-gray-900 ${task.completed ? 'line-through text-gray-500' : ''}`}
                        >
                          {task.text}
                        </span>
                      </div>
                      <div className="mt-1 text-xs text-gray-500">
                        Created: {formatDate(task.createdAt)}
                      </div>
                    </div>
                    <div className="ml-4 flex-shrink-0 flex space-x-2">
                      <button
                        onClick={() => startEdit(task)}
                        className="p-1 text-indigo-600 hover:text-indigo-900 focus:outline-none"
                      >
                        <PencilIcon className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => deleteTask(task.id)}
                        className="p-1 text-red-600 hover:text-red-900 focus:outline-none"
                      >
                        <TrashIcon className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                )}
              </li>
            ))
          )}
        </ul>
        
        {/* Task Count */}
        <div className="px-4 py-3 sm:px-6 bg-gray-50 text-sm text-gray-700">
          <div className="flex justify-between">
            <span>{tasks.length} total tasks</span>
            <span>{tasks.filter(task => task.completed).length} completed</span>
            <span>{tasks.filter(task => !task.completed).length} pending</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
