export type LabelProps = { showLabels?: boolean }

export const ContainerStyle = ({
  showLabels
}: LabelProps): React.CSSProperties => ({
  display: 'flex',
  flexDirection: 'row',
  fontFamily: 'sans-serif',
  fontSize: showLabels ? '2.5rem' : '1rem',
  marginBottom: showLabels ? '2rem' : '1rem'
})

export const GlobalCss = ({ showLabels }: { showLabels?: boolean }) => `
  .col:nth-child(odd) .type {background-color: #ddd;}
  ${showLabels ? '' : '.type {display: none;}'}
`

export const ColumnStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
}

export const PartStyle: React.CSSProperties = {
  flex: 0
}

export const LabelStyle: React.CSSProperties = {
  flex: 1,
  fontSize: '1rem',
  fontVariant: 'small-caps',
  writingMode: 'vertical-rl',
  textOrientation: 'mixed',
  alignSelf: 'stretch',
  transform: 'rotate(-180deg)',
  padding: '0.5rem 0.2rem'
}

export const LabelValueStyle = ({
  showLabels
}: LabelProps): React.CSSProperties => ({
  fontSize: '1rem',
  paddingLeft: '1rem',
  flex: '1',
  textAlign: 'right',
  paddingTop: showLabels ? '1rem' : undefined,
  color: '#a1a1a1'
})
