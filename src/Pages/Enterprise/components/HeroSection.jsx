import EllipseBackground from '../../LandingPage/assets/hero-section/Ellipse 809.svg';
import HeroVideo from '../../../assets/Videos/enterprise/video50.mp4';
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
              Turn CTV Ads Into Measurable Actions — Not Just Reach
            </h1>
            <p className="hero-description">
              Capture real viewer intent inside CTV ads, in-session, across premium publisher inventory.
            </p>
            <div className="hero-cta-container">
              <CTAButton
                name='Request Demo'
              />
            </div>
          </div>
          <div ref={imageRef} className={`hero-image slide-in-right ${isImageVisible ? 'visible' : ''}`}>
            <div style={{ position: 'relative' }}>
              <video
                src={HeroVideo}
                className="hero-video"
                autoPlay
                loop
                muted
                playsInline
              />
              <span style={{
                position: 'absolute',
                bottom: '16px',
                left: '50%',
                transform: 'translateX(-50%)',
                fontFamily: 'var(--font-family-montserrat)',
                fontWeight: 400,
                fontSize: '13px',
                color: '#ffffff',
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                padding: '8px 16px',
                borderRadius: '6px',
                letterSpacing: '0.02em',
                whiteSpace: 'nowrap'
              }}>
                In-session choice • Runtime signal • No QR dependency
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

