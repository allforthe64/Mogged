import './home.css';
import saitama from './assets/saitama.jpg';

function Home() {
    return (
        <div>
            <nav className='nav'>

            </nav>
            <div className='main-image'>
                <img id='home-img' src={saitama} alt='Dank Cover Shot'></img>
            </div>
        </div> 
    );
}

export default Home;