import { useLingui } from '@lingui/react'
import React from 'react'
import { NumberFormatParts, NumberFormatPartsProps } from '../NumberFormatParts'

export const LinguiNumberFormatParts: React.FC<NumberFormatPartsProps> = ({
  locale,
  ...props
}) => {
  const { i18n } = useLingui()
  return <NumberFormatParts locale={locale ?? i18n.locale} {...props} />
}
