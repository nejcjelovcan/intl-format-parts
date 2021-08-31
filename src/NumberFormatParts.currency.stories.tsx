import React from 'react'
import { Story } from '@storybook/react'
import { NumberFormatParts, NumberFormatPartsProps } from './NumberFormatParts'
import {
  NUMBER_COMMON_ARGS,
  NUMBER_FORMAT_ARGS_BY_STYLE
} from './storybook/argTypes'
import { IterateTemplateFactory } from './storybook/iterate'
import { CURRENCIES } from './storybook/constants'
import { EXAMPLE_LOCALES, EXAMPLE_NUMBERS } from './storybook/examples'

export default {
  title: 'NumberFormatParts/style: currency',
  comment: NumberFormatParts,
  argTypes: { ...NUMBER_COMMON_ARGS, ...NUMBER_FORMAT_ARGS_BY_STYLE.currency }
}

const Template: Story<NumberFormatPartsProps> = (args) => (
  <NumberFormatParts {...args} />
)

export const Currency = Template.bind({})
Currency.args = {
  value: 12345,
  style: 'currency',
  currency: 'EUR'
}

export const CurrencyValues = IterateTemplateFactory(
  NumberFormatParts,
  'value'
).bind({})
CurrencyValues.args = {
  style: 'currency',
  currency: 'EUR',
  value: 0,
  iterate: EXAMPLE_NUMBERS
}

export const CurrencyLocales = IterateTemplateFactory(
  NumberFormatParts,
  'locale'
).bind({})
CurrencyLocales.args = {
  style: 'currency',
  currency: 'EUR',
  value: 1234567.89,
  iterate: EXAMPLE_LOCALES
}

export const CurrencyCurrencies = IterateTemplateFactory(
  NumberFormatParts,
  'currency'
).bind({})
CurrencyCurrencies.args = {
  style: 'currency',
  currency: undefined,
  value: 1234567.89,
  locale: 'en-GB',
  iterate: CURRENCIES
}
