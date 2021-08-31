import React from 'react'
import { Story } from '@storybook/react'
import { NumberFormatParts, NumberFormatPartsProps } from './NumberFormatParts'
import {
  NUMBER_COMMON_ARGS,
  NUMBER_FORMAT_ARGS_BY_STYLE
} from './storybook/argTypes'
import { IterateTemplateFactory } from './storybook/iterate'
import { EXAMPLE_LOCALES, EXAMPLE_PERCENT_NUMBERS } from './storybook/examples'

export default {
  title: 'NumberFormatParts/style: percent',
  comment: NumberFormatParts,
  argTypes: { ...NUMBER_COMMON_ARGS, ...NUMBER_FORMAT_ARGS_BY_STYLE.percent }
}

const Template: Story<NumberFormatPartsProps> = (args) => (
  <NumberFormatParts {...args} />
)

export const Percent = Template.bind({})
Percent.args = {
  value: 12345,
  style: 'percent'
}

export const PercentValues = IterateTemplateFactory(
  NumberFormatParts,
  'value'
).bind({})
PercentValues.args = {
  style: 'percent',
  value: 0,
  iterate: EXAMPLE_PERCENT_NUMBERS
}

export const PercentLocales = IterateTemplateFactory(
  NumberFormatParts,
  'locale'
).bind({})
PercentLocales.args = {
  style: 'percent',
  value: 0.55,
  iterate: EXAMPLE_LOCALES
}
