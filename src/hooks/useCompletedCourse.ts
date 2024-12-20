"use client";

import { abi } from "@/contracts/abi";
import { useState, useEffect } from "react";

import type { Address } from "viem";
import { useReadContract } from "wagmi";

const CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS;

export function useCompletedCourses(address: string | undefined) {
  const [completedCourses, setCompletedCourses] = useState<number[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    console.log(completedCourses, address);
  }, [completedCourses, address]);
  const { data, isLoading, isError } = useReadContract({
    address: "0xFce824e8E0e522E10cA6709FdA89b931CDEDeC4E",
    abi: abi,
    functionName: "getCompletedCourses",
    args: address ? [address] : undefined,
    // enabled: Boolean(address),
  });

  useEffect(() => {
    if (data) {
      try {
        // Convert BigInt array to number array
        const courses = (data as bigint[]).map((id) => Number(id));
        setCompletedCourses(courses);
        setError(null);
      } catch (err) {
        console.error("Error parsing completed courses:", err);
        setError("Failed to load completed courses");
      }
    }
    setLoading(isLoading);
  }, [data, isLoading]);

  return {
    completedCourses,
    loading,
    error,
    isError,
  };
}
