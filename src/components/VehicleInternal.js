import React from 'react';
import styled from 'styled-components';

import VehicleBranding from './VehicleBranding';

const Section = styled.section`
  background-color: ${props => props.theme.backgroundColor};
  p {
    margin: 2rem 0rem 2rem 0rem;
  }
  .hero-body {
    padding: 3rem 0rem;
  }
`;

class VehicleInternal extends React.Component {
  render() {
    const { brand } = this.props;
    const { data } = this.props;
    return (
      <Section className="section">
        <div className="container">
          <section className="hero">
            <div className="hero-body">
              <h1 className="title is-size-3-mobile has-text-weight-light is-uppercase">
                {brand.sectionTwoTitle}
              </h1>
              <p>{brand.sectionTwoSubtitle.sectionTwoSubtitle}</p>
            </div>
          </section>
          {data.map(item => (
            <VehicleBranding data={item} />
          ))}
        </div>
      </Section>
    );
  }
}

export default VehicleInternal;