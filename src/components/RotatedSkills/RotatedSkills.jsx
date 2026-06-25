import './RotatedSkills.css'
import img1 from "/projects/portfolio/src/assets/img/Skills/html.png";
import img2 from "/projects/portfolio/src/assets/img/Skills/images.png";
import img3 from "/projects/portfolio/src/assets/img/Skills/js.png";
import img4 from "/projects/portfolio/src/assets/img/Skills/jquery.png";
import img5 from "/projects/portfolio/src/assets/img/Skills/react.png";
import img6 from "/projects/portfolio/src/assets/img/Skills/teamwork.png";
import img7 from "/projects/portfolio/src/assets/img/Skills/nodejs-logo.svg";
import img8 from "/projects/portfolio/src/assets/img/Skills/express.png";
import img9 from "/projects/portfolio/src/assets/img/Skills/api.png";
import img10 from "/projects/portfolio/src/assets/img/Skills/sql.png";
import img_11 from "/projects/portfolio/src/assets/img/Skills/git.webp";
import img_12 from "/projects/portfolio/src/assets/img/Skills/bootstrap.jpg";

import { useState } from "react";

function RotatedSkills() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img_11,
    img_12,
  ];

  const openLightbox = (img) => {
    setCurrentImage(img);
    setIsOpen(true);
  };

  return (
    <>
      <div className="banner">
        <div className="slider" style={{ "--quantity": 10 }}>
          <div className="item" style={{ "--position": 1 }}>
            <img src={img1} alt="" />
          </div>
          <div className="item" style={{ "--position": 2 }}>
            <img src={img2} alt="" />
          </div>
          <div className="item" style={{ "--position": 3 }}>
            <img src={img3} alt="" />
          </div>
          <div className="item" style={{ "--position": 4 }}>
            <img src={img4} alt="" />
          </div>
          <div className="item" style={{ "--position": 5 }}>
            <img src={img5} alt="" />
          </div>
          <div className="item" style={{ "--position": 6 }}>
            <img src={img6} alt="" />
          </div>
          <div className="item" style={{ "--position": 7 }}>
            <img src={img7} alt="" />
          </div>
          <div className="item" style={{ "--position": 8 }}>
            <img src={img8} alt="" />
          </div>
          <div className="item" style={{ "--position": 9 }}>
            <img src={img9} alt="" />
          </div>
          <div className="item" style={{ "--position": 10 }}>
            <img src={img10} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default RotatedSkills;