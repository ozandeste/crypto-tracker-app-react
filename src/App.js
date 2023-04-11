import styles from "./App.module.css";
import CryptoTracker from "./components/CryptoTracker";

function App() {
  return (
    <div className={styles.ct}>
      <CryptoTracker />
    </div>
  );
}

export default App;
