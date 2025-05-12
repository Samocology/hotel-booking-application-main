"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const DashboardPercentage = () => {
  const [percentage, setPercentage] = useState(20);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPercentage = async () => {
      try {
        const { data } = await axios.get("/api/vendor/payment/split-config");
        setPercentage(data.platformShare || 20);
      } catch (error) {
        console.error(error);
        toast.error("Failed to fetch dashboard percentage.");
      }
    };

    fetchPercentage();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (percentage < 0 || percentage > 100) {
      toast.error("Percentage must be between 0 and 100.");
      return;
    }

    try {
      setLoading(true);
      await axios.post("/api/vendor/payment/split-config", {
        platformShare: percentage,
        vendorShare: 100 - percentage,
      });
      toast.success("Dashboard percentage updated!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to update percentage.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-2xl">
      <h2 className="text-xl font-semibold mb-4">Set Dashboard Percentage</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="number"
          value={percentage}
          onChange={(e) => setPercentage(Number(e.target.value))}
          className="w-full border p-2 rounded"
          min={0}
          max={100}
          required
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
        >
          {loading ? "Updating..." : "Update Percentage"}
        </button>
      </form>
    </div>
  );
};

export default DashboardPercentage;
