import Card from './components/Card';
import Content from './components/Content';
import OurNumbers from './components/OurNumbers';
import Container from 'react-bootstrap/Container';

import './css/style.css';
import FooterComponent from './components/FooterComponent';
import HeaderPage from './components/HeaderPage';
import Orbit from './components/Orbit';
import { Vector2Image,Vector3Image,cardimage5Image,cardimage4Image,
  VectorImage,cardimage1Image,cardimage2Image,cardimage3Image,cardperson1Image,
  cardperson2Image,cardperson3Image,orbitaimage1Image,orbitaimage2Image,orbitaimage3Image,
  orbitaimage4Image,orbitaimage5Image,orbitaimage6Image } from './utils/constImages';
  import 'bootstrap/dist/css/bootstrap.min.css';
import { infoMock } from './utils/InfoMock';
function App() {
  
  console.log(infoMock[0].logo)
  const imagesCards = [cardimage1Image,cardimage5Image,cardimage2Image,cardimage4Image,cardimage3Image]
  const personCards = [cardperson1Image,cardperson2Image,cardperson3Image]
  return (
    <Container>
      <div className='mainDiv'>
      <HeaderPage/>
      <div> 
      {/* <h4 className="TOKEN">NON FUNGIBLE TOKENS</h4> */}
        <Orbit></Orbit>
        
      </div>
      <body>
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
    </Container>
    
  );
}

export default App;
