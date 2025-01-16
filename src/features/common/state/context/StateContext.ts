import { createContext } from 'react';
import type { StateData } from '../types';
export const StateContext = createContext<StateData | null>(null);
