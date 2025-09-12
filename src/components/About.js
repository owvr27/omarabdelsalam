import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  render() {
    const one = (
    <p>
  I previously interned at <b>Vodafone Egypt</b>, where I collaborated with the AI & Data team on developing and tuning classification models using Decision Tree and Random Forest algorithms. I also explored penetration testing basics during the final phase of the internship. 
  Additionally, I completed a Frontend & Security internship at <b>Al Dahra Agriculture</b>, contributing to a web dashboard project focused on agricultural data analysis and security implementation.
  Currently, I’m pursuing a <b>Bachelor’s degree in Computer Engineering</b> at 
  <a href="https://sut.edu.eg/" target="_blank">Polytechnic of Egypt University</a>, with a strong interest in cybersecurity and software engineering.
</p>


    );
    const two = (
      <p>
        Outside of work, I'm interested in following the developments of
        science. I also play a lot of video games. And make TikToks.
      </p>
    );

    const tech_stack = [
      "Network",
      "Python",
      "HTML CSS",
      "Java",
      "Javascript "
    ];

    return (
      <div id="about">
        <FadeInSection>
          <div className="section-header ">
            <span className="section-title">/ about me</span>
          </div>
          <div className="about-content">
            <div className="about-description">
              {[one]}
              {"Here are some technologies I have been working with:"}
              <ul className="tech-stack">
                {tech_stack.map(function (tech_item, i) {
                  return (
                    <FadeInSection delay={`${i + 1}00ms`}>
                      <li>{tech_item}</li>
                    </FadeInSection>
                  );
                })}
              </ul>
              {[two]}
            </div>
            <div className="about-image">
             
            </div>
          </div>
        </FadeInSection>
      </div>
    );
  }
}

export default About;
