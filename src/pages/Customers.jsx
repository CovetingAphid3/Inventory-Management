import React from 'react';
import Layout from './Layout';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Search, Plus } from 'lucide-react';

const customersData = [
  { id: 1, name: 'John Doe', email: 'john@example.com', totalOrders: 5, totalSpent: 500 },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', totalOrders: 3, totalSpent: 300 },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', totalOrders: 7, totalSpent: 750 },
  { id: 4, name: 'Alice Brown', email: 'alice@example.com', totalOrders: 2, totalSpent: 150 },
  { id: 5, name: 'Charlie Davis', email: 'charlie@example.com', totalOrders: 4, totalSpent: 400 },
];

const Customers = () => {
  return (
    <Layout>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Customers</h1>

      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center w-1/3">
          <Input
            type="text"
            placeholder="Search customers..."
            className="mr-2"
          />
          <Search className="text-gray-400" />
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Add New Customer
        </Button>
      </div>

      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Total Orders</TableHead>
              <TableHead>Total Spent</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {customersData.map((customer) => (
              <TableRow key={customer.id}>
                <TableCell>{customer.id}</TableCell>
                <TableCell>{customer.name}</TableCell>
                <TableCell>{customer.email}</TableCell>
                <TableCell>{customer.totalOrders}</TableCell>
                <TableCell>${customer.totalSpent.toFixed(2)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Layout>
  );
};

export default Customers;
