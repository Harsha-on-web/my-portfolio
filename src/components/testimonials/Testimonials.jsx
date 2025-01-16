import React from "react";
import "./testimonials.css";

// import required modules
import { Pagination } from "swiper";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const data = [
  {
    title: "Member of Technical Staff",
    company: "EdgeVerve",
    date: "July 2022 - Present",
    description: "Developed an intuitive user interface for a Generative AI application, enabling seamless transformation of user inputs into actionable outputs while enhancing the overall user experience. Created a dynamic Dataflow configuration interface that reduced setup time by 50%, and designed a real-time prompt submission and monitoring system, achieving zero duplication and improving workflow accuracy. Built a scalable dashboard capable of tracking and managing over 100K records daily, ensuring efficient execution updates. Integrated Keycloak for secure authentication with Role-Based Access Control (RBAC), supporting multiple client configurations. Optimized system performance to handle 6,800 orders per hour through effective orchestration during Non-Functional Requirements (NFR) testing. Additionally, strengthened the resilience of Apache OFBiz by resolving high-load vulnerabilities, improving thread safety, and addressing critical issues in the ControlFilter code, ensuring seamless and reliable system performance."
  },
  {
    title: "Software Development Intern",
    company: "HCLTech",
    date: "July 2021 - Dec 2021",
    description: "Developed Machine Learning pipelines in Azure Databricks for data validation, transformation, and customer insights, utilizing Python, SQL, and Azure Data Factory. Designed and implemented a Customer Churn prediction model to enhance business decision-making."
  }
];

// https://swiperjs.com/demos#pagination-dynamic

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Previous Experience</h5>
      <h2>EXPERIENCE</h2>
      <Swiper
        className="container testiomonials__container"
        // install Swiper modules
        modules={[Pagination]}
        navigation
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {data.map(({ title, company, date, description }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <h3 className="coworker__name">{title}</h3>
              <h4 className="coworker__name">{company}</h4>
              <h5 className="coworker__name">{date}</h5>
              <small className="coworker__review">{description}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
