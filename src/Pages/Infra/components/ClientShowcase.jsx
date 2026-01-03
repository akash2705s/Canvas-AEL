import useScrollAnimation from '../../../hooks/useScrollAnimation';
import '../../PublisherPage/styles/ClientShowcase.css';
import InfillionLogo from '../../LandingPage/assets/client/infra/Infillion.png';
import AnokiLogo from '../../LandingPage/assets/client/infra/Anoki.png';
import OriginLogo from '../../LandingPage/assets/client/infra/Origin.png';
import CineverseLogo from '../../LandingPage/assets/client/infra/Cineverse.png';
import IABLogo from '../../LandingPage/assets/client/infra/IAB.png';
import SVTALogo from '../../LandingPage/assets/client/infra/SVTA.png';
import BitmovinLogo from '../../LandingPage/assets/client/infra/Bitmovin.png';
import GumgumLogo from '../../LandingPage/assets/client/infra/Gumgum.png';
import BitcentralLogo from '../../LandingPage/assets/client/infra/Bitcentral.png';

const ClientShowcase = () => {
    const [sectionRef, isVisible] = useScrollAnimation();
    const [titleRef, isTitleVisible] = useScrollAnimation({ rootMargin: '-100px 0px' });
    const [logosRef, isLogosVisible] = useScrollAnimation({ rootMargin: '-100px 0px' });

    // Client logos
    const clientLogos = [
        { name: 'Infillion', logo: InfillionLogo },
        { name: 'Anoki', logo: AnokiLogo },
        { name: 'Origin', logo: OriginLogo },
        { name: 'Cineverse', logo: CineverseLogo },
        { name: 'IAB', logo: IABLogo },
        { name: 'SVTA', logo: SVTALogo },
        { name: 'Bitmovin', logo: BitmovinLogo },
        { name: 'Gumgum', logo: GumgumLogo },
        { name: 'Bitcentral', logo: BitcentralLogo },
    ];

    return (
        <section ref={sectionRef} className={`client-showcase-section fade-in-section ${isVisible ? 'visible' : ''}`}>
            <div className="client-showcase-container">
                <h2 ref={titleRef} className={`client-showcase-title fade-in-section ${isTitleVisible ? 'visible' : ''}`}>
                    Built for modern CTV infrastructure
                </h2>
                <p className="client-showcase-subtitle">
                    FAST • Broadcast • CMS • SSAI • Player stacks
                </p>

                <div ref={logosRef} className={`client-showcase-logos scale-in ${isLogosVisible ? 'visible' : ''}`}>
                    <div className="client-logos-grid">
                        {clientLogos.length > 0 ? (
                            clientLogos.map((client, index) => (
                                <div key={index} className={`client-logo-item ${index === 8 ? 'client-logo-item-center' : ''}`}>
                                    <img
                                        src={client.logo}
                                        alt={client.name}
                                        className={`client-logo-image ${client.name === 'Bitmovin' || client.name === 'Origin' ? 'client-logo-large' : ''}`}
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

