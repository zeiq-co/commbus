import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import PageHero from '../components/PageHero';
import Content from '../components/Content';

export const policyQuery = graphql`
  query policy {
    contentfulPrivacyPolicyPage {
      seoTitle
      metaDescription
      keywords
      heroTitle
      heroSubtitle
      policyContent {
        json
      }
    }
  }
`;

export default class Privacy extends React.Component {
  render() {
    const {
      data: { contentfulPrivacyPolicyPage: page },
    } = this.props;
    return (
      <Layout>
        <Seo
          title={page.seoTitle}
          description={page.metaDescription}
          url={page.keywords}
        />
        <PageHero title={page.heroTitle} heading={page.heroSubtitle} />
        <Content data={page.policyContent.json} />
      </Layout>
    );
  }
}
