import { Container} from 'react-bootstrap';
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Main from "../Components/Main";

const Home = () => {

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      
      <Main />
      
      <Footer />
    </div>
  );
};

export default Home;