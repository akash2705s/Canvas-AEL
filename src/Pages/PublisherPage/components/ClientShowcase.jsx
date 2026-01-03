import useScrollAnimation from '../../../hooks/useScrollAnimation';
import '../styles/ClientShowcase.css';
import MathrubhumiLogo from '../../LandingPage/assets/details-section/mathrubhumi.svg';
import TheDrapersLogo from '../../LandingPage/assets/details-section/the-drapers.svg';
import TheHinduLogo from '../../LandingPage/assets/details-section/the-hindu.svg';
import HPLogo from '../../LandingPage/assets/client/hp.svg';
import OTTStudioLogo from '../../LandingPage/assets/client/ott_studio.svg';
import FmPlusLogo from '../../LandingPage/assets/client/Fmplus.svg';
import SteveAILogo from '../../LandingPage/assets/client/steveai.svg';
import FLSLogo from '../../LandingPage/assets/client/FLS.svg';

const ClientShowcase = () => {
    const [sectionRef, isVisible] = useScrollAnimation();
    const [titleRef, isTitleVisible] = useScrollAnimation({ rootMargin: '-100px 0px' });
    const [logosRef, isLogosVisible] = useScrollAnimation({ rootMargin: '-100px 0px' });

    // Client logos
    const clientLogos = [
        { name: 'Mathrubhumi', logo: MathrubhumiLogo },
        { name: 'The Drapers', logo: TheDrapersLogo },
        { name: 'The Hindu', logo: TheHinduLogo },
        { name: 'HP', logo: HPLogo },
        { name: 'OTT Studio', logo: OTTStudioLogo },
        { name: 'FmPlus', logo: FmPlusLogo },
        { name: 'SteveAI', logo: SteveAILogo },
        { name: 'FLS', logo: FLSLogo },
    ];

    return (
        <section ref={sectionRef} className={`client-showcase-section fade-in-section ${isVisible ? 'visible' : ''}`}>
            <div className="client-showcase-container">
                <h2 ref={titleRef} className={`client-showcase-title fade-in-section ${isTitleVisible ? 'visible' : ''}`}>
                    A new interaction signal layer for streaming
                </h2>
                <p className="client-showcase-subtitle">
                    Adopted across the streaming ecosystem
                </p>

                <div ref={logosRef} className={`client-showcase-logos scale-in ${isLogosVisible ? 'visible' : ''}`}>
                    <div className="client-logos-grid">
                        {clientLogos.length > 0 ? (
                            clientLogos.map((client, index) => (
                                <div key={index} className="client-logo-item">
                                    <img src={client.logo} alt={client.name} className="client-logo-image" />
                                </div>
                            ))
                        ) : (
                            <div className="client-logos-placeholder">
                                {/* Logos will be added here */}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ClientShowcase;

