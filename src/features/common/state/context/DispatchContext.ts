import { createContext } from 'react';
import type { Dispatch } from 'react';
import type { ActionData } from 'features/common/actions/types';

export const DispatchContext = createContext<Dispatch<ActionData> | null>(null);