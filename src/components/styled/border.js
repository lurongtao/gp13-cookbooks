import styled from 'styled-components'

const calRadius = (props, ratio) => {
  return `${(props.radius || 0) * ratio}px;`
}

const border = (
  {
    comp = null
  }
) => {
  return styled(comp) `
    position: relative;
    border-radius: ${props => calRadius(props, 1)};

    &::after {
      content: "";
      pointer-events: none;
      position: absolute;
      z-index: 999;
      top: 0;
      left: 0;
      border-color: ${props => props.color || '#ccc'};
      border-style: ${props => props.style || 'solid'};
      border-width: ${props => props.width || '1px'};
      transform-origin: 0 0;

      @media screen and (max--moz-device-pixel-ratio: 1.49),
        (-webkit-max-device-pixel-ratio: 1.49),
        (max-device-pixel-ratio: 1.49),
        (max-resolution: 143dpi),
        (max-resolution: 1.49dppx) {
          width: 100%;
          height: 100%;
          border-radius: ${props => calRadius(props, 1)};
      }

      @media screen and (min--moz-device-pixel-ratio: 1.5) and (max--moz-device-pixel-ratio: 2.49),
        (-webkit-min-device-pixel-ratio: 1.5) and (-webkit-max-device-pixel-ratio: 2.49),
        (min-device-pixel-ratio: 1.5) and (max-device-pixel-ratio: 2.49),
        (min-resolution: 144dpi) and (max-resolution: 239dpi),
        (min-resolution: 1.5dppx) and (max-resolution: 2.49dppx) {
          width: 200%;
          height: 200%;
          transform: scale(0.5);
          border-radius: ${props => calRadius(props, 2)};
      }

      @media screen and (min--moz-device-pixel-ratio: 2.5),
        (-webkit-min-device-pixel-ratio: 2.5),
        (min-device-pixel-ratio: 2.5),
        (min-resolution: 240dpi),
        (min-resolution: 2.5dppx) {
          width: 300%;
          height: 300%;
          transform: scale(0.333333);
          border-radius: ${props => calRadius(props, 3)};
      }
    }
  `
}

export default border