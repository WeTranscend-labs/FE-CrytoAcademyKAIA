'use client';

import { WalletContextType } from '@/types/contexts/WalletContextType';
import { createContext } from 'react';

const WalletContext = createContext<any>(null!);

export default WalletContext;
