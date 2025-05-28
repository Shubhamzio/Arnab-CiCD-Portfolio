import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Interest.css';
import { Link } from 'react-router-dom';
import Travel from '/travelling/travel1.jpg';
import Travel2 from '/travelling/travel2.jpg';
import Travel3 from '/travelling/travel3.jpg';
import Img1 from '/Photography/Photo2.jpg';
import Img2 from '/Photography/Photo3.jpg';
import Img3 from '/Photography/Photo4.jpg';
import Img4 from '/Photography/Photo5.jpg';
import Img5 from '/Photography/Photo6.jpg';
import Img6 from '/Photography/Photo7.jpg';
import Img7 from '/Photography/Photo8.jpg';
import Img8 from '/Photography/Photo9.jpg';
import Img9 from '/Photography/Photo10.jpg';
import Img10 from '/Photography/Photo11.jpg';
import Img11 from '/Photography/Photo12.jpg';
import Img12 from '/Photography/Photo13.jpg';
import Img13 from '/Photography/Photo14.jpg';
import Img14 from '/Photography/Photo15.jpg';
import Img15 from '/Photography/Photo16.jpg';
import Img16 from '/Photography/Photo17.jpg';
import Img17 from '/Photography/Photo18.jpg';
import Img18 from '/Photography/Photo19.jpg';
import Img19 from '/Photography/Photo20.jpg';
import Img20 from '/Photography/Photo21.jpg';
import Img21 from '/Photography/Photo22.jpg';
import Img22 from '/Photography/Photo23.jpg';
import Img23 from '/Photography/Photo24.jpg';
import Img24 from '/Photography/Photo25.jpg';
import Img25 from '/Photography/Photo26.jpg';
import Img26 from '/Photography/Photo27.jpg';
import Img27 from '/Photography/Photo28.jpg';
import Img28 from '/Photography/Photo29.jpg';
import Painting1 from '/Painting/painting1';
import Painting2 from '/Painting/painting2';
import Painting3 from '/Painting/painting3';
import Painting4 from '/Painting/painting5';
import Painting5 from '/Painting/painting6';
import Painting6 from '/Painting/painting7';
import Painting7 from '/Painting/painting8';
import Painting8 from '/Painting/painting9';
import Painting9 from '/Painting/painting10';
import Painting10 from '/Painting/painting11';






