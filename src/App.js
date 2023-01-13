import { useState } from "react";
import Counter from "./components/Counter";

// import './App.css';
import styles from "./App.module.css";

function App() {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    if (count === 0) {
      return alert("دیگه منفی نباشیم بهتره");
    }

    setCount(count - 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  const myStyle = { color: "aqua", border: "1px solid red" };

  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>
        <h1 style={myStyle}>شمارنده من</h1>
      </header>
      <Counter
        inc={increaseCount}
        dec={decreaseCount}
        rest={resetCount}
        count={count}
      />
    </div>
  );
}

export default App;
