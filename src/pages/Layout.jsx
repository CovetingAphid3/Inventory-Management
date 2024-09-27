import React from 'react';
import { Link } from 'react-router-dom';
import { Package, Users, BarChart, Settings } from 'lucide-react';

const Layout = ({ children }) => {
    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <div className="w-64 bg-white shadow-md">
                <div className="p-6">
                    <h1 className="text-2xl font-bold text-gray-800">Inventory Pro</h1>
                </div>
                <nav className="mt-6">
                    <Link to="/" className="flex items-center py-3 px-6 text-gray-700 hover:bg-gray-200">
                        <Package className="mr-3" />
                        Dashboard
                    </Link>
                    <Link to="/inventory" className="flex items-center py-3 px-6 text-gray-600 hover:bg-gray-200">
                        <Package className="mr-3" />
                        Inventory
                    </Link>
                    <Link to="/customers" className="flex items-center py-3 px-6 text-gray-600 hover:bg-gray-200">
                        <Users className="mr-3" />
                        Customers
                    </Link>
                    <Link to="/reports" className="flex items-center py-3 px-6 text-gray-600 hover:bg-gray-200">
                        <BarChart className="mr-3" />
                        Reports
                    </Link>
                    <Link to="/settings" className="flex items-center py-3 px-6 text-gray-600 hover:bg-gray-200">
                        <Settings className="mr-3" />
                        Settings
                    </Link>
                </nav>
            </div>

            {/* Main Content */}
            <div className="flex-1 overflow-auto">
                <div className="p-8">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Layout;
