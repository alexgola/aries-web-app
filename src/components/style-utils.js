import styled, { css } from "styled-components";
import Form from "./UI/Form";
import { Header } from "./UI";

const darkGrey = '#404040';
const lightGrey = '#BCBDC1'

// style-utils.js
export function contentCnt() {
  return `
    max-width: 1280px;
  `;
}

export const ColorDarkGrey = css`
  color: ${darkGrey}!important;
`

export const ColorWhite = css`
  color: white!important;
`

export const HeaderFontHeight = css`
  font-weight: 300!important;
`

export const BackgroundGreen = css`
  background-color: #16ab39;
`

export const BackgroundLightBlue = css`
  background-color: #16AAF3;
`

export const BackgroundDarkGrey = css`
  background-color: ${darkGrey};
`
export const BackgroundLightGrey = css`
  background-color: ${lightGrey};
`
const sizes = {
  desktop: 992,
  tablet: 768,
}

// iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((accumulator, label) => {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  const emSize = sizes[label] / 16
  accumulator[label] = (...args) => css`
    @media (min-width: ${emSize}em) {
      ${css(...args)}
    }
  `
  return accumulator
}, {})

export const CardPadding = css`
  padding: 10px 20px!important;
`;

export const Card = styled.div`
  ${CardPadding}
`;

export const FormCard = styled(Form)`
  ${CardPadding}
`

export const NoMarginTop = css`
  margin-top: 0px!important;
`;

export const NoMarginBottom = css`
  margin-bottom: 0px!important;
`;

export const HeaderH2 = styled(Header)`
  ${BackgroundDarkGrey}
  ${ColorWhite}
  ${CardPadding}
  ${NoMarginBottom}
  ${HeaderFontHeight}
  padding-top: 18px!important;
  padding-bottom: 18px!important;
`