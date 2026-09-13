import { FiArrowRight } from "react-icons/fi";
import bannerStack from "../assets/banner-stack.png";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">

        <div className="hero-content">

          <h1>
            Build Your Ideal
            <span>Development Stack</span>
          </h1>

          <p>
          Explore frontend,backend,database,and tooling options,
          compare them side,and put together the stack that fits your next project.
          </p>

          <div className="hero-buttons">
            <a href="#technologies" className="primary-btn">
              Explore Technologies
              <FiArrowRight />
            </a>

            <a href="#about" className="secondary-btn">
              Learn More
            </a>
          </div>

        </div>

        <div className="hero-image">
          <img
            src={bannerStack}
            alt="Dev Stack Technologies"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;