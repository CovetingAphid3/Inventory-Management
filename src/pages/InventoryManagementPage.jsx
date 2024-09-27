import React, { useState } from 'react';
import Layout from './Layout';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Plus, Search, ArrowUpDown } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";

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

  return (
    <Layout>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Inventory Management</h1>
      
      {/* Search and Add Item row */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center w-1/3">
          <Input
            type="text"
            placeholder="Search items..."
            value={searchTerm}
            onChange={handleSearch}
            className="mr-2"
          />
          <Search className="text-gray-400" />
        </div>
        <Button onClick={() => document.getElementById('addItemForm').scrollIntoView({ behavior: 'smooth' })}>
          <Plus className="mr-2 h-4 w-4" /> Add New Item
        </Button>
      </div>
      
      {/* Inventory Table */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Inventory Items</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">ID</TableHead>
                <TableHead className="cursor-pointer" onClick={() => handleSort('name')}>
                  Name {sortConfig.key === 'name' && <ArrowUpDown className="inline ml-2" size={16} />}
                </TableHead>
                <TableHead className="cursor-pointer" onClick={() => handleSort('quantity')}>
                  Quantity {sortConfig.key === 'quantity' && <ArrowUpDown className="inline ml-2" size={16} />}
                </TableHead>
                <TableHead className="cursor-pointer" onClick={() => handleSort('price')}>
                  Price {sortConfig.key === 'price' && <ArrowUpDown className="inline ml-2" size={16} />}
                </TableHead>
                <TableHead className="cursor-pointer" onClick={() => handleSort('category')}>
                  Category {sortConfig.key === 'category' && <ArrowUpDown className="inline ml-2" size={16} />}
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sortedInventory.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">{item.id}</TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.quantity}</TableCell>
                  <TableCell>${item.price.toFixed(2)}</TableCell>
                  <TableCell>{item.category}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Add New Item Form */}
      <Card id="addItemForm">
        <CardHeader>
          <CardTitle>Add New Item</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <Input
              type="text"
              placeholder="Item name"
              value={newItem.name}
              onChange={(e) => setNewItem({...newItem, name: e.target.value})}
            />
            <Input
              type="number"
              placeholder="Quantity"
              value={newItem.quantity}
              onChange={(e) => setNewItem({...newItem, quantity: e.target.value})}
            />
            <Input
              type="number"
              placeholder="Price"
              value={newItem.price}
              onChange={(e) => setNewItem({...newItem, price: e.target.value})}
            />
            <Input
              type="text"
              placeholder="Category"
              value={newItem.category}
              onChange={(e) => setNewItem({...newItem, category: e.target.value})}
            />
          </div>
          <Button className="mt-4" onClick={handleAddItem}>
            <Plus className="mr-2 h-4 w-4" /> Add Item
          </Button>
        </CardContent>
      </Card>
    </Layout>
  );
};

export default InventoryManagementPage;
