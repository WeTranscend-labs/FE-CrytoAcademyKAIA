import { useWriteContract, useWaitForTransactionReceipt } from 'wagmi';
import { abi } from '@/contracts/abi';
import { MintCertificateArgs } from '@/types/contexts/SmartContractContextType';

const contractAddress = '0x8d401464c1FFDB0103C0B542337bfB21Fc260144';

export function useMintCertificate() {
  // Set up the contract write function
  const { data: hash, error, isPending, writeContract } = useWriteContract();

  const mintCertificate = async ({
    courseId,
    courseName,
    metadata,
  }: MintCertificateArgs) => {
    try {
      writeContract({
        address: contractAddress,
        abi,
        functionName: 'mintCertificate',
        args: [courseId, courseName, metadata],
      });

      // Wait for the transaction to be confirmed
    } catch (err) {
      console.error(err);
      throw err; // Rethrow the error if needed
    }
  };

  // Call useWaitForTransactionReceipt at the top level of the hook
  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({
      hash,
    });

  return { mintCertificate, isPending, hash, isConfirming, isConfirmed, error };
}
