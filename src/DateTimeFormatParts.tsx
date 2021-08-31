import React from 'react'
import { FormatPartsProps } from './types'

export type DateTimeFormatPartsProps = FormatPartsProps<
  Date,
  Intl.DateTimeFormatOptions,
  Intl.DateTimeFormatPart
>

export const DateTimeFormatParts: React.FC<DateTimeFormatPartsProps> = ({
  value,
  locale,
  children,
  ...options
}) => (
  <React.Fragment>
    {new Intl.DateTimeFormat(locale, options)
      .formatToParts(value)
      .map(children ?? (({ value }) => value))}
  </React.Fragment>
)
