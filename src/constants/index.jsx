import { FaInstagram, FaFacebook, FaYoutube, FaSpotify } from "react-icons/fa6";

import song1 from "../assets/song1.png";
import song2 from "../assets/song2.png";
import song3 from "../assets/song3.png";
import song4 from "../assets/song4.png";
import song5 from "../assets/song5.png";
import song6 from "../assets/song6.png";
import song7 from "../assets/song7.png";

export const NAVIGATION_LINKS = [
  { label: "Songs", href: "#songs" },
  { label: "Bio", href: "#bio" },
];

export const HERO = {
  name: "GOGATA",
  description:
    "Born July 29, 1999 and raised in Pleven City, Storgozia Hood, GOGATA is a Bulgarian rap artist who started doing music at the age of 15 and has been active till now.He alwways wanted his city and neighborhood to be sung in a rap song.This is exactly why he created his YouTube channel - GOGATA064. Go check it out!",
};

export const SONGS = [
  {
    id: 1,
    name: "Гледай Как/ Sieh Mal",
    image: song1,
    youtube: "https://www.youtube.com/watch?v=hVM2p0eJ97Q",
  },
  {
    id: 2,
    name: "WOW",
    image: song2,
    youtube: "https://www.youtube.com/watch?v=a70C_TcO5bo",
  },
  {
    id: 3,
    name: "Не Питай Как",
    image: song3,
    youtube: "https://www.youtube.com/watch?v=GpYZqyvH2D4",
  },
  {
    id: 4,
    name: "SGAFIL",
    image: song4,
    youtube: "https://www.youtube.com/watch?v=LqOb5zkEAZw",
  },
  {
    id: 5,
    name: "Дилема",
    image: song5,
    youtube: "https://www.youtube.com/watch?v=vMmN12BOCW8",
  },
  {
    id: 6,
    name: "Fuck 'Em All",
    image: song6,
    youtube: "https://www.youtube.com/watch?v=dTHrZecGgRw",
  },
  {
    id: 5,
    name: "Гняв || Блъф 2",
    image: song7,
    youtube: "https://www.youtube.com/watch?v=OidKkMehc-U",
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://www.facebook.com/gogata064",
    icon: <FaFacebook fontSize={25} className="hover:opacity-80" />,
  }, 
  {
    href: "https://www.youtube.com/@GOGATA064",
    icon: <FaYoutube fontSize={25} className="hover:opacity-80" />,
  },      
  { 
    href: "https://open.spotify.com/artist/3UqLYH12ATtOslTpWSdKpQ?si=Pspot50KRDal91qBo8sB0Q",
    icon: <FaSpotify fontSize={25} className="hover:opacity-80" />,
  },
  { 
    href: "https://www.instagram.com/gogata064/?hl=bg",
    icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  },

];
