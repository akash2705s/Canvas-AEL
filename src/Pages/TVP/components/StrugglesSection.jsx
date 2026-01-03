import useScrollAnimation from '../../../hooks/useScrollAnimation';
import '../styles/StrugglesSection.css';

// Import dark logo images
import FastAdDark from '../../../assets/landing/fastad_dark.svg';
import CpmDark from '../../../assets/landing/cpm_dark.svg';
import HighDark from '../../../assets/landing/high_dark.svg';
import SkuDark from '../../../assets/landing/sku_dark.svg';

const StrugglesSection = () => {
    const [sectionRef, isVisible] = useScrollAnimation();
    const [titleRef, isTitleVisible] = useScrollAnimation({ rootMargin: '-100px 0px' });
    const [cardsRef, isCardsVisible] = useScrollAnimation({ rootMargin: '-100px 0px' });

    const struggles = [
        {
            icon: CpmDark,
            text: "No platform-wide interaction standard"
        },
        {
            icon: SkuDark,
            text: "Innovation locked at the app layer"
        },
        {
            icon: HighDark,
            text: "No native monetizable interaction layer"
        },
        {
            icon: FastAdDark,
            text: "High cost to support custom app logic"
        }
    ];

    return (
        <section ref={sectionRef} className={`struggles-section fade-in-section ${isVisible ? 'visible' : ''}`}>
            <div className="struggles-container">
                {/* Section Title */}
                <h2 ref={titleRef} className={`struggles-title fade-in-section ${isTitleVisible ? 'visible' : ''}`}>
                TV Platforms Struggle Because:
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

