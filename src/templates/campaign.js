import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import HomeHero from '../components/HomeHero';
import FeaturesSubPage from '../components/FeaturesSubPage';
import Branding from '../components/Branding';
import MessageInfo from '../components/MessageInfo';
import ClientsData from '../components/ClientsData';
import Testimonials from '../components/Testimonials';

export const CampaignQuery = graphql`
  query campaign($slug: String) {
    contentfulCampaignPage(slug: { eq: $slug }) {
      seoTitle
      metaDescription
      keywords
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
      featureSectionTitle
      featureOneTitle
      featureOneSubtitle
      iconOne {
        file {
          url
        }
      }
      featureTwoTitle
      featureTwoSubtitle
      iconTwo {
        file {
          url
        }
      }
      featureThirdTitle
      featureThirdSubtitle
      iconThird {
        file {
          url
        }
      }
      featureFourTitle
      featureFourSubtitle
      iconFour {
        file {
          url
        }
      }
      sectionTitle
      sectionSubtitle
      brandingShowCase {
        image {
          title
          file {
            url
          }
        }
        title
        firstPoint
        secondPoint
        thirdPoint
        fourthPoint
      }
      brandingdesignSection {
        title
        subtitle {
          subtitle
        }
        internalImage {
          title
          file {
            url
          }
        }
        internallyDetails {
          internallyDetails
        }
        externalImage {
          title
          file {
            url
          }
        }
        externalDetails {
          externalDetails
        }
      }
      brandingdesignSection {
        title
        subtitle {
          subtitle
        }
        internalImage {
          title
          file {
            url
          }
        }
        internallyDetails {
          internallyDetails
        }
        externalImage {
          title
          file {
            url
          }
        }
        externalDetails {
          externalDetails
        }
      }
    }
  }
`;

export default class CampaignPage extends React.Component {
  render() {
    const {
      data: { contentfulCampaignPage: campaign },
    } = this.props;
    return (
      <Layout>
        <Seo
          title={campaign.seoTitle}
          description={campaign.metaDescription}
          keywords={campaign.keyword}
        />
        <HomeHero
          title={campaign.title}
          heading={campaign.subtitle}
          subtitle={campaign.details.details}
          bgImage={campaign.image.file.url}
          text="  "
        />

        <FeaturesSubPage data={campaign} />

        <Branding
          data={campaign}
          showcase={campaign.brandingShowCase}
          fistbutton="CONTACT US"
          fistlink="/contact"
          secondbutton="ABOUT"
          secondlink="/"
        />
        <MessageInfo />
        <ClientsData
          title="INTERNAL & EXTERNAL BRANDING AND DESIGN"
          subtitle="CLIENT EXAMPLES"
          data={campaign.brandingdesignSection}
        />
        <Testimonials />
      </Layout>
    );
  }
}
