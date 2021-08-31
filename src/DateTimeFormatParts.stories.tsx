import React from 'react'
import { Story } from '@storybook/react'
import {
  DateTimeFormatParts,
  DateTimeFormatPartsProps
} from './DateTimeFormatParts'
import { IterateTemplateFactory } from './storybook/iterate'
import {
  DATE_TIME_COMMON_ARGS,
  DATE_TIME_FORMAT_ARGS
} from './storybook/argTypes'
import { EXAMPLE_LOCALES } from './storybook/examples'

export default {
  title: 'DateTimeFormatParts',
  comment: DateTimeFormatParts,
  argTypes: {
    ...DATE_TIME_COMMON_ARGS,
    ...DATE_TIME_FORMAT_ARGS
  }
}

const Template: Story<DateTimeFormatPartsProps> = (args) => (
  <DateTimeFormatParts {...args} />
)

export const Datetime = Template.bind({})
Datetime.args = {
  value: new Date()
}

export const DatetimeValues = IterateTemplateFactory(
  DateTimeFormatParts,
  'value'
).bind({})
DatetimeValues.args = {
  value: new Date(),
  iterate: [new Date(), new Date(), new Date()]
}

export const DatetimeLocales = IterateTemplateFactory(
  DateTimeFormatParts,
  'locale'
).bind({})
DatetimeLocales.args = {
  value: new Date(),
  iterate: EXAMPLE_LOCALES
}
