
const Home = () =>{
    return <main className="home container">
        {/* Home content section */}
        <div className="home-content">
            <h1>YOUR FEET DESERVE THE BEST</h1>
            <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>

            <div className="home-btn">
                <button>Shop Now </button>
                <button className="secondary-btn">Category </button>
            </div>
            <div className="shopping">
                <p>Also Available On </p>

                <div className="brand-icon">
                    <img src="/images/flipkart.png" alt="flipkart-logo" />
                    <img src="/images/amazon.png" alt="amazon-logo" />
                </div>
            </div>
        </div>
        {/* Home Image section */}
        <div className="home-image">
        <img src="/images/shoe_image.png" alt="home-logo" />
        </div>
    </main>
}

export default Home;