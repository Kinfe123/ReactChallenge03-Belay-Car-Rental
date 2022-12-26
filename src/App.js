
import './App.css';
import Car from './assests/car.png'
import CarTwo from './assests/test.png'
//this is the decclaration point for the rest of the appliaction


function App() {
  return (
    <div className="App">
      <div className='container'>
        <h3 className='bc'>BC. <span className='renting'>Belay Car Renting</span></h3>
        <div className="links">
          <a href="#">Home</a>
          <a href="#">Pricing</a>
          <a href="#">About</a>
          <a href="#">Become a member</a>

        </div>


      </div>

      <div className='container-for-hero-forbelay'>
        <div className='hero-forbelay'>
          <h1>Rent An Automobile from</h1>
          <h1 className='bottom-belay'>Belay Car Now!</h1>
          <p>Enjoy your new vaccaation, Business Trip or Weekend Drive Like Never Before</p>
          <div className='btns-forbelay'>
            <a href='#' className='explore-listing'>Explore Listing<span className='spanforarrow'></span> </a>
          </div>
        </div>
        <div className="images-forbelay">
          <img src={CarTwo} alt='Car Image' />
        </div>

      </div>


    </div>
  );
}

export default App;