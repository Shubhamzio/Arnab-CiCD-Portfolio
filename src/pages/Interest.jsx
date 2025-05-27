import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Interest.css';
import { Link } from 'react-router-dom';

const galleries = {
  Photography: [
    { src: './src/assets/Photography/photo2.jpg', caption: 'DON’T WAIT FOR SOMEONE TO BRING YOU FLOWERS' },
    { src: './src/assets/Photography/photo3.jpg', caption: 'EVERY SUNSET IS AN OPPORTUNITY TO RESET' },
    { src: './src/assets/Photography/photo4.jpg', caption: 'THE EARTH HAS MUSIC FOR THOSE WHO LISTEN' },
    { src: './src/assets/Photography/photo5.jpg', caption: 'A FLOWER CANNOT BLOSSOM WITHOUT SUNSHINE, AND A MAN CANNOT LIVE WITHOUT LOVE' },
    { src: './src/assets/Photography/photo6.jpg', caption: 'WHEN THE ROOT IS DEEP THERE IS NO REASON TO FEAR THE WORLD' },
    { src: './src/assets/Photography/photo7.jpg', caption:'WHEN WORDS BECOME UNCLEAR, I SHALL FOCUS WITH PHOTOGRAPHS' },
    { src: './src/assets/Photography/photo8.jpg', caption: 'HAPPINESS HELD THE SEED; HAPPINESS SHARED IS THE FLOWER' },
    { src: './src/assets/Photography/photo9.jpg', caption: 'I DON’T LIKE CAPTIONS' },
    { src: './src/assets/Photography/photo10.jpg', caption: ` ANIMALS DON’T LIE. ANIMALS DON’T CRITICIZE
` },
    { src: './src/assets/Photography/photo11.jpg', caption: 'AN ANIMAL’S EYES HAVE THE POWER TO SPEAK A GREAT LANGUAGE' },
    { src: './src/assets/Photography/photo12.jpg', caption: 'YOU’RE ONLY HERE FOR A SHORT VISIT. DON’T HURRY, DON’T WORRY' },
    { src: './src/assets/Photography/photo13.jpg', caption: 'IT ALWAYS RAINS ON THE HARDEST OF THE PEOPLE WHO DESERVES THE SUN' },
    { src: './src/assets/Photography/photo14.jpg', caption: 'DO NOT FOLLOW WHERE THE PATH MAY LEAD' },
    { src: './src/assets/Photography/photo15.jpg', caption: 'LIVE YOUR LIFE LIKE A BUTTEFLY. tAKE REST FOR A WHILE, BUT NEVER FORGET TO FLY' },
    { src: './src/assets/Photography/photo16.jpg', caption: 'LIFE IS CLIMB BUT VIEW IS GREAT' },
    { src: './src/assets/Photography/photo17.jpg', caption: 'THE BIRD DARES TO BREAK THE SHELL, THEN THE SHELL BREAKS OPEN AND THE BIRD CAN FLY OPENLY. THIS IS THE SIMPLEST PRINCIPLE OF SUCCESS' },
    { src: './src/assets/Photography/photo18.jpg', caption: 'TAKE TIME TO SMELL THE ROSES' },
    { src: './src/assets/Photography/photo19.jpg', caption: 'IN A WORLD AND A LIFE THAT MOVES SO FAST, PHOTOGRAPHY JUST MAKES THE SOUND GO OUT AND IT MAKES YOU STOP AND TAKE A PAUSE' },
    { src: './src/assets/Photography/photo20.jpg', caption: 'NATURE NEVER GOES OUT OF STYLE' },
    { src: './src/assets/Photography/photo21.jpg', caption: `FLOWERS DON'T TELL, THEY SHOW.` },
    { src: './src/assets/Photography/photo22.jpg', caption: 'LIKE WILDFLOWERS, YOU MUST ALLOW YOURSELF TO GROW IN ALL THE PLACES PEOPLE THOUGHT YOU NEVER WOULD' },
    { src: './src/assets/Photography/photo23.jpg', caption: 'FLOWERS DON’T WORRY ABOUT HOW THEY’RE GOING TO BLOOM. THEY JUST OPEN UP AND TURN TOWARD THE LIGHT AND THAT MAKES THEM BEAUTIFUL' },
    { src: './src/assets/Photography/photo24.jpg', caption: 'SUNSET IS A WONDERFUL OPPORTUNITY FOR US TO APPRECIATE ALL THE GREAT THINGS THE SUN GIVES US!' },
    { src: './src/assets/Photography/photo25.jpg', caption: 'WHERE FLOWERS BLOOM SO DOES HOPE' },
    { src: './src/assets/Photography/photo26.jpg', caption: 'THE EYE SHOULD LEARN TO LISTEN BEFORE IT LOOKS' },
    { src: './src/assets/Photography/photo27.jpg', caption: `BEAUTIFUL THINGS DON'T ASK FOR ATTENTION` },
    { src: './src/assets/Photography/photo28.jpg', caption: 'HAPPINESS BLOOMS FROM WITHIN' },
    { src: './src/assets/Photography/photo29.jpg', caption: 'THE BUTTERFLY IS A FLYING FLOWER, THE FLOWER A TETHERED BUTTERFLY' },

  ],
  Travelling: [
    { src: './src/assets/travelling/travel1.jpg', caption: 'MEMMIUS MONUMENT EPHESUS' },
    { src: './src/assets/travelling/travel2.jpg', caption: 'SULTANAHMET SQUARE HIPPODROME' },
    { src: './src/assets/travelling/travel3.jpg', caption: 'EPHESUS' },
  ],
  Painting: [
    { src: './src/assets/Painting/painting1.jpg', caption: 'CHARLIE CHAPLIN' },
    { src: './src/assets/Painting/painting2.jpg', caption: 'SATAYJIT RAY' },
    { src: './src/assets/Painting/painting3.jpg', caption: 'Women Art Work' },
    { src: './src/assets/Painting/painting5.jpg', caption: 'Kapil Dev' },
    { src: './src/assets/Painting/painting6.jpg', caption: 'JAGANMOY MITRA' },
    { src: './src/assets/Painting/painting7.jpg', caption: 'Modern Colors' },
    { src: './src/assets/Painting/painting8.jpg', caption: 'ART PIC' },
    { src: './src/assets/Painting/painting9.jpg', caption: 'Modern Colors' },
    { src: './src/assets/Painting/painting10.jpg', caption: 'MONALISA' },
    { src: './src/assets/Painting/painting11.jpg', caption: 'Modern Colors' },
  ],
  Reading: [
    { src: "./src/assets/books/start-with-why.jpg", caption: 'Start With Why' , description: ``, link: '/book1'},
    { src: './src/assets/books/the-monk.jpg', caption: 'The Monk Who Sold His Ferrari' , description: ``, link: '/book2'},
    { src: './src/assets/books/5-am.jpg', caption: '5 AM Club' , description: ``, link: '/book3'},
    { src: './src/assets/books/daring-greatly.jpg', caption: 'Daring Greatly' , description: ``, link: '/book4'},
    { src: './src/assets/books/drive-summary.webp', caption: 'Drive Summary' , description: ``, link: '/book5'},
    { src: './src/assets/books/go-giver-summary.jpg', caption: 'The Go Giver' , description: ``, link: '/book6'},
    { src: './src/assets/books/Rules-for-life.jpg', caption: '12 Rules For Life' , description: ``, link: '/book7'},
    { src: './src/assets/books/switch.jpg', caption: 'Switch' , description: ``, link: '/book8'},
    { src: './src/assets/books/the-dip.jpg', caption: 'The Dip' , description: ``, link: '/book9'},
    { src: './src/assets/books/the-war-of-art.jpg', caption: 'The War Of Art' , description: ``, link: '/book10'},
    { src: './src/assets/books/tribes.jpg', caption: 'Tribes' , description: ``, link: '/book11'},
    { src: './src/assets/books/what-they-dont-teach.jpg', caption: `What They Don't Teach You` , description: ``, link: '/book12'},
    { src: './src/assets/books/getting-things-done.jpg', caption: 'Getting Things Done' , description: ``, link: '/book13'},
    { src: './src/assets/books/lean-in.jpg', caption: 'Lean In' , description: ``, link: '/book14'},

  ],
  'Playing Cricket': [
    { src: '/assets/Cricket/cricket1.jpg', caption: 'Winning Shot' },
  ],
};

