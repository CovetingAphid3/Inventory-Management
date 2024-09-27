import React from 'react';
import Layout from './Layout';
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Download } from 'lucide-react';

const Reports = () => {
  return (
    <Layout>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Reports</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Inventory Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">A comprehensive summary of your current inventory status.</p>
            <Button>
              <Download className="mr-2 h-4 w-4" /> Download Report
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Sales Analysis</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Detailed analysis of sales trends and performance.</p>
            <Button>
              <Download className="mr-2 h-4 w-4" /> Download Report
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Customer Insights</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">In-depth look at customer behavior and preferences.</p>
            <Button>
              <Download className="mr-2 h-4 w-4" /> Download Report
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Financial Statement</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Financial overview including revenue, expenses, and profits.</p>
            <Button>
              <Download className="mr-2 h-4 w-4" /> Download Report
            </Button>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Reports;
