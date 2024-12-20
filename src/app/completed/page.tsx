'use client';

import { useAccount, useContractRead } from 'wagmi';
import { useEffect, useState } from 'react';
import { abi } from '@/contracts/abi'; // Make sure to adjust the path to your ABI file
import type { Address } from 'viem';

const contractAddress = '0x8d401464c1FFDB0103C0B542337bfB21Fc260144';

const CompletedCourses = () => {
  const { address } = useAccount(); // Get the connected wallet address
  const [completedCourses, setCompletedCourses] = useState([]);

  // Use wagmi's useContractRead to call the getCompletedCourses function
  const { data } = useContractRead({
    address: '0x8d401464c1ffdb0103c0b542337bfb21fc260144' as Address,
    abi: abi,
    functionName: 'getCompletedCourses',
    args: [address],
    enabled: Boolean(address),
  });

  useEffect(() => {
    // setCompletedCourses(data);
    console.log(data);
  }, [data]);

  // if (isLoading) return <div>Loading...</div>;
  // if (isError) return <div>Error loading completed courses.</div>;

  return (
    <div>
      <h2>Completed Courses</h2>
      {/* {completedCourses.length > 0 ? (
        <ul>
          {completedCourses.map((courseId) => (
            <li key={courseId.toString()}>Course ID: {courseId.toString()}</li>
          ))}
        </ul> */}
      {/* ) : (
        <p>No completed courses found.</p>
      )} */}
    </div>
  );
};

export default CompletedCourses;
