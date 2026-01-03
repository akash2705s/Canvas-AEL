import useScrollAnimation from '../../../hooks/useScrollAnimation';
import '../styles/EcosystemSection.css';

const EcosystemSection = () => {
    const [sectionRef, isVisible] = useScrollAnimation();
    const [titleRef, isTitleVisible] = useScrollAnimation({ rootMargin: '-100px 0px' });
    const [logosRef, isLogosVisible] = useScrollAnimation({ rootMargin: '-100px 0px' });

    // Platform categories - logos can be added here
    const platforms = [
        { category: 'FAST', logos: [] },
        { category: 'Broadcast', logos: [] },
        { category: 'CMS', logos: [] },
        { category: 'SSAI', logos: [] },
        { category: 'Player stacks', logos: [] }
    ];

    return (
        <section ref={sectionRef} className={`ecosystem-section fade-in-section ${isVisible ? 'visible' : ''}`}>
            <div className="ecosystem-container">
                <h2 ref={titleRef} className={`ecosystem-title fade-in-section ${isTitleVisible ? 'visible' : ''}`}>
                    Built for modern CTV infrastructure
                </h2>
                <p className="ecosystem-subtitle">
                    FAST • Broadcast • CMS • SSAI • Player stacks
                </p>

                <div ref={logosRef} className={`ecosystem-logos-container scale-in ${isLogosVisible ? 'visible' : ''}`}>
                    {/* Logo grid will be populated here */}
                    <div className="ecosystem-logos-grid">
                        {/* Placeholder for logos - can be replaced with actual logo images */}
                        {platforms.map((platform, index) => (
                            <div key={index} className="ecosystem-logo-item">
                                {/* Logo images will be added here */}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EcosystemSection;

