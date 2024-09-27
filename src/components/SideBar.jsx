import React from 'react'
import { Plus, Search, ArrowUpDown, Package, Users, Settings, BarChart } from 'lucide-react';


const SideBar = () => {
    return (
        <div className="w-64 bg-white shadow-md">
            <div className="p-6">
                <h1 className="text-2xl font-bold text-gray-800">Inventory Pro</h1>
            </div>
            <nav className="mt-6">
                <a href="#" data-tip="Inventory" className="flex items-center py-3 px-6 text-gray-700 bg-gray-200 hover:bg-gray-300">
                    <Package className="mr-3" />
                    Inventory
                </a>

                <a href="#" className="flex items-center py-3 px-6 text-gray-600 hover:bg-gray-200">
                    <Users className="mr-3" />
                    Customers
                </a>
                <a href="#" className="flex items-center py-3 px-6 text-gray-600 hover:bg-gray-200">
                    <BarChart className="mr-3" />
                    Reports
                </a>
                <a href="#" className="flex items-center py-3 px-6 text-gray-600 hover:bg-gray-200">
                    <Settings className="mr-3" />
                    Settings
                </a>
            </nav>
        </div>

    )
}

export default SideBar
