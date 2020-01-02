import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  .is-vcentered {
    padding: 1rem 0.5rem;
    background-color: ${props => props.theme.backgroundInputColor};
  }
  button {
    font-size: 2.5rem !important;
    background: ${props => props.theme.darkShades};
  }
  .all-text {
    font-family: ${props => props.theme.primaryFontFamily};
  }
  .container {
    padding: 0rem 1rem;
  }
`;

const MessageInfo = () => (
  <Section className="section">
    <div className="container">
      <div className="columns is-centered">
        <div className="column is-12 is-10-fullhd">
          <div className="columns is-vcentered">
            <div className="column is-8">
              <h1 className="has-text-weight-semibold has-text-white all-text has-text-centered-mobile">
                Experienced event professional on hand 24/7 for your event
              </h1>
              <p className="has-text-white all-text has-text-centered-mobile">
                Commbus are responsive and helpful event experts. Weather you
                are looking for a vehicle or equipment for your event we focus
                on exceeding your expectations, being reliable, open, honest and
                professional.
              </p>
            </div>
            <div className="column">
              <button className="button is-large is-fullwidth" type="button">
                <span className="icon is-medium has-text-white">
                  <img src="/images/messegelogo/chaticon.png" alt="" />
                </span>
                <span className="is-uppercase is-size-4 has-text-white all-text">
                  Find out more
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Section>
);

export default MessageInfo;
