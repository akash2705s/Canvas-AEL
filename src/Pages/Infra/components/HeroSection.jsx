import EllipseBackground from '../../LandingPage/assets/hero-section/Ellipse 809.svg';
import HeroImage from '../../../assets/landing/hero14.png';
import CTAButton from '../../../components/CTAButton';
import useScrollAnimation from '../../../hooks/useScrollAnimation';
import '../styles/HeroSection.css';

const HeroSection = () => {
  const [sectionRef, isVisible] = useScrollAnimation();
  const [textRef, isTextVisible] = useScrollAnimation({ rootMargin: '-100px 0px' });
  const [imageRef, isImageVisible] = useScrollAnimation({ rootMargin: '-100px 0px' });


  return (
    <section ref={sectionRef} className={`hero-section fade-in-section ${isVisible ? 'visible' : ''}`}>
      {/* Ellipse background */}
      <div className="hero-background">
        <img src={EllipseBackground} alt="" className="hero-ellipse" />
      </div>
      <div className="hero-container">
        <div className="hero-content">
          <div ref={textRef} className={`hero-text slide-in-left ${isTextVisible ? 'visible' : ''}`}>
            <h1 className="hero-title">
              ADD RUNTIME INTERACTION <br /> TO YOUR STACK <br />
              — NO REBUILD REQUIRED
            </h1>
            <p className="hero-description">
              Enable moment-level interactivity across FAST, CTV <br />and live without touching SSAI or core infra.
            </p>
            <div className="hero-cta-container">
              <CTAButton
                name='Request Demo'
              />
            </div>
          </div>
          <div ref={imageRef} className={`hero-image slide-in-right ${isImageVisible ? 'visible' : ''}`}>
            <div className="hero-image-wrapper">
              <img
                src={HeroImage}
                alt="Canvas Hero"
                className="hero-image-element"
              />
              <span className="hero-image-label">
                Drop-in runtime module
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

