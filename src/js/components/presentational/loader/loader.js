import React from "react";
import { useSelector } from "react-redux";
import "./loader.css";

const LoaderComp = () => {
  const loading = useSelector(state => state.loadingReducer.loading)
  return loading ? (
    <div className="loader-wrapper">
      <div className="loader" />
    </div>
  ) : null;
};

export default LoaderComp;
