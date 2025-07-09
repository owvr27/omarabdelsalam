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
  I’m currently a <b>Software Development Engineer Intern</b> at
  <a href="https://talaatmoustafa.com/" target="_blank">Talaat Moustafa Group</a>, 
  working in the cybersecurity sector. I'm part of the security team, contributing to network monitoring and system defense. 
  Alongside this, I’m pursuing a part-time <b>Bachelor’s degree in Computer Engineering</b> with a focus on 
  <b>Software Engineering</b> at 
  <a href="https://sut.edu.eg/" target="_blank">Polytechnic of Egypt University</a>.
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
      "Javascript ",
      "C++"
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
