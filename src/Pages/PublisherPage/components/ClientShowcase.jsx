import useScrollAnimation from '../../../hooks/useScrollAnimation';
import '../styles/ClientShowcase.css';
import TheDrapersLogo from '../../LandingPage/assets/details-section/the-drapers.svg';
import TheHinduLogo from '../../LandingPage/assets/details-section/the-hindu.svg';
import SteveAILogo from '../../LandingPage/assets/client/publisher/Steve AI.png';
import OTTStudioLogo from '../../LandingPage/assets/client/publisher/OTT_Studio.png';
import OneStudioLogo from '../../LandingPage/assets/client/publisher/One Studio.png';
import FLSLogo from '../../LandingPage/assets/client/publisher/FLS.png';
import BitcentralLogo from '../../LandingPage/assets/client/publisher/Bitcentral.png';
import AnimakerLogo from '../../LandingPage/assets/client/publisher/Animaker small.png';

const ClientShowcase = () => {
    const [sectionRef, isVisible] = useScrollAnimation();
    const [titleRef, isTitleVisible] = useScrollAnimation({ rootMargin: '-100px 0px' });
    const [logosRef, isLogosVisible] = useScrollAnimation({ rootMargin: '-100px 0px' });

    // Client logos
    const clientLogos = [
        { name: 'The Drapers', logo: TheDrapersLogo },
        { name: 'The Hindu', logo: TheHinduLogo },
        { name: 'Steve AI', logo: SteveAILogo },
        { name: 'OTT Studio', logo: OTTStudioLogo },
        { name: 'One Studio', logo: OneStudioLogo },
        { name: 'FLS', logo: FLSLogo },
        { name: 'Bitcentral', logo: BitcentralLogo },
        { name: 'Animaker', logo: AnimakerLogo },
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
                                    <img
                                        src={client.logo}
                                        alt={client.name}
                                        className={`client-logo-image ${client.name === 'The Drapers' ||
                                            client.name === 'The Hindu' ||
                                            client.name === 'OTT Studio' ||
                                            client.name === 'FLS'
                                            ? 'client-logo-publisher-large'
                                            : client.name === 'Steve AI' ||
                                                client.name === 'One Studio'
                                                ? 'client-logo-steve-one-large'
                                                : client.name === 'Animaker'
                                                    ? 'client-logo-animaker-large'
                                                    : ''
                                            }`}
                                    />
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

