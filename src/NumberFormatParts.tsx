import React from 'react'
import { FormatPartsProps } from './types'

export type NumberFormatPartsProps = FormatPartsProps<
  number,
  Intl.NumberFormatOptions,
  Intl.NumberFormatPart
>

export const NumberFormatParts: React.FC<NumberFormatPartsProps> = ({
  value,
  locale,
  children,
  ...options
}) => (
  <React.Fragment>
    {new Intl.NumberFormat(locale, options)
      .formatToParts(value)
      .map(children ?? (({ value }) => value))}
  </React.Fragment>
)
