import React from 'react'
import { Story } from '@storybook/react'
import { NumberFormatParts, NumberFormatPartsProps } from './NumberFormatParts'
import {
  NUMBER_COMMON_ARGS,
  NUMBER_FORMAT_ARGS_BY_STYLE
} from './storybook/argTypes'
import { IterateTemplateFactory } from './storybook/iterate'
import { EXAMPLE_LOCALES, EXAMPLE_NUMBERS } from './storybook/examples'
import { UNITS } from './storybook/constants'

export default {
  title: 'NumberFormatParts/style: unit',
  comment: NumberFormatParts,
  argTypes: { ...NUMBER_COMMON_ARGS, ...NUMBER_FORMAT_ARGS_BY_STYLE.unit }
}

const Template: Story<NumberFormatPartsProps> = (args) => (
  <NumberFormatParts {...args} />
)

export const Unit = Template.bind({})
Unit.args = {
  value: 12345,
  style: 'unit',
  unit: 'meter'
}

export const UnitValues = IterateTemplateFactory(
  NumberFormatParts,
  'value'
).bind({})
UnitValues.args = {
  style: 'unit',
  unit: 'meter',
  value: 0,
  iterate: EXAMPLE_NUMBERS
}

export const UnitLocales = IterateTemplateFactory(
  NumberFormatParts,
  'locale'
).bind({})
UnitLocales.args = {
  style: 'unit',
  unit: 'meter',
  value: 0.55,
  iterate: EXAMPLE_LOCALES
}

export const UnitUnits = IterateTemplateFactory(NumberFormatParts, 'unit').bind(
  {}
)
UnitUnits.args = {
  style: 'unit',
  unit: 'meter',
  value: 0.55,
  locale: 'en-GB',
  iterate: UNITS
}
