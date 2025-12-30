import useScrollAnimation from '../../../hooks/useScrollAnimation';
import '../styles/MomentsSection.css';

import Video1 from '../../../assets/Videos/tvp/video31.mp4';
import Video2 from '../../../assets/Videos/tvp/video32.mp4';
import Video3 from '../../../assets/Videos/tvp/video33.mp4';

const MomentsSection = () => {
  const [sectionRef, isVisible] = useScrollAnimation();
  const [rowsRef, isRowsVisible] = useScrollAnimation({ rootMargin: '-100px 0px' });

  const moments = [
    {
      video: Video1,
      title: 'Platform-wide interactive ads',
    },
    {
      video: Video2,
      title: 'Universal "moment trigger" across apps',
    },
    {
      video: Video3,
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
                <video
                  src={moment.video}
                  className="moment-image"
                  autoPlay
                  loop
                  muted
                  playsInline
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

