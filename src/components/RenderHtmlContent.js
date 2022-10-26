import React from 'react'
import { Dimensions } from 'react-native';
import RenderHtml, { defaultSystemFonts } from 'react-native-render-html';
const { width } = Dimensions.get('window');

const RenderHtmlContent = ({ html }) => {
  const systemFonts = [...defaultSystemFonts, 'Mulish-Regular'];
  return (
    <RenderHtml
      contentWidth={width}
      source={{ html: html }}
      enableExperimentalMarginCollapsing={true}
      systemFonts={systemFonts}
      tagsStyles={{
        body: {
          whiteSpace: 'normal',
          fontFamily: 'Mulish-Regular',
          fontWeight: 'normal',
          fontSize: 12,
          color: '#9C9C9C',
          letterSpacing: 0.6,
          lineHeight: 22
        },
        p: { margin: 5 },
        ul: { margin: 3 },
        a: { fontFamily: "Poppins-Regular", fontSize: 11, color: '#047FC0' }
      }}
    />
  )
}

export default RenderHtmlContent