const galleries = {
  Photography: [
    { img:Img1, caption: 'DON’T WAIT FOR SOMEONE TO BRING YOU FLOWERS' },
    { img: Img2 , caption: 'EVERY SUNSET IS AN OPPORTUNITY TO RESET' },
    { img: Img3, caption: 'THE EARTH HAS MUSIC FOR THOSE WHO LISTEN' },
    { img: Img4, caption: 'A FLOWER CANNOT BLOSSOM WITHOUT SUNSHINE, AND A MAN CANNOT LIVE WITHOUT LOVE' },
    { img: Img5, caption: 'WHEN THE ROOT IS DEEP THERE IS NO REASON TO FEAR THE WORLD' },
    { img: Img6, caption:'WHEN WORDS BECOME UNCLEAR, I SHALL FOCUS WITH PHOTOGRAPHS' },
    { img: Img7 , caption: 'HAPPINESS HELD THE SEED; HAPPINESS SHARED IS THE FLOWER' },
    { img: Img8, caption: 'I DON’T LIKE CAPTIONS' },
    { img: Img9 , caption: ` ANIMALS DON’T LIE. ANIMALS DON’T CRITICIZE
` },
    { img: Img10 , caption: 'AN ANIMAL’S EYES HAVE THE POWER TO SPEAK A GREAT LANGUAGE' },
    { img: Img11, caption: 'YOU’RE ONLY HERE FOR A SHORT VISIT. DON’T HURRY, DON’T WORRY' },
    { img: Img12, caption: 'IT ALWAYS RAINS ON THE HARDEST OF THE PEOPLE WHO DESERVES THE SUN' },
    { img: Img13, caption: 'DO NOT FOLLOW WHERE THE PATH MAY LEAD' },
    { img: Img14, caption: 'LIVE YOUR LIFE LIKE A BUTTEFLY. TAKE REST FOR A WHILE, BUT NEVER FORGET TO FLY' },
    { img: Img15, caption: 'LIFE IS CLIMB BUT VIEW IS GREAT' },
    { img: Img16, caption: 'THE BIRD DARES TO BREAK THE SHELL, THEN THE SHELL BREAKS OPEN AND THE BIRD CAN FLY OPENLY. THIS IS THE SIMPLEST PRINCIPLE OF SUCCESS' },
    { img: Img17, caption: 'TAKE TIME TO SMELL THE ROSES' },
    { img: Img18, caption: 'IN A WORLD AND A LIFE THAT MOVES SO FAST, PHOTOGRAPHY JUST MAKES THE SOUND GO OUT AND IT MAKES YOU STOP AND TAKE A PAUSE' },
    { img: Img19, caption: 'NATURE NEVER GOES OUT OF STYLE' },
    { img: Img20, caption: `FLOWERS DON'T TELL, THEY SHOW.` },
    { img: Img21, caption: 'LIKE WILDFLOWERS, YOU MUST ALLOW YOURSELF TO GROW IN ALL THE PLACES PEOPLE THOUGHT YOU NEVER WOULD' },
    { src: Img22, caption: 'FLOWERS DON’T WORRY ABOUT HOW THEY’RE GOING TO BLOOM. THEY JUST OPEN UP AND TURN TOWARD THE LIGHT AND THAT MAKES THEM BEAUTIFUL' },
    { src: Img23, caption: 'SUNSET IS A WONDERFUL OPPORTUNITY FOR US TO APPRECIATE ALL THE GREAT THINGS THE SUN GIVES US!' },
    { src: Img24, caption: 'WHERE FLOWERS BLOOM SO DOES HOPE' },
    { src: Img25, caption: 'THE EYE SHOULD LEARN TO LISTEN BEFORE IT LOOKS' },
    { src: Img26, caption: `BEAUTIFUL THINGS DON'T ASK FOR ATTENTION` },
    { src: Img27, caption: 'HAPPINESS BLOOMS FROM WITHIN' },
    { src: Img28, caption: 'THE BUTTERFLY IS A FLYING FLOWER, THE FLOWER A TETHERED BUTTERFLY' },

  ],
  Travelling: [
    { img: Travel , caption: 'MEMMIUS MONUMENT EPHESUS' },
    { img: Travel2 , caption: 'SULTANAHMET SQUARE HIPPODROME' },
    { img: Travel3 , caption: 'EPHESUS' },
  ],
  Painting: [
    { img: Painting1, caption: 'CHARLIE CHAPLIN' },
    { img: Painting2, caption: 'SATAYJIT RAY' },
    { img: Painting3, caption: 'Women Art Work' },
    { img: Painting4, caption: 'Kapil Dev' },
    { img: Painting5, caption: 'JAGANMOY MITRA' },
    { img: Painting6, caption: 'Modern Colors'},
    { img: Painting7, caption: 'ART PIC' },
    { img: Painting8, caption: 'Modern Colors' },
    { img: Painting9, caption: 'MONALISA' },
    { img: Painting10, caption: 'Modern Colors' },
  ],
  Reading: [
    { img: "./src/assets/books/start-with-why.jpg", caption: 'Start With Why' , description: ``, link: '/book1'},
    { img: './src/assets/books/the-monk.jpg', caption: 'The Monk Who Sold His Ferrari' , description: ``, link: '/book2'},
    { img: './src/assets/books/5-am.jpg', caption: '5 AM Club' , description: ``, link: '/book3'},
    { img: './src/assets/books/daring-greatly.jpg', caption: 'Daring Greatly' , description: ``, link: '/book4'},
    { img: './src/assets/books/drive-summary.webp', caption: 'Drive Summary' , description: ``, link: '/book5'},
    { img: './src/assets/books/go-giver-summary.jpg', caption: 'The Go Giver' , description: ``, link: '/book6'},
    { img: './src/assets/books/Rules-for-life.jpg', caption: '12 Rules For Life' , description: ``, link: '/book7'},
    { img: './src/assets/books/switch.jpg', caption: 'Switch' , description: ``, link: '/book8'},
    { img: './src/assets/books/the-dip.jpg', caption: 'The Dip' , description: ``, link: '/book9'},
    { img: './src/assets/books/the-war-of-art.jpg', caption: 'The War Of Art' , description: ``, link: '/book10'},
    { img: './src/assets/books/tribes.jpg', caption: 'Tribes' , description: ``, link: '/book11'},
    { img: './src/assets/books/what-they-dont-teach.jpg', caption: `What They Don't Teach You` , description: ``, link: '/book12'},
    { img: './src/assets/books/getting-things-done.jpg', caption: 'Getting Things Done' , description: ``, link: '/book13'},
    { img: './src/assets/books/lean-in.jpg', caption: 'Lean In' , description: ``, link: '/book14'},

  ],
  'Playing Cricket': [
    { src: '/assets/Cricket/cricket1.jpg', caption: 'Winning Shot' },
  ],
};

const Interest = () => {
  const [activeGallery, setActiveGallery] = useState('Photography');
  const [lightbox, setLightbox] = useState({ open: false, image: '' });

  const openLightbox = (img) => {
    setLightbox({ open: true, image: img });
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
                src={item.img}
                alt={item.caption || 'Gallery item'}
                onClick={() => {
                  if (activeGallery !== 'Reading') openLightbox(item.img);
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