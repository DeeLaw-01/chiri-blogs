import { Global, css } from '@emotion/react'
import { theme } from './theme'
import { BASE_FONT_FAMILY } from 'ui/primitives/Text/base-styles'

const CSS = css`
  html {
    scroll-behavior: smooth;
    -webkit-tap-highlight-color: transparent;
  }
  body {
    background-color: ${theme.colors._white};
    overflow-x: hidden;
    font-family: ${BASE_FONT_FAMILY};
  }
  /* always set input fontsize to 16px to avoid mobile browsers automatically zooming in and breaking the layout */
  /* can also be fixed with maximum-scale, but this is considered bad practice as users can't zoom at all then */
  @media screen and (max-width: 50em) {
    input[type='color'],
    input[type='date'],
    input[type='datetime'],
    input[type='datetime-local'],
    input[type='email'],
    input[type='month'],
    input[type='number'],
    input[type='password'],
    input[type='search'],
    input[type='tel'],
    input[type='text'],
    input[type='time'],
    input[type='url'],
    input[type='week'],
    select:focus,
    textarea {
      font-size: 16px !important;
    }
  }

  /* custom selection */
  ::selection {
    color: ${theme.colors._white};
    background: ${theme.colors.primary};
  }

  .flag-dropdown {
    border: 0px !important;
    border-right: 1px solid ${theme.colors._gray} !important;
    margin-left: 1px !important;
    margin-top: 1px !important;
    margin-bottom: 1px !important;
    background-color: transparent !important;
  }

  /* custom scrollbar */
  .custom-scrollbar::-webkit-scrollbar {
    width: 20px;
  }
  .custom-scrollbar::-webkit-scrollbar-track {
    background-color: transparent;
  }
  .custom-scrollbar::-webkit-scrollbar-thumb {
    background-color: #d6dee1;
    border-radius: 20px;
    border: 6px solid transparent;
    background-clip: content-box;
  }
  .custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background-color: #a8bbbf;
  }

  /* overwrite phone picker style */
  .flag-dropdown {
    background-color: ${theme.colors._white} !important;
    border-color: inherit !important;
  }
  font {
    pointer-events: none;
  }
  #nprogress .bar {
    z-index: 10000000 !important;
  }

  .hide-scrollbar::-webkit-scrollbar {
    display: none;
  }

  .hide-scrollbar {
    scrollbar-width: none;
    ms-overflow-style: none;
  }
  @supports (-webkit-touch-callout: none) {
    .transport-card {
      background: white !important;
    }
  }

  .header-img {
    border-bottom-left-radius: 2rem;
    border-bottom-right-radius: 2rem;
    object-fit: cover;
    object-position: center 60%;
  }

  @media (min-width: 2000px) {
    .header-img {
      object-position: center;
    }
  }

  @media (max-width: 768px) {
    .header-img {
      object-position: center;
    }
  }

  video {
    object-fit: cover !important;
  }
`

function GlobalCSS() {
  return <Global styles={CSS} />
}

export default GlobalCSS
