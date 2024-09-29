import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import routes from "./routes/routes";
import { Provider } from "react-redux"; 
import store from "./stores/store"; 

function App() {
  return (
    <>
      <Provider store={store}>
        <Header />
        {routes}
        <Footer />
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </Provider>
    </>
  );
}

export default App;
