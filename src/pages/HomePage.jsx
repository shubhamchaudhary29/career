import React from 'react';

function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <img className='pt-5  h-20 w-20' src="../src/assets/logo.png" alt="logo" />
              </div>
              <nav className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8 ">
                <a href="#" className="border-b-2 border-blue-500 text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium">
                  Home
                </a>
                <a href="#" className="border-b-2 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 text-sm font-medium">
                  Jobs
                </a>
                <a href="#" className="border-b-2 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 text-sm font-medium">
                  About
                </a>
                <a href="#" className="border-b-2 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 text-sm font-medium">
                  Contact
                </a>
              </nav>
            </div>
            <div className="flex items-center">
              <button onClick={() => window.location.href = '/signup'} className="text-sm font-medium text-blue-600 hover:text-blue-800">Sign In</button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-extrabold text-gray-900">
            Find your dream job
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Search thousands of jobs from top companies
          </p>
          <form className="mt-8 max-w-xl mx-auto flex space-x-4">
            <input
              type="text"
              placeholder="Job title or keyword"
              className="flex-grow px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Location"
              className="w-48 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Search
            </button>
          </form>
        </div>
      </section>

      {/* Main Content with Sidebar and Job Listings */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Filters Sidebar */}
        <aside className="md:col-span-1 bg-white p-6 rounded-md shadow">
          <h3 className="text-lg font-semibold mb-4">Filters</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Location</label>
              <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50">
                <option>All</option>
                <option>Remote</option>
                <option>Bangalore</option>
                <option>New York</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Team</label>
              <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50">
                <option>All</option>
                <option>Engineering</option>
                <option>Design</option>
                <option>Marketing</option>
              </select>
            </div>
          </div>
        </aside>

        {/* Job Listings */}
        <section className="md:col-span-3">
          <h3 className="text-lg font-semibold mb-6">Open Positions</h3>
          <div className="space-y-6">
            {/* Example Job Card */}
            <div className="bg-white p-6 rounded-md shadow">
              <h4 className="text-xl font-bold">Frontend Engineer</h4>
              <p className="text-gray-600">YourCompany | Bangalore | Engineering</p>
              <p className="mt-2 text-gray-700">
                Work on building modern UIs with React and Tailwind CSS.
              </p>
              <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                Apply Now
              </button>
            </div>
            <div className="bg-white p-6 rounded-md shadow">
              <h4 className="text-xl font-bold">UX Designer</h4>
              <p className="text-gray-600">YourCompany | Remote | Design</p>
              <p className="mt-2 text-gray-700">
                Design delightful experiences for millions of users.
              </p>
              <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                Apply Now
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Company Info Banner */}
      <section className="bg-blue-600 text-white py-12 text-center">
        <h3 className="text-2xl font-bold mb-4">Why Join ANANTA?</h3>
        <p className="max-w-2xl mx-auto">
          We’re building a diverse, inclusive workplace where you can grow, learn, and make a real impact. Explore our teams and find your fit!
        </p>
      </section>

      {/* Footer */}
      <footer className="bg-white shadow mt-12">
        <div className="max-w-7xl mx-auto px-4 py-6 text-center text-gray-500 text-sm">
          &copy; 2025 YourCompany. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
