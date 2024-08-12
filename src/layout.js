import Navbar from './pages/navbar';
//import styles from './Layout.module.css'; // Ensure this file exists if you are using it

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main className={styles.mainContent}>{children}</main>
    </div>
  );
};

export default Layout;