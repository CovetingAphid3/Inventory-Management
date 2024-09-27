import React from 'react';
import Layout from './Layout';
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";

const Settings = () => {
  return (
    <Layout>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Settings</h1>

      <Card className="max-w-2xl">
        <CardHeader>
          <CardTitle>Company Information</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <label htmlFor="companyName">Company Name</label>
                <Input id="companyName" placeholder="Enter your company name" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <label htmlFor="email">Email</label>
                <Input id="email" placeholder="Enter your email" type="email" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <label htmlFor="phone">Phone</label>
                <Input id="phone" placeholder="Enter your phone number" type="tel" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <label htmlFor="address">Address</label>
                <Input id="address" placeholder="Enter your address" />
              </div>
              <Button type="submit">Save Changes</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </Layout>
  );
};

export default Settings;
