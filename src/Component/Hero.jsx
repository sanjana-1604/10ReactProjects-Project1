const Hero = ()=>
    {
        return(
            <main className="hero container">
                <div className="hero-content">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>
                    Your feet deserves the best and We are here to help with our shoes. 
                </p>
                <div className="hero-btn">
                    <button>Shop Now </button>
                    <button className="secondary-btn">Category</button>
                </div>
                <p>Also Available On</p>
                <div className="shopping">
                    <img src="/flipkart.png"></img>
                    <img src="/amazon.png"></img>
                </div>
                 
            </div>
            <div className="hero-image">
            <img src="/shoe_image.png"></img>
                 </div>
            
            </main>
        );
    };
    export default Hero;