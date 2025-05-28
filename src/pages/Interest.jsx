import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Interest.css';
import { Link } from 'react-router-dom';
import Travel from '/travelling/travel1.jpg';
import Travel2 from '/travelling/travel2.jpg';
import Travel3 from '/travelling/travel3.jpg';
import Img1 from '/Photography/photo2.jpg';
import Img2 from '/Photography/photo3.jpg';
import Img3 from '/Photography/photo4.jpg';
import Img4 from '/Photography/photo5.jpg';
import Img5 from '/Photography/photo6.jpg';
import Img6 from '/Photography/photo7.jpg';
import Img7 from '/Photography/photo8.jpg';
import Img8 from '/Photography/photo9.jpg';
import Img9 from '/Photography/photo10.jpg';
import Img10 from '/Photography/photo11.jpg';
import Img11 from '/Photography/photo12.jpg';
import Img12 from '/Photography/photo13.jpg';
import Img13 from '/Photography/photo14.jpg';
import Img14 from '/Photography/photo15.jpg';
import Img15 from '/Photography/photo16.jpg';
import Img16 from '/Photography/photo17.jpg';
import Img17 from '/Photography/photo18.jpg';
import Img18 from '/Photography/photo19.jpg';
import Img19 from '/Photography/photo20.jpg';
import Img20 from '/Photography/photo21.jpg';
import Img21 from '/Photography/photo22.jpg';
import Img22 from '/Photography/photo23.jpg';
import Img23 from '/Photography/photo24.jpg';
import Img24 from '/Photography/photo25.jpg';
import Img25 from '/Photography/photo26.jpg';
import Img26 from '/Photography/photo27.jpg';
import Img27 from '/Photography/photo28.jpg';
import Img28 from '/Photography/photo29.jpg';







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
    { img: Img19 , caption: 'AN ANIMAL’S EYES HAVE THE POWER TO SPEAK A GREAT LANGUAGE' },
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
    { img: './src/assets/Painting/painting1.jpg', caption: 'CHARLIE CHAPLIN' },
    { img: './src/assets/Painting/painting2.jpg', caption: 'SATAYJIT RAY' },
    { img: './src/assets/Painting/painting3.jpg', caption: 'Women Art Work' },
    { img: './src/assets/Painting/painting5.jpg', caption: 'Kapil Dev' },
    { img: './src/assets/Painting/painting6.jpg', caption: 'JAGANMOY MITRA' },
    { img: './src/assets/Painting/painting7.jpg', caption: 'Modern Colors'},
    { img: './src/assets/Painting/painting8.jpg', caption: 'ART PIC' },
    { img: './src/assets/Painting/painting9.jpg', caption: 'Modern Colors' },
    { img: './src/assets/Painting/painting10.jpg', caption: 'MONALISA' },
    { img: './src/assets/Painting/painting11.jpg', caption: 'Modern Colors' },
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