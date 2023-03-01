import Main from '../components/Main';
import Accordion from '../components/Accordion';
import Form from '../components/Contact';
import Footer from '../components/Footer';
import Donators from'../routes/Donaters';

function App() {
  return (
    <div className='App'>
      <Main />
      <Form />
      <Donators/>
      <Accordion />
     
      <Footer />
    </div>
  );
}

export default App;
