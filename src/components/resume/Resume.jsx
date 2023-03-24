import React from 'react';
import ResumeHeader from './ResumeHeader';
import ResumeWorkExperience from './ResumeWorkExperience';
import './Resume.css';

class Resume extends React.Component {
  render() {
    return (
      <div className="Resume">
        <ResumeHeader headerDetails={this.props.headerDetails} />
        <ResumeWorkExperience />
      </div>
    );
  }
}

export default Resume;
