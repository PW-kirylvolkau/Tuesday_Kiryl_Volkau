import React from "react";
import styles from "./app.module.css";
import CustomerForm from "./components/CustomerForm/CustomerForm";

const App: React.FC<unknown> = () => {
  return (
    <div className={styles.app}>
        <CustomerForm />
    </div>
  );
};

export default App;
