export const smallMargin = 20
export const mediumMargin = 30
export const largeMargin = 50
export const graySemibold = '#666666'
export const purpleRegular = '#6e1fff'
export const grayRegular = '#e5e5e5'
export const sidebarWidth = 390

const garamond = "'" + [
  'Adobe Garamond W08',
  'adobe-garamond-pro',
  'AGaramondPro-Regular',
  'Times New Roman',
  'Times',
  'serif'
].join("', '") + "'"

const avantgarde = "'" + [
  'ITC Avant Garde Gothic W04',
  'AvantGardeGothicITCW01D 731075',
  'AvantGardeGothicITCW01Dm',
  'Helvetica',
  'sans-serif'
].join("', '") + "'"

export const type = (family, size = 'body') => {
  if (family === 'garamond') {
    return {
      fontFamily: garamond,
      fontSize: {
        largeHeadline: '37px',
        body: '17px',
        largeCaption: '15px'
      }[size],
      lineHeight: {
        largeHeadline: '1.2em',
        body: '1.5em',
        largeCaption: '1.25em'
      }[size]
    }
  } else if (family === 'avantgarde') {
    return {
      fontFamily: avantgarde,
      fontSize: {
        largeHeadline: '17px',
        smallHeadline: '11px',
        body: '13px'
      }[size],
      lineHeight: {
        largeHeadline: '1.33em',
        smallHeadline: '1.33em',
        body: '1.33em'
      }[size],
      textTransform: 'uppercase',
      letterSpacing: '1px'
    }
  }
}

export const ellipsisize = () => ({
  whiteSpace: 'nowrap',
  width: '100%',
  overflow: 'hidden',
  textOverflow: 'ellipsis'
})

export const borderedButton = () => ({
  display: 'block',
  color: graySemibold,
  borderTop: `1px solid ${grayRegular}`,
  borderBottom: `1px solid ${grayRegular}`,
  paddingTop: '15px',
  paddingBottom: '15px',
  marginTop: '30px',
  marginBottom: '30px'
})

export const teamNameToID = (name) => name && name.toLowerCase().replace(/ /g, '-').replace(/,/g, '-').replace(/&/g, '').replace(/--/g, '-')
