import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/messengerclone.png";
import IMG2 from "../../assets/todolist.png";
import IMG3 from "../../assets/tipcalc.png";
import IMG4 from "../../assets/houseparty.png";
import IMG5 from "../../assets/portfolio.png";
import IMG6 from "../../assets/mvrecsyst.png";
import IMG7 from "../../assets/campuscrib.webp";
import IMG8 from "../../assets/cartapp.png";
import IMG9 from "../../assets/img2pdf.png"
import img10 from "../../assets/awsdeploy.png"

const data = [
  
  {
    id: 1,
    image: img10,
    title: "Slot Machine",
    github: "https://github.com/Harsha-on-web/slot-machine-master"
  },
  
  {
    id: 2,
    image: IMG9,
    title: "Video Zoom Editor",
    github: "https://github.com/Harsha-on-web/video-zoom"
  },
  
  {
    id: 3,
    image: IMG1,
    title: "Portfolio Website",
    github: "https://github.com/Harsha-on-web/portfolio-master",
  
  },
  
  // {
  //   id: 4,
  //   image: IMG4,
  //   title: "House Party Music Controller | React | Django",
  //   github: "https://github.com/divyasrinaraharisetti/HouseParty-Music-Controller",
    
  // },

  // {
  //   id: 5,
  //   image: IMG3,
  //   title: "Tip Calculator | JavaScript | HTML | CSS",
  //   github: "https://github.com/divyasrinaraharisetti/Tip-Calculator",

  // },
 
  // {
  //   id: 6,
  //   image: IMG2,
  //   title: "ToDo-List | MongoDB | Express | ReactJS | NodeJS ",
  //   github: "https://github.com/divyasrinaraharisetti/To-do-List",
  // },

  // {
  //   id: 7,
  //   image: IMG6,
  //   title: "Movie Recommendation System | Python | JavaScript | Flask",
  //   github: "https://github.com/divyasrinaraharisetti/Movie-Recommendation-System",
  // },
  // {
  //   id: 8,
  //   image: IMG7,
  //   title: "Campus Crib | JavaScript | React | Tailwind ",
  //   github: "https://github.com/divyasrinaraharisetti/CampusCrib",
  // },
  // {
  //   id: 9,
  //   image: IMG8,
  //   title: "Cart App | JavaScript | React | CSS ",
  //   github: "https://github.com/divyasrinaraharisetti/Cart-App",
  // },
  // {
  //   id: 10,
  //   image: IMG5,
  //   title: "JavaScript | HTML | CSS Portfolio",
  //   github: "https://github.com/divyasrinaraharisetti/portfolio-master",
    
  // },

];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>PROJECT WORK</h5>
      <h2>My Recent Works</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github}) => {
          return (
            <article key={id} className="portfolio__item">
              {/* <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div> */}
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn">
                  View the Code
                </a>
                {/* <a href={brief} className="btn">
                  Project Brief
                </a> */}
              </div>
              {/* <div className="portfolio__item-cta">
                <a href={demo} className="btn btn-primary">
                  Live Demo
                </a>
              </div> */}
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
