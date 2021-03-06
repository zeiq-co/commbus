import React from 'react';
import styled from 'styled-components';

import Information from './Information';
import MyMapComponent from './GoogleMap';

const Section = styled.section`
  .title {
    margin-right: 0.5rem;
  }

  span {
    display: block;
    margin-top: 0.5rem;
  }
`;

const Address = () => (
  <Section className="columns">
    <div className="column is-6">
      <Information />
    </div>
    <div className="column is-6">
      <MyMapComponent className="is-hidden-mobile" />
    </div>
  </Section>
);

export default Address;
