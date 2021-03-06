import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import PageHero from '../components/PageHero';
import ShopItems from '../components/ShopItems';

export const HireQuery = graphql`
  query Hire {
    contentfulGenericPages(slug: { eq: "Hire Shop" }) {
      slug
      seoTitle
      metaDescription
      keywords
      heroTitle
      heroSubtitle
    }
    allContentfulHireVehicles(sort: { fields: order }) {
      edges {
        node {
          order
          title
          image {
            title
            file {
              url
            }
          }
        }
      }
    }
  }
`;

export default class HireShop extends React.Component {
  render() {
    const {
      data: { contentfulGenericPages: Hire },
      data: { allContentfulHireVehicles: data },
    } = this.props;
    return (
      <Layout>
        <Seo
          title={Hire.seoTitle}
          description={Hire.metaDescription}
          url={Hire.keywords}
        />
        <PageHero title={Hire.heroTitle} heading={Hire.heroSubtitle} />
        <ShopItems data={data.edges} />
      </Layout>
    );
  }
}
