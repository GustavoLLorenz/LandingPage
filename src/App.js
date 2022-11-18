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

function App() {
  const imagesCards = [cardimage1Image,cardimage5Image,cardimage2Image,cardimage4Image,cardimage3Image]
  const personCards = [cardperson1Image,cardperson2Image,cardperson3Image]
  return (
    <Container>
      <div className='mainDiv'>
      <HeaderPage/>
      <div> 
        <Orbit></Orbit>
        
      </div>
      <body>
        <h2> Latest live auctions</h2>
      <ul className='cardsSection'>
      <Card  value="enim, a etiam"
        logo={cardimage5Image}
        buttonText="2.55 ETH"
        timeStamp="12:15 min left"
        personIcon={cardperson1Image}
        personIcon1={cardperson2Image}
        personIcon2={cardperson3Image}
        customText="19 are people binding"
        />
        <Card value="Vulputate felis purus viverra morbi facilisi eget"
        logo={cardimage1Image}
        buttonText="3.19 ETH"
        timeStamp="2:41 min left"
        personIcon={cardperson1Image}
        personIcon1={cardperson2Image}
        personIcon2={cardperson3Image}
        customText="35 people are binding"
        />
                <Card value="Dui accumsan leo vestibulum ornare eu"
        logo={cardimage2Image}
        buttonText="1.11 ETH"
        timeStamp="22:59 min left"
        personIcon={cardperson1Image}
        personIcon1={cardperson2Image}
        personIcon2={cardperson3Image}
        customText="101 are people binding"
        />
        <Card value="Senectus adipiscing nascetur accumsan etiam"
        logo={cardimage4Image}
        buttonText="1.63 ETH"
        timeStamp="37:01 min left"
        personIcon={cardperson1Image}
        personIcon1={cardperson2Image}
        personIcon2={cardperson3Image}
        customText="12 are people binding"
        />
         <Card value="Mattis at diam lorem nisl nam sed sociis"
        logo={cardimage3Image}
        buttonText="1.63 ETH"
        timeStamp="12:15 min left"
        personIcon={cardperson1Image}
        personIcon1={cardperson2Image}
        personIcon2={cardperson3Image}
        customText="19 are people binding"
        />
  
      
        
{/*         {imagesCards.map((item) => <Card logo={item} value="1randomText"
        buttonText="1.11ETH"
        timeSamp="2:41 min"
        personIcon={cardperson1Image}
        personIcon1={cardperson3Image}
        personIcon2={cardperson2Image}
        HearthImage={HearthImage}
        
        />)}  */}
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
