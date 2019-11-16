import styled from 'styled-components'

function wrap($isWrap = true) {
  if ($isWrap) {
    return `
      word-wrap: break-word;
      word-break: break-all;
    `
  } else {
    return `
      white-space: nowrap;
    `
  }
}

function ellipsis($lineClamp) {
  if (Math.abs($lineClamp) > 1) {
    return `
      display: -webkit-box !important;
      -webkit-line-clamp: ${$lineClamp};
      -webkit-box-orient: vertical;
      flex-direction: column;
      ${wrap(true)}
    `
  } else {
    return wrap(false)
  }
}

const cbEllipsis = ({
  Comp,
  $width = 0, 
  $lineClamp = 1
}) => {
  return styled(Comp) `
    overflow: hidden;
    text-overflow: ellipsis;
    width: ${$width};
    ${ellipsis($lineClamp)}
  `
}

export default cbEllipsis