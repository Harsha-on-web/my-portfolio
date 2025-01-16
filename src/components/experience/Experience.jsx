import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>WHAT I USE</h5>
      <h2>Software and Technologies</h2>
      <div className="container experience__container">
        <div className="experience__languages">
          <h3>Programming Languages</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>C/C++</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Python</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
    
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>TypeScript</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            {/* <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Erlang</h4>
                <small className="text-light">Basic</small>
              </div>
            </article> */}
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Java</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
            {/* <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>C# </h4>
                <small className="text-light">Basic</small>
              </div>
            </article> */}
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>SQL</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>

        {/* END OF FRONTEND */}

        <div className="experience__webdev">
          <h3>Web Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Angular</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>PostgreSQL</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>React</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>HTML5</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
        
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Spring Boot</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
            {/* <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Flask</h4>
                <small className="text-light">Basic</small>
              </div>
            </article> */}
            {/* <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4></h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article> */}
      
            {/* <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>TensorFlow</h4>
                <small className="text-light">Basic</small>
              </div>
            </article> */}

            {/* <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article> */}
          </div>
        </div>

        <div className="experience__cloud">
          <h3>Cloud DevOps</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Docker</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>AWS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Gradle</h4>
                {/* EC2, RDS, Lambda, S3, IAM and API Gateway */}
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Jenkins</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            {/* <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4></h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4></h4>
                <small className="text-light">Basic</small>
              </div>
            </article> */}
          
          </div>
        </div>  


        <div className="experience__tools">
          <h3>Dev Tools and Platforms</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Git</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>VS Code</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Postman </h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Linux</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Shell Scripting</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>WinSCP</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>      
      </div>
    </section>
  );
};

export default Experience;
