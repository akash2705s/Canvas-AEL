import useScrollAnimation from '../../../hooks/useScrollAnimation';
import '../styles/MomentsSection.css';

import Video1 from '../../../assets/Videos/enterprise/video51.mp4';
import Video2 from '../../../assets/Videos/enterprise/video52.mp4';
import Video3 from '../../../assets/Videos/enterprise/video53.mp4';

const MomentsSection = () => {
  const [sectionRef, isVisible] = useScrollAnimation();
  const [rowsRef, isRowsVisible] = useScrollAnimation({ rootMargin: '-100px 0px' });

  const moments = [
    {
      video: Video1,
      title: 'Product discovery moments',
    },
    {
      video: Video2,
      title: 'Choice-driven storytelling',
    },
    {
      video: Video3,
      title: 'In-session commerce triggers',
    },
  ];

  return (
    <section ref={sectionRef} className={`moments-section fade-in-section ${isVisible ? 'visible' : ''}`}>
      <div className="moments-container">
        <h2 className="moments-title">Enterprise-grade interactive moments</h2>

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
                <p className="moment-text">{moment.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MomentsSection;

