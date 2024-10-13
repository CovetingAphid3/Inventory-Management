import React, { useState } from 'react';
import Layout from './Layout';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Plus, Search, ArrowUpDown, Package, DollarSign, Tag } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";

const InventoryManagementPage = () => {
  const [inventory, setInventory] = useState([
    { id: 1, name: 'Widget A', quantity: 50, price: 9.99, category: 'Electronics' },
    { id: 2, name: 'Gadget B', quantity: 30, price: 19.99, category: 'Electronics' },
    { id: 3, name: 'Tool C', quantity: 20, price: 14.99, category: 'Hardware' },
    { id: 4, name: 'Component D', quantity: 100, price: 4.99, category: 'Electronics' },
    { id: 5, name: 'Accessory E', quantity: 75, price: 7.99, category: 'Accessories' },
  ]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });
  const [newItem, setNewItem] = useState({ name: '', quantity: '', price: '', category: '' });

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const handleAddItem = () => {
    if (newItem.name && newItem.quantity && newItem.price && newItem.category) {
      setInventory([...inventory, { ...newItem, id: inventory.length + 1 }]);
      setNewItem({ name: '', quantity: '', price: '', category: '' });
    }
  };

  const filteredInventory = inventory.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedInventory = [...filteredInventory].sort((a, b) => {
    if (sortConfig.key) {
      const aValue = a[sortConfig.key];
      const bValue = b[sortConfig.key];
      if (aValue < bValue) return sortConfig.direction === 'ascending' ? -1 : 1;
      if (aValue > bValue) return sortConfig.direction === 'ascending' ? 1 : -1;
    }
    return 0;
  });

  const getStockStatus = (quantity) => {
    if (quantity > 50) return 'bg-green-500';
    if (quantity > 20) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <Layout>
      <div className="bg-gray-50 p-8 rounded-lg shadow-sm mb-8">
        <h1 className="text-3xl font-semibold text-gray-800 mb-2">Inventory Dashboard</h1>
        <p className="text-gray-600">Streamlined stock management for your business</p>
      </div>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="bg-white border border-gray-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Total Items</CardTitle>
            <Package className="h-4 w-4 text-gray-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-800">{inventory.length}</div>
          </CardContent>
        </Card>
        <Card className="bg-white border border-gray-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Total Value</CardTitle>
            <DollarSign className="h-4 w-4 text-gray-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-800">
              ${inventory.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)}
            </div>
          </CardContent>
        </Card>
        <Card className="bg-white border border-gray-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Categories</CardTitle>
            <Tag className="h-4 w-4 text-gray-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-800">{new Set(inventory.map(item => item.category)).size}</div>
          </CardContent>
        </Card>
      </div>
      
      {/* Search and Add Item row */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center w-1/3">
          <Input
            type="text"
            placeholder="Search items..."
            value={searchTerm}
            onChange={handleSearch}
            className="mr-2 focus:ring-2 focus:ring-blue-200"
          />
          <Search className="text-gray-400" />
        </div>
        <Button onClick={() => document.getElementById('addItemForm').scrollIntoView({ behavior: 'smooth' })}
                className="bg-blue-600 hover:bg-blue-700 transition-colors duration-200">
          <Plus className="mr-2 h-4 w-4" /> Add New Item
        </Button>
      </div>
      
      {/* Inventory Table */}
      <Card className="mb-8 overflow-hidden border border-gray-200">
        <CardHeader className="bg-gray-50 border-b border-gray-200">
          <CardTitle className="text-gray-800">Inventory Items</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px] text-gray-600">ID</TableHead>
                <TableHead className="cursor-pointer text-gray-600 hover:bg-gray-100 transition-colors duration-200" onClick={() => handleSort('name')}>
                  Name {sortConfig.key === 'name' && <ArrowUpDown className="inline ml-2" size={16} />}
                </TableHead>
                <TableHead className="cursor-pointer text-gray-600 hover:bg-gray-100 transition-colors duration-200" onClick={() => handleSort('quantity')}>
                  Quantity {sortConfig.key === 'quantity' && <ArrowUpDown className="inline ml-2" size={16} />}
                </TableHead>
                <TableHead className="cursor-pointer text-gray-600 hover:bg-gray-100 transition-colors duration-200" onClick={() => handleSort('price')}>
                  Price {sortConfig.key === 'price' && <ArrowUpDown className="inline ml-2" size={16} />}
                </TableHead>
                <TableHead className="cursor-pointer text-gray-600 hover:bg-gray-100 transition-colors duration-200" onClick={() => handleSort('category')}>
                  Category {sortConfig.key === 'category' && <ArrowUpDown className="inline ml-2" size={16} />}
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sortedInventory.map((item) => (
                <TableRow key={item.id} className="hover:bg-gray-50 transition-colors duration-200">
                  <TableCell className="font-medium text-gray-900">{item.id}</TableCell>
                  <TableCell className="text-gray-800">{item.name}</TableCell>
                  <TableCell>
                    <Badge className={`${
                      item.quantity > 50 ? 'bg-green-100 text-green-800' :
                      item.quantity > 20 ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {item.quantity}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-gray-800">${item.price.toFixed(2)}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className="bg-gray-100 text-gray-800 border-gray-300">
                      {item.category}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Add New Item Form */}
      <Card id="addItemForm" className="border border-gray-200">
        <CardHeader className="bg-gray-50 border-b border-gray-200">
          <CardTitle className="text-gray-800">Add New Item</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <Input
              type="text"
              placeholder="Item name"
              value={newItem.name}
              onChange={(e) => setNewItem({...newItem, name: e.target.value})}
              className="focus:ring-2 focus:ring-blue-200"
            />
            <Input
              type="number"
              placeholder="Quantity"
              value={newItem.quantity}
              onChange={(e) => setNewItem({...newItem, quantity: e.target.value})}
              className="focus:ring-2 focus:ring-blue-200"
            />
            <Input
              type="number"
              placeholder="Price"
              value={newItem.price}
              onChange={(e) => setNewItem({...newItem, price: e.target.value})}
              className="focus:ring-2 focus:ring-blue-200"
            />
            <Input
              type="text"
              placeholder="Category"
              value={newItem.category}
              onChange={(e) => setNewItem({...newItem, category: e.target.value})}
              className="focus:ring-2 focus:ring-blue-200"
            />
          </div>
          <Button className="mt-4 bg-blue-600 hover:bg-blue-700 transition-colors duration-200" onClick={handleAddItem}>
            <Plus className="mr-2 h-4 w-4" /> Add Item
          </Button>
        </CardContent>
      </Card>
    </Layout>
  );
};

export default InventoryManagementPage;
