import useScrollAnimation from '../../../hooks/useScrollAnimation';
import '../styles/MomentsSection.css';

import Video1 from '../../../assets/Videos/publisher/video21.mp4';
import Video2 from '../../../assets/Videos/publisher/video22.mp4';
import Video3 from '../../../assets/Videos/publisher/video23.mp4';

const MomentsSection = () => {
  const [sectionRef, isVisible] = useScrollAnimation();
  const [rowsRef, isRowsVisible] = useScrollAnimation({ rootMargin: '-100px 0px' });

  const moments = [
    {
      video: Video1,
      title: 'Poll inside podcast-style show',
      descriptor: 'Capture real-time intent during playback',
    },
    {
      video: Video2,
      title: 'Reward ad for loyalty enrollment',
      descriptor: 'Opt-in reward moments',
    },
    {
      video: Video3,
      title: 'Multi-choice product ad',
      descriptor: 'Let viewers choose. Log intent instantly.',
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
                <div className="moment-text-container">
                  <p className="moment-text">{moment.title}</p>
                  <p className="moment-descriptor">{moment.descriptor}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MomentsSection;

