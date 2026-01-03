import useScrollAnimation from '../../../hooks/useScrollAnimation';
import '../styles/SolutionSection.css';

// Import non-dark logo images
import FastAd from '../../../assets/landing/fastad.svg';
import Cpm from '../../../assets/landing/cpm.svg';
import High from '../../../assets/landing/high.svg';
import Sku from '../../../assets/landing/sku.svg';

const SolutionSection = () => {
    const [sectionRef, isVisible] = useScrollAnimation();
    const [titleRef, isTitleVisible] = useScrollAnimation({ rootMargin: '-100px 0px' });
    const [descriptionRef, isDescriptionVisible] = useScrollAnimation({ rootMargin: '-100px 0px' });
    const [cardsRef, isCardsVisible] = useScrollAnimation({ rootMargin: '-100px 0px' });

    const solutions = [
        {
            icon: Cpm,
            text: "New platform-level revenue surface"
        },
        {
            icon: Sku,
            text: "OEM-wide interaction analytics"
        },
        {
            icon: High,
            text: "Native differentiation vs other TV OS"
        },
        {
            icon: FastAd,
            text: "Zero additional load on app developers"
        }
    ];

    return (
        <section ref={sectionRef} className={`solution-section fade-in-section ${isVisible ? 'visible' : ''}`}>
            <div className="solution-container">
                {/* Section Title */}
                <h2 ref={titleRef} className={`solution-title fade-in-section ${isTitleVisible ? 'visible' : ''}`}>
                    SOLUTION - THE CANVAS EDGE
                </h2>

                {/* Section Description */}
                <p ref={descriptionRef} className={`solution-description fade-in-section ${isDescriptionVisible ? 'visible' : ''}`}>
                    Canvas runs as a platform-level interaction service<br />One runtime. Multiple apps. No rewrites.
                </p>

                {/* Solution Cards */}
                <div ref={cardsRef} className={`solution-cards-container scale-in ${isCardsVisible ? 'visible' : ''}`}>
                    {solutions.map((solution, index) => (
                        <div key={index} className={`solution-card solution-card-${index + 1}`}>
                            <div className="solution-card-content">
                                <div className="solution-icon">
                                    <img src={solution.icon} alt={solution.text} />
                                </div>
                                <p className="solution-card-text">
                                    {solution.text}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SolutionSection;

