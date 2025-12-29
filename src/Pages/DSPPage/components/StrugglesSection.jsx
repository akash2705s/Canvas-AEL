import useScrollAnimation from '../../../hooks/useScrollAnimation';
import '../styles/StrugglesSection.css';

// Import dark logo images
import FastAdDark from '../../../assets/landing/fastad_dark.png';
import CpmDark from '../../../assets/landing/cpm_dark.png';
import HighDark from '../../../assets/landing/high_dark.png';
import SkuDark from '../../../assets/landing/sku_dark.png';

const StrugglesSection = () => {
    const [sectionRef, isVisible] = useScrollAnimation();
    const [titleRef, isTitleVisible] = useScrollAnimation({ rootMargin: '-100px 0px' });
    const [cardsRef, isCardsVisible] = useScrollAnimation({ rootMargin: '-100px 0px' });

    const struggles = [
        {
            icon: CpmDark,
            text: "Control the player environment"
        },
        {
            icon: SkuDark,
            text: "Add interactivity without publisher engineering"
        },
        {
            icon: HighDark,
            text: "Guarantee engagement inside ad pods"
        },
        {
            icon: FastAdDark,
            text: "Differentiate beyond regular video"
        }
    ];

    return (
        <section ref={sectionRef} className={`struggles-section fade-in-section ${isVisible ? 'visible' : ''}`}>
            <div className="struggles-container">
                {/* Section Title */}
                <h2 ref={titleRef} className={`struggles-title fade-in-section ${isTitleVisible ? 'visible' : ''}`}>
                    AGENCIES CANNOT:
                </h2>

                {/* Struggles Cards */}
                <div ref={cardsRef} className={`struggles-cards-container scale-in ${isCardsVisible ? 'visible' : ''}`}>
                    {struggles.map((struggle, index) => (
                        <div key={index} className={`struggles-card struggles-card-${index + 1}`}>
                            <div className="struggles-card-content">
                                <div className="struggles-icon">
                                    <img src={struggle.icon} alt={struggle.text} />
                                </div>
                                <p className="struggles-card-text">
                                    {struggle.text}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StrugglesSection;

