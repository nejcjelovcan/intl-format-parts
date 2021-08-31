import React from 'react'
import { PartRenderer } from '../types'
import {
  ColumnStyle,
  ContainerStyle,
  GlobalCss,
  LabelProps,
  LabelStyle,
  LabelValueStyle,
  PartStyle
} from './label.styles'

export const LabelContainer: React.FC<LabelProps> = ({
  children,
  ...labelProps
}) => (
  <div style={ContainerStyle(labelProps)}>
    <style>{GlobalCss(labelProps)}</style>
    {children}
  </div>
)

export const LabeledPartComponent: React.FC<{ partType?: string }> = ({
  partType,
  children
}) => (
  <div className='col' style={ColumnStyle}>
    <div style={PartStyle}>{children}</div>
    <div className='type' style={LabelStyle}>
      {partType}
    </div>
  </div>
)

export const labelPartRenderer: PartRenderer<{ type: string; value: string }> =
  (
    {
      type,
      value
    }: {
      type: string
      value: string
    },
    i
  ) => (
    <LabeledPartComponent partType={type} key={i}>
      {value}
    </LabeledPartComponent>
  )

export const LabelValue: React.FC<LabelProps> = ({
  children,
  ...labelProps
}) => <div style={LabelValueStyle(labelProps)}>{children}</div>
