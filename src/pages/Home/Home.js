import cloudMain from '../../assets/Cloud.jpg'
import articleOne from '../../assets/article1.jpg'
import articleTwo from '../../assets/article2.jpg'
import articleFour from '../../assets/article4.jpg'
import './Home.css';
import Cards from '../../components/cards/Cards';


const Home = () => {
    return (
        <div className='mainDiv'>


            <div>
                <div id="carouselExampleDark" className="carousel carousel-dark slide " data-bs-ride="carousel">
                    <div className="carousel-indicators ">
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner ">
                        <div className="carousel-item active" data-bs-interval="10000">
                            <div className=" ">
                                <h2>Most read articles</h2>
                            </div>
                            <div className='d-block w-75 itemAlign'>
                                <Cards />
                            </div>

                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                            <div className=" ">
                                <h2>Selections from authors</h2>
                            </div>
                            <div className='d-block w-75 itemAlign'>
                                <Cards />
                            </div>

                        </div>
                        <div className="carousel-item">
                        <div className=" ">
                                <h2>Most visited article app since 2019</h2>
                            </div>
                            <img src={articleFour} className="d-block w-75 itemAlign ilomilo" alt="..." />

                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
      </div >
    )
}

export default Home