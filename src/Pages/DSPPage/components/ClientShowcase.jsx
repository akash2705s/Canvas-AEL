import useScrollAnimation from '../../../hooks/useScrollAnimation';
import '../../PublisherPage/styles/ClientShowcase.css';
import SabioLogo from '../../LandingPage/assets/client/dsp/Sabio.png';
import TheTradeDeskLogo from '../../LandingPage/assets/client/dsp/Thetradedesk.png';
import NextrollLogo from '../../LandingPage/assets/client/dsp/Nextroll.png';
import FireTVLogo from '../../LandingPage/assets/client/Env/firetv.svg';
import VizioLogo from '../../LandingPage/assets/client/Env/vizio.svg';
import RokuLogo from '../../LandingPage/assets/client/Env/roku.svg';
import SamsungLogo from '../../LandingPage/assets/client/Env/samsung.svg';
import LGLogo from '../../LandingPage/assets/client/Env/lg.svg';

const ClientShowcase = () => {
    const [sectionRef, isVisible] = useScrollAnimation();
    const [titleRef, isTitleVisible] = useScrollAnimation({ rootMargin: '-100px 0px' });
    const [logosRef, isLogosVisible] = useScrollAnimation({ rootMargin: '-100px 0px' });

    // Client logos
    const clientLogos = [
        { name: 'Sabio', logo: SabioLogo },
        { name: 'The Trade Desk', logo: TheTradeDeskLogo },
        { name: 'Nextroll', logo: NextrollLogo },
        { name: 'Fire TV', logo: FireTVLogo },
        { name: 'Vizio', logo: VizioLogo },
        { name: 'Roku', logo: RokuLogo },
        { name: 'Samsung', logo: SamsungLogo },
        { name: 'LG', logo: LGLogo },
    ];

    return (
        <section ref={sectionRef} className={`client-showcase-section fade-in-section ${isVisible ? 'visible' : ''}`}>
            <div className="client-showcase-container">
                <h2 ref={titleRef} className={`client-showcase-title fade-in-section ${isTitleVisible ? 'visible' : ''}`}>
                    Already live across the streaming ecosystem
                </h2>
                <p className="client-showcase-subtitle">
                    OEMs • OTT & FAST publishers • Web players • DSP pilots
                </p>

                <div ref={logosRef} className={`client-showcase-logos scale-in ${isLogosVisible ? 'visible' : ''}`}>
                    <div className="client-logos-grid">
                        {clientLogos.length > 0 ? (
                            clientLogos.map((client, index) => (
                                <div key={index} className={`client-logo-item ${client.name === 'The Trade Desk' ? 'client-logo-item-tradedesk' : ''}`}>
                                    <img 
                                        src={client.logo} 
                                        alt={client.name} 
                                        className={`client-logo-image ${client.name === 'The Trade Desk' ? 'client-logo-extra-large' : ''}`} 
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

