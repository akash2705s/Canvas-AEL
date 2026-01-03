import useScrollAnimation from '../../../hooks/useScrollAnimation';
import '../styles/BrandsValueSection.css';
import Logo1 from '../../LandingPage/assets/client/logo/1.png';
import Logo2 from '../../LandingPage/assets/client/logo/2.png';
import Logo3 from '../../LandingPage/assets/client/logo/3.png';
import Logo4 from '../../LandingPage/assets/client/logo/4.png';

const BrandsValueSection = () => {
    const [sectionRef, isVisible] = useScrollAnimation();
    const [titleRef, isTitleVisible] = useScrollAnimation({ rootMargin: '-100px 0px' });
    const [bulletsRef, isBulletsVisible] = useScrollAnimation({ rootMargin: '-100px 0px' });

    const valuePoints = [
        { text: "In-session intent (not post-click)", logo: Logo1 },
        { text: "Player-level behavior signals", logo: Logo2 },
        { text: "Deterministic interaction data", logo: Logo3 },
        { text: "Works without QR dependency", logo: Logo4 }
    ];

    return (
        <section ref={sectionRef} className={`brands-value-section fade-in-section ${isVisible ? 'visible' : ''}`}>
            <div className="brands-value-container">
                <h2 ref={titleRef} className={`brands-value-title fade-in-section ${isTitleVisible ? 'visible' : ''}`}>
                    What brands get that CTV never offered
                </h2>
                
                <div ref={bulletsRef} className={`brands-value-bullets scale-in ${isBulletsVisible ? 'visible' : ''}`}>
                    {valuePoints.map((point, index) => (
                        <div key={index} className={`brands-value-item brands-value-item-${index + 1}`}>
                            <div className="brands-value-card-content">
                                <div className="brands-value-logo-wrapper">
                                    <img src={point.logo} alt="" className="brands-value-logo" />
                                </div>
                                <p className="brands-value-text">{point.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BrandsValueSection;

