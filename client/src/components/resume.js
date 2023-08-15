
import React, { Component } from 'react';
import ProfileComponent from './ProfileComponent';
import EducationComponent from './EducationComponent';
import ProjectComponent from './ProjectComponent';
import SkillsComponent from './SkillsComponent';

class Resume extends Component {
  state = {
    step: 1,
    // other data properties
  };

  nextStep = () => {
    this.setState(prevState => ({
      step: prevState.step + 1,
    }));
  };

  prevStep = () => {
    this.setState(prevState => ({
      step: prevState.step - 1,
    }));
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { step } = this.state;

    switch (step) {
      case 1:
        return (
          <ProfileComponent
            nextStep={this.nextStep} // Make sure you are passing this prop
            // other props
          />
        );
      case 2:
        return (
          <EducationComponent
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            // pass other necessary props
          />
        );
      case 3:
        return (
          <ProjectComponent
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            // pass other necessary props
          />
        );
      case 4:
        return (
          <SkillsComponent
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            // pass other necessary props
          />
        );
      // Add more cases for additional steps
      default:
        return null;
    }
  }
}


export default Resume;
