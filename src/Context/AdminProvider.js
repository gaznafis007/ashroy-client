import React, { createContext, useState } from "react";

const AdminProvider = ({ children }) => {
  const AdminContext = createContext();
  const [admin, setAdmin] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);
  const value = {
    admin,
    setAdmin,
    error,
    setError,
    loading,
    setLoading,
  };
  return (
    <AdminContext.Provider value={value}>{children}</AdminContext.Provider>
  );
};

export default AdminProvider;
