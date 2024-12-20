import { useReadContract } from 'wagmi';
import { useAccount } from 'wagmi';
import { abi } from '@/contracts/abi';
import { useState, useEffect } from 'react';

const contractAddress = '0x8d401464c1FFDB0103C0B542337bfB21Fc260144';

export function useGetCompletedCourses() {
  const { address } = useAccount();
  const [completedCourses, setCompletedCourses] = useState<number[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {
    data,
    error: contractError,
    isPending,
  } = useReadContract({
    address: address,
    abi,
    functionName: 'getCompletedCourses',
    args: [address || ''], // Fallback empty string nếu không có địa chỉ
    query: {
      enabled: !!address, // Chỉ enable khi có địa chỉ
    },
  });

  // Theo dõi và cập nhật dữ liệu
  useEffect(() => {
    if (data) {
      setCompletedCourses(data as number[]);
      setIsLoading(false);
    }
  }, [data]);

  // Theo dõi lỗi
  useEffect(() => {
    if (contractError) {
      setError(contractError);
      setIsLoading(false);
    }
  }, [contractError]);

  // Theo dõi trạng thái loading
  useEffect(() => {
    setIsLoading(isPending);
  }, [isPending]);

  console.log(completedCourses);

  return {
    completedCourses,
    isLoading,
    error: error || contractError,
  };
}
