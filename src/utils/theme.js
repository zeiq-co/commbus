import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset-advanced';
import { darken, lighten } from 'polished';

const mainBrandColor = '#487C93';
const darkAccent = '#3173DC';
const darkShades = '#274550';

export const theme = {
  // It can be liberally applied to your layout as its main identity.
  mainBrandColor,
  // Accent colors can be used to bring attention to design elements
  // by contrasting with the rest of the palette.
  lightAccent: '#FFDC57',
  // Use this color as the background for your dark-on-light designs,
  // or the text color of an inverted design.
  // Another accent color to consider. Not all colors have to be used -
  // sometimes a simple color scheme works best.
  darkAccent,
  // Use as the text color for dark-on-light designs,
  // or as the background for inverted designs.
  darkShades,
  dangerColor: '#f44336',
  primaryColor: mainBrandColor,
  borderColor: '#e0e6ef',
  backgroundColor: '#eef3f6',
  darkbackground: '#3c3c3a',
  backgroundInputColor: mainBrandColor,
  backgroundInputColorDark: darkShades,
  fontSize: 16,
  fontSizeSmall: 14,
  fontSizeExtraSmall: 12,
  fontSizeMedium: 18,
  fontSizeLarge: 22,
  textColor: darkShades, // '#0A0B11',
  textColorInverse: mainBrandColor,
  textColorLite: '#3b3b3b',
  menuTintColor: darkAccent,
  primaryFontFamily: "'BebasNeuePro-Book',sans-serif",
  secondaryFontFamily: "'BebasNeueRegular', sans-serif",
  boxShadow: 'rgba(0,0,0,0.08) 0px 7px 18px',
};

const GlobalStyle = createGlobalStyle`
  ${reset};

  @font-face {
    font-family: BebasNeueRegular ;
    src: url("../fonts/BebasNeue-Regular.otf") format("opentype");
}

  @font-face {
    font-family: BebasNeuePro-Book ;
    src: url("../fonts/BebasNeuePro-Book.ttf") format("opentype");
}


  @font-face {
  font-family: BebasNeuePro-Book ;
  src: url("../fonts/BebasNeuePro-Book.eot") format("opentype");
}



  body {
    color: ${theme.textColor};
    letter-spacing: 0.03rem !important;
    font-size: 1.125rem;
  }
  .subtitle.is-6, p,.is-size-6 {
    font-size: 1.125rem !important;
  }
  .title {
    font-family: ${theme.secondaryFontFamily};
    line-height: 2.25rem !important;
    letter-spacing: 2px !important;
  }
  .title.is-1 {
    letter-spacing: 0.3rem !important;
  }
  .button {
    font-family: ${theme.secondaryFontFamily}
  }
  p {
    font-family: ${theme.primaryFontFamily};
    line-height: 1.5rem;
  }
  p, .title, .box {
    color: ${theme.textColor};
  }
  .subtitle {
    font-family: ${theme.primaryFontFamily};
  }
  .button.is-primary {
    background-color: ${theme.mainBrandColor};
    transition: background-color 0.2s ease;
    :hover {
      background-color: ${darken(0.06, theme.mainBrandColor)};
    }
  }
  .button.is-secondary {
    background-color: ${theme.lightAccent};
    transition: background-color 0.2s ease;
    color: #ffffff;
    :hover {
      background-color: ${darken(0.06, theme.lightAccent)};
    }
  }
  .button.is-link {
    background-color: ${theme.backgroundInputColor};
    transition: background-color 0.2s ease;
    letter-spacing: 0.1rem !important;
    :hover {
      background-color: ${darken(0.06, theme.darkAccent)};
    }
  }
  .button, .input, .card {
    box-shadow: ${theme.boxShadow};
  }
  .has-text-warning {
    color: ${theme.lightAccent} !important;
  }
  .has-text-info{
    color:${theme.backgroundInputColor} !important;
  }
  .has-text-right{
    font-weight: 100 !important;
  }
  .columns {
    margin-right:0rem !important;
  }

`;

export default GlobalStyle;