const Interest = () => {
  const [activeGallery, setActiveGallery] = useState('Photography');
  const [lightbox, setLightbox] = useState({ open: false, image: '' });

  const openLightbox = (src) => {
    setLightbox({ open: true, image: src });
  };

  const closeLightbox = () => {
    setLightbox({ open: false, image: '' });
  };

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

   return (
    <div className="interest-wrapper">
      <div className="interest-page">
        <h1 className="page-heading">INTEREST</h1>

        <div className="tabs">
          {Object.keys(galleries).map((key) => (
            <button
              key={key}
              className={`tab-button ${activeGallery === key ? 'active' : ''}`}
              onClick={() => setActiveGallery(key)}
            >
              {key}
            </button>
          ))}
        </div>

        <div className="gallery">
          {galleries[activeGallery].map((item, index) => (
            <div key={index} className="gallery-item" data-aos="zoom-in">
              <img
                src={item.src}
                alt={item.caption || 'Gallery item'}
                onClick={() => {
                  if (activeGallery !== 'Reading') openLightbox(item.src);
                }}
              />
              {activeGallery !== 'Reading' && (
                <p className="img-caption">{item.caption}</p>
              )}
              {activeGallery === 'Reading' && (
                <div>
                  <p className="img-caption">{item.caption}</p>
                  <Link to
                    className="read-more"
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read More
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>

        {lightbox.open && (
          <div className="lightbox" onClick={closeLightbox}>
            <div className="lightbox-card" onClick={(e) => e.stopPropagation()}>
              <button className="close-btn" onClick={closeLightbox}>×</button>
              <img src={lightbox.image} alt="Expanded view" />
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Interest;