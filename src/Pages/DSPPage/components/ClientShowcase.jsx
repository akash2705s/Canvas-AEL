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
        <section ref={sectionRef} className={`dsp-client-showcase-section fade-in-section ${isVisible ? 'visible' : ''}`}>
            <div className="dsp-client-showcase-container">
                <h2 ref={titleRef} className={`dsp-client-showcase-title fade-in-section ${isTitleVisible ? 'visible' : ''}`}>
                    Already live across the streaming ecosystem
                </h2>
                <p className="dsp-client-showcase-subtitle">
                    OEMs • OTT & FAST publishers • Web players • DSP pilots
                </p>
                
                <div ref={logosRef} className={`dsp-client-showcase-logos scale-in ${isLogosVisible ? 'visible' : ''}`}>
                    <div className="dsp-client-logos-grid">
                        {clientLogos.length > 0 ? (
                            clientLogos.map((client, index) => (
                                <div key={index} className="dsp-client-logo-item">
                                    <img src={client.logo} alt={client.name} className="dsp-client-logo-image" />
                                </div>
                            ))
                        ) : (
                            <div className="dsp-client-logos-placeholder">
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

