import { css } from "styled-components";

const maxWidth = 1280;

// style-utils.js
export function contentCnt() {
  return `
    max-width: 1280px;
  `;
}


export const BackgroundGreen = css`
  background-color: #16ab39;
`

export const BackgroundLightBlue = css`
  background-color: #16AAF3;
`

export const BackgroundDarkGrey = css`
  background-color: #404040;
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

