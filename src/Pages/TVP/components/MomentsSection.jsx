import useScrollAnimation from '../../../hooks/useScrollAnimation';
import '../styles/MomentsSection.css';

import Hero2 from '../../../assets/landing/hero2.png';
import Hero3 from '../../../assets/landing/hero10.png';
import Hero4 from '../../../assets/landing/hero11.png';

const MomentsSection = () => {
  const [sectionRef, isVisible] = useScrollAnimation();
  const [rowsRef, isRowsVisible] = useScrollAnimation({ rootMargin: '-100px 0px' });

  const moments = [
    {
      image: Hero2,
      title: 'Platform-wide interactive ads',
    },
    {
      image: Hero3,
      title: 'Universal “moment trigger” across apps',
    },
    {
      image: Hero4,
      title: 'Sponsored content moments',
    },
  ];

  return (
    <section ref={sectionRef} className={`moments-section fade-in-section ${isVisible ? 'visible' : ''}`}>
      <div className="moments-container">
        <h2 className="moments-title">HIGH-IMPACT MOMENTS THAT CANVAS UNLOCKS</h2>

        <div
          ref={rowsRef}
          className={`moments-rows slide-in-up ${isRowsVisible ? 'visible' : ''}`}
        >
          {moments.map((moment, index) => (
            <div
              key={moment.title}
              className={`moment-row ${index % 2 === 1 ? 'reverse' : ''}`}
            >
              <div className="moment-image-wrapper">
                <img
                  src={moment.image}
                  alt={moment.title}
                  className="moment-image"
                />
              </div>
              <div className="moment-text-wrapper">
                <p className="moment-text">
                  {index === 1 ? (
                    <>Universal "moment trigger"<br />across apps</>
                  ) : (
                    moment.title
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

export default MomentsSection;

