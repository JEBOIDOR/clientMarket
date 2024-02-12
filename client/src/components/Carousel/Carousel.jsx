import "./Carousel.css";

const Carousel = () => {
  return (
    <div className="carousel-container">
      <div className="carousel-content">
        <div className="section-container">
          <section className="section-left">
            <img src="./img/setup.jpg" alt="" />
          </section>
          <section className="section-right">
            <h1>
              ABOUT <span className="title-text">US</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              maxime cum blanditiis necessitatibus ipsam aperiam quisquam
              placeat aspernatur sint minima, iure labore non quo quas
              exercitationem sequi ad minus deserunt. <br />
              <br /> possimus commodi, ut quae nobis. Rem excepturi qui at
              fugiat deserunt dolorem, ipsa dolorum ipsam. Maxime quam laborum
              dignissimos!
            </p>
            <div className="button-container">
              <button className="button-contactUs">Contact us</button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
