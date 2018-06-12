import Typography from "typography";

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.666,
  headerFontFamily: ['brandon-grotesque', 'Helvetica Neue', 'sans-serif'],
  bodyFontFamily: ['europa', 'sans-serif'],
  bodyWeight: 300,
  headerWeight: 700,
  overrideStyles: () => ({
    h1: {
      textTransform: 'uppercase',
      letterSpacing: '4px',
      fontSize: '4em'
    },
    h2: {
      fontFamily: 'brandon-grotesque',
      fontWeight: 400,
    },
    h4: {
      fontFamily: 'brandon-grotesque',
      fontWeight: 400,
      marginBottom: '0.7rem',
    },
  })
});

export default typography;