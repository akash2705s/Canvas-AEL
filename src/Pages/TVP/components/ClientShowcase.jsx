import useScrollAnimation from '../../../hooks/useScrollAnimation';
import '../styles/ClientShowcase.css';

const ClientShowcase = () => {
    const [sectionRef, isVisible] = useScrollAnimation();
    const [titleRef, isTitleVisible] = useScrollAnimation({ rootMargin: '-100px 0px' });
    const [logosRef, isLogosVisible] = useScrollAnimation({ rootMargin: '-100px 0px' });

    // Client logos - add logo imports here
    const clientLogos = [
        // Add logo imports here when available
        // Example: { name: 'Client 1', logo: Client1Logo },
    ];

    return (
        <section ref={sectionRef} className={`tvp-client-showcase-section fade-in-section ${isVisible ? 'visible' : ''}`}>
            <div className="tvp-client-showcase-container">
                <h2 ref={titleRef} className={`tvp-client-showcase-title fade-in-section ${isTitleVisible ? 'visible' : ''}`}>
                    Designed for modern TV platforms
                </h2>
                <p className="tvp-client-showcase-subtitle">
                    OEMs • App ecosystems • FAST • OTT • Web players
                </p>
                
                <div ref={logosRef} className={`tvp-client-showcase-logos scale-in ${isLogosVisible ? 'visible' : ''}`}>
                    <div className="tvp-client-logos-grid">
                        {clientLogos.length > 0 ? (
                            clientLogos.map((client, index) => (
                                <div key={index} className="tvp-client-logo-item">
                                    <img src={client.logo} alt={client.name} className="tvp-client-logo-image" />
                                </div>
                            ))
                        ) : (
                            <div className="tvp-client-logos-placeholder">
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

