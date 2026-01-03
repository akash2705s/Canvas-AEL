import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import '../Pages/PublisherPage/styles/ClientShowcase.css';
import '../Pages/PublisherPage/styles/ClientShowcaseCarousel.css';
import OneStudioLogo from '../Pages/LandingPage/assets/client/publisher/One Studio.png';
import OTTStudioLogo from '../Pages/LandingPage/assets/client/publisher/OTT Studio.png';
import AnimakerLogo from '../Pages/LandingPage/assets/client/publisher/Animaker.png';
import SteveAILogo from '../Pages/LandingPage/assets/client/publisher/Steve AI.png';
import SamsungLogo from '../Pages/LandingPage/assets/client/publisher/samsung.svg';
import RokuLogo from '../Pages/LandingPage/assets/client/publisher/roku.svg';
import VizioLogo from '../Pages/LandingPage/assets/client/publisher/vizio.svg';
import FireTVLogo from '../Pages/LandingPage/assets/client/publisher/firetv.svg';
import AndroidLogo from '../Pages/LandingPage/assets/client/publisher/Android.png';
import CineverseLogo from '../Pages/LandingPage/assets/client/publisher/cineverse.png';

const ClientShowcase = ({ title, subtitle }) => {
    const [sectionRef, isVisible] = useScrollAnimation();
    const [titleRef, isTitleVisible] = useScrollAnimation({ rootMargin: '-100px 0px' });

    // Client logos in specified order
    const clientLogos = [
        { name: 'One Studio', logo: OneStudioLogo },
        { name: 'OTT Studio', logo: OTTStudioLogo },
        { name: 'Animaker', logo: AnimakerLogo },
        { name: 'Steve AI', logo: SteveAILogo },
        { name: 'Samsung', logo: SamsungLogo },
        { name: 'Roku', logo: RokuLogo },
        { name: 'Vizio', logo: VizioLogo },
        { name: 'Fire TV', logo: FireTVLogo },
        { name: 'Android', logo: AndroidLogo },
        { name: 'Cineverse', logo: CineverseLogo },
    ];

    // Duplicate logos for seamless infinite scroll
    const duplicatedLogos = [...clientLogos, ...clientLogos];

    // Helper function to get logo className
    const getLogoClassName = (clientName) => {
        if (clientName === 'Roku' || clientName === 'Vizio') {
            return 'client-logo-small';
        } else if (clientName === 'One Studio' || clientName === 'Animaker' || clientName === 'Steve AI' || clientName === 'Android') {
            return 'client-logo-large';
        }
        return '';
    };

    // Render logo with "& more" text after Cineverse
    const renderLogo = (client, index, isDuplicate = false) => (
        <React.Fragment key={isDuplicate ? `duplicate-${index}` : index}>
            <img
                src={client.logo}
                alt={client.name}
                className={getLogoClassName(client.name)}
            />
            {client.name === 'Cineverse' && (
                <span className="client-showcase-carousel-more">& more</span>
            )}
        </React.Fragment>
    );

    return (
        <section ref={sectionRef} className={`client-showcase-section fade-in-section ${isVisible ? 'visible' : ''}`}>
            <div className="client-showcase-container">
                <h2 ref={titleRef} className={`client-showcase-title fade-in-section ${isTitleVisible ? 'visible' : ''}`}>
                    {title}
                </h2>
                <p className="client-showcase-subtitle">
                    {subtitle}
                </p>

                <div className="client-showcase-carousel">
                    <div className="client-showcase-carousel-slide">
                        {duplicatedLogos.map((client, index) => renderLogo(client, index))}
                        {duplicatedLogos.map((client, index) => renderLogo(client, index, true))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ClientShowcase;

