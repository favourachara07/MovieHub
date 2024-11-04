import { useState, useEffect, createContext, useContext } from 'react';
import { useLocation } from 'react-router-dom';

const ProgramContext = createContext();

export const ProgramProvider = ({ children }) => {
  const location = useLocation();
  const [program, setProgram] = useState(false); // Assume `false` is for "movies" by default
// syncing the url path to teh program
  useEffect(() => {
    // Set program based on the route when the component mounts or location changes
    if (location.pathname.startsWith('/series') || location.pathname.startsWith('/tv')) {
      setProgram(true); // True for series
    } else {
      setProgram(false); // False for movies
    }
  }, [location]);

  return (
    <ProgramContext.Provider value={{ program, setProgram }}>
      {children}
    </ProgramContext.Provider>
  );
};

export const useProgram = () => useContext(ProgramContext);
