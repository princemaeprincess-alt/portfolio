import {
  faBehance,
  faDribbble,
  faFacebookF,
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const socialIcons = [
  { icon: faFacebookF, link: "https://www.facebook.com/princemae.baay" },
  { icon: faInstagram, link: "https://www.instagram.com/sktch_fy?igsh=MnkxMmYydmg0a2c4" },
  { icon: faLinkedin, link: "https://www.linkedin.com/in/prince-mae-baay-056241383/" },
  { icon: faGithub, link: "https://github.com/princemaeprincess-alt" },
];

const SocialMedia = () => {
  return socialIcons.map((item, index) => (
    <a
      href={item.link}
      className={`text-baay_pm-primary hover:bg-baay_pm-primary p-2 pt-3 xs:p-2.5 xs:pt-3.75 sm:pt-4 md:pt-5 sm:p-3 md:p-3.75 hover:text-white rounded-md`}
      key={index}
      target="_blank"
    >
      <FontAwesomeIcon
        icon={item.icon}
        className={`text-xl w-4.5 aspect-square`}
      />
    </a>
  ));
};

export default SocialMedia;
