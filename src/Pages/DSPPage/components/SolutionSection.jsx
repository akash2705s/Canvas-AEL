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
            text: "Premium pricing on interactive units"
        },
        {
            icon: Sku,
            text: "Higher brand lift metrics"
        },
        {
            icon: High,
            text: 'Better story formats'
        },
        {
            icon: FastAd,
            text: "No extra workflows for agency teams"
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
                    Canvas lets agencies attach interactive logic to their creatives and activate them on any Canvas-enabled publisher through a lightweight player integration.
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
                                    {index === 1 ? (
                                        <>Higher brand<br />lift metrics</>
                                    ) : index === 2 ? (
                                        <>Better story<br />formats</>
                                    ) : (
                                        solution.text
                                    )}
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

