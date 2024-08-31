import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = ({ pn, an, rn, alln }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-8">
            <DashboardCard
              link="/pending-notes"
              count={pn}
              icon="fas fa-book-reader"
              title="Pending Notes"
              bgColor="bg-gradient-to-r from-purple-500 to-pink-500"
            />
            <DashboardCard
              link="/accepted-notes"
              count={an}
              icon="fas fa-book"
              title="Accepted Notes"
              bgColor="bg-gradient-to-r from-blue-500 to-teal-500"
            />
            <DashboardCard
              link="/rejected-notes"
              count={rn}
              icon="fas fa-edit"
              title="Rejected Notes"
              bgColor="bg-gradient-to-r from-green-500 to-teal-500"
            />
            <DashboardCard
              link="/all-notes"
              count={alln}
              icon="fas fa-folder-open"
              title="All Notes"
              bgColor="bg-gradient-to-r from-yellow-500 to-orange-500"
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

const DashboardCard = ({ link, count, icon, title, bgColor }) => (
  <Link to={link} className="block text-center">
    <div className={`p-6 rounded-lg shadow-lg ${bgColor} transition-transform duration-300 hover:-translate-y-2`}>
      <div className="text-white text-xl font-bold mb-2">{count}</div>
      <i className={`${icon} text-4xl text-white opacity-75 mb-4`}></i>
      <p className="text-white font-semibold">{title}</p>
    </div>
  </Link>
);

const Footer = () => (
  <footer className="text-center py-8">
    <p className="text-3xl font-bold text-red-600">
      Copyright &copy; {new Date().getFullYear()} All Rights Reserved
      <span className="text-brown-500"> | </span>
      <br />
      <span className="text-green-700">This website is made by </span>
      <a href="#" className="text-blue-500 hover:underline">wintersoldie03</a>
    </p>
  </footer>
);

export default AdminDashboard;