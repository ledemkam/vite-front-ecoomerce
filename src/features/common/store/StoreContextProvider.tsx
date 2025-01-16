import { useReducer } from 'react';
import { reducer } from '../reducer';
import { initialState } from '../state/initialState';
const StoreContextProvider = () => {
const [state, dispatch] = useReducer(reducer, initialState);

return (
    <StateContext.Provider value={state}>
    <DispatchContext.Provider value={dispatch}>
    {children}
    </DispatchContext.Provider>
    </StateContext.Provider>
   );
   
};
export default StoreContextProvider;