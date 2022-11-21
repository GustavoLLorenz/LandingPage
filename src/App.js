import Card from './components/Card';
import Content from './components/Content';
import OurNumbers from './components/OurNumbers';
import './css/style.css';
import FooterComponent from './components/FooterComponent';
import HeaderPage from './components/HeaderPage';
import Orbit from './components/Orbit';

  import 'bootstrap/dist/css/bootstrap.min.css';
import { infoMock } from './utils/InfoMock';
function App() {
  
  return (
    <div>
      <div className='mainDiv'>
      <HeaderPage/>
      <body>
      <div> 
        <Orbit/>
      </div>
        <h2 className='titleApp'> Latest live auctions</h2>
      <ul className='cardsSection'>
        {infoMock.map((item) => 
        <Card value={item.value}
         logo={item.logo}
        buttonText={item.buttonText}
        timeStamp={item.timeStamp}
        personIcon={item.personIcon}
        personIcon1={item.personIcon1}
        personIcon2={item.personIcon2}
        customText={item.customText}

        />)}
      
      </ul>
      <Content/>
      <OurNumbers/>
      </body>
      <FooterComponent/>
    </div>
    </div>
    
  );
}

export default App;
