import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import HomeHero from '../components/HomeHero';
import ProductsData from '../components/ProductsData';
import MessageInfo from '../components/MessageInfo';

export const pageQuery = graphql`
  query graphic($slug: String) {
    contentfulGraphic(slug: { eq: $slug }) {
      slug
      title
      subtitle
      details {
        details
      }
      image {
        file {
          url
        }
      }
    }
    contentfulGraphic(slug: { eq: $slug }) {
      banner {
        images {
          file {
            url
          }
        }
      }
    }
  }
`;

export default class Graphic extends React.Component {
  render() {
    const {
      data: { contentfulGraphic: page },
      data: { contentfulGraphic: vehicle },
    } = this.props;

    return (
      <Layout>
        <Seo title="Exhibitiob Bus Hire" description="Exhibitiob Bus Hire" />
        <HomeHero page={page} />
        <ProductsData Banner={vehicle.banner} />
        <MessageInfo />
      </Layout>
    );
  }
}
