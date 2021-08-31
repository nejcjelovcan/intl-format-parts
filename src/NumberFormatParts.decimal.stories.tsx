import React from 'react'
import { Story } from '@storybook/react'
import { NumberFormatParts, NumberFormatPartsProps } from './NumberFormatParts'
import {
  NUMBER_COMMON_ARGS,
  NUMBER_FORMAT_ARGS_BY_STYLE
} from './storybook/argTypes'
import { IterateTemplateFactory } from './storybook/iterate'
import { EXAMPLE_LOCALES, EXAMPLE_NUMBERS } from './storybook/examples'

export default {
  title: 'NumberFormatParts/style: decimal',
  comment: NumberFormatParts,
  argTypes: { ...NUMBER_COMMON_ARGS, ...NUMBER_FORMAT_ARGS_BY_STYLE.decimal }
}

const Template: Story<NumberFormatPartsProps> = (args) => (
  <NumberFormatParts {...args} />
)

export const Decimal = Template.bind({})
Decimal.args = {
  value: 12345,
  style: 'decimal'
}

export const DecimalValues = IterateTemplateFactory(
  NumberFormatParts,
  'value'
).bind({})
DecimalValues.args = {
  style: 'decimal',
  value: 0,
  iterate: EXAMPLE_NUMBERS
}

export const DecimalLocales = IterateTemplateFactory(
  NumberFormatParts,
  'locale'
).bind({})
DecimalLocales.args = {
  style: 'decimal',
  value: 1234567.89,
  iterate: EXAMPLE_LOCALES
}
