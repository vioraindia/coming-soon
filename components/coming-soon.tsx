"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Building, Send, CheckCircle, Globe } from "lucide-react";
import { apiConnector } from "@/lib/apiConnector"; // Assuming you have this API helper
import Link from "next/link";

export function ComingSoonComponent() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState(""); // To track errors

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(""); // Reset error message on new submission

    console.log("Email submitted:", email);

    try {
      // Call your API here (adjust the URL based on your actual backend)
      await apiConnector(
        "POST",
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/websites/create`,
        { website: "viora-india", email }
      );
      setIsSubmitted(true);
      setEmail("");
    } catch (e) {
      console.error(e);
      setErrorMessage("Something went wrong. Please try again later."); // Set error message
    }
  };

  const subsidiaries = [
    { name: "Viora Tech", description: "Website Creation Services", link: "https://www.vioratech.in" },
    { name: "Waimers", description: "Premium Mice/Keyboards", link: "https://www.waimers.in" },
  ];

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 text-gray-800 p-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <Building className="w-16 h-16 text-gray-700 mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Viora India</h1>
        <h2 className="text-2xl font-semibold text-gray-600 mb-4">
          Empowering Digital Innovation
        </h2>
        <p className="text-lg text-gray-600 mb-4 max-w-2xl mx-auto">
          {`As the parent company of Viora Tech and Waimers, we're at the forefront of technological advancement. 
          Our mission is to drive innovation and deliver exceptional digital solutions.`}
        </p>
        <div className="text-xl font-bold text-gray-700 mb-8">Coming Soon</div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 w-full max-w-2xl"
      >
        {subsidiaries.map((subsidiary, index) => (
          <Link href={`${subsidiary.link}`} key={index}>
            <Card className="bg-white shadow-sm border border-gray-200">
              <CardContent className="flex flex-col items-center p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {subsidiary.name}
                </h3>
                <p className="text-center text-gray-600">
                  {subsidiary.description}
                </p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="w-full max-w-md"
      >
        {!isSubmitted ? (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-2"
          >
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-grow"
              required
              aria-label="Email address"
            />
            <Button
              type="submit"
              className="bg-gray-800 hover:bg-gray-700 text-white"
            >
              <Send className="w-4 h-4 mr-2" />
              Get Notified
            </Button>
          </form>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center justify-center bg-green-50 text-green-700 p-4 rounded-md border border-green-200"
          >
            <CheckCircle className="w-6 h-6 mr-2" />
            <span>{`Thank you! We'll keep you updated on our launch.`}</span>
          </motion.div>
        )}

        {/* Error message display */}
        {errorMessage && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-4 flex items-center justify-center bg-red-100 text-red-700 p-4 rounded-md border border-red-200"
          >
            <span>{errorMessage}</span>
          </motion.div>
        )}
      </motion.div>

      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-12 text-sm text-gray-500 flex items-center"
      >
        <Globe className="w-4 h-4 mr-2" />
        <span>
          © {new Date().getFullYear()} Viora India. All rights reserved.
        </span>
      </motion.footer>
    </div>
  );
}
