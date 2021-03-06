import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  .card {
    padding-top: 1rem;
    border: 2px solid ${props => props.theme.mainBrandColor};
    margin: 1.5rem 1rem 0rem 1rem;
  }

  .content {
    min-height: 21rem;
  }

  .down-arrow {
    border-color: ${props => props.theme.mainBrandColor} transparent;
    border-style: solid;
    border-width: 50px 0px 0px 50px;
    height: 0px;
    width: 0px;
  }

  .has-text-right {
    margin: 0rem 1rem 0rem 1rem;
    float: right;
  }

  .is-rounded {
    height: 128px;
    width: 128px;
    border-radius: 100% !important;
  }
`;

const Image = styled.figure`
  margin-top: 1rem;
  justify-content: center;
  display: block;
`;

const TestimonialItem = ({ item }) => (
  <Container className="column is-6 has-text-centered">
    <diV className="card">
      <div className="card-image">
        <Image>
          <img
            className="logo"
            src={item.clientLogo.file.url}
            alt={item.clientLogo.title}
          />
        </Image>
        <Image>
          <img
            className="is-rounded"
            src={item.image.file.url}
            alt={item.clientLogo.title}
          />
        </Image>
      </div>
      <div className="card-content">
        <div className="content">
          <p className="title is-5 has-text-weight-light">
            {item.description.description}
          </p>
        </div>
        <h2 className="title is-4 has-text-weight-normal">{item.name}</h2>
      </div>
    </diV>
    <div className="down-arrow has-text-right" />
  </Container>
);

export default TestimonialItem;
