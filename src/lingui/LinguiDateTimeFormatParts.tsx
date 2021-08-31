import { useLingui } from '@lingui/react'
import React from 'react'
import {
  DateTimeFormatParts,
  DateTimeFormatPartsProps
} from '../DateTimeFormatParts'

export const LinguiDateTimeFormatParts: React.FC<DateTimeFormatPartsProps> = ({
  locale,
  ...props
}) => {
  const { i18n } = useLingui()
  return <DateTimeFormatParts locale={locale ?? i18n.locale} {...props} />
}
