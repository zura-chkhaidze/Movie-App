import React, { createContext, useContext, useReducer, useEffect } from "react";
import { getMovies } from "../../api/movies";

const MovieContext = createContext();

const initialState = {
  movieData: null,
  error: null,
  loading: true,
};

const movieReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        ...state,
        movieData: action.payload,
        loading: false,
      };
    case "FETCH_ERROR":
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

const MovieContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(movieReducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getMovies();
        dispatch({ type: "FETCH_SUCCESS", payload: data });
      } catch (error) {
        dispatch({ type: "FETCH_ERROR", payload: error.message });
      }
    };

    fetchData();
  }, []);

  return (
    <MovieContext.Provider value={{ ...state }}>
      {children}
    </MovieContext.Provider>
  );
};

const useMovieContext = () => {
  const context = useContext(MovieContext);
  if (!context) {
    throw new Error("useMovieContext must be used right");
  }
  return context;
};

export { MovieContextProvider, useMovieContext };
