import './App.css';
import Banner from './components/home/Banner';
import Footer from './components/home/Footer';
import Foundations from './components/home/Foundations';
import Header from './components/home/Header';
import Team from './components/home/Team';

const App = () => {
  return (
    <>
      <Header />
    
      <Banner />
      <Foundations />
      {/* <Team /> */}
      <Footer />
    </>
  );
};

export default App;
