import {
  CALENDARS,
  CURRENCIES,
  LOCALES,
  NUMBERING_SYSTEMS,
  NUMBER_STYLES,
  UNITS
} from './constants'

const COMMON_ARGS = {
  locale: { control: { options: LOCALES, type: 'select' } },
  iterate: { table: { disable: true } },
  showLabels: { control: { type: 'boolean' } }
}

export const NUMBER_COMMON_ARGS = {
  value: {},
  ...COMMON_ARGS,
  style: { table: { disable: true } }
}

export const DATE_TIME_COMMON_ARGS = {
  value: { control: { type: 'date' } },
  ...COMMON_ARGS
}

const NUMBER_FORMAT_ARGS: Record<keyof Intl.NumberFormatOptions, unknown> = {
  // "only when notation is compact"
  compactDisplay: {
    options: ['short', 'long'],
    control: { type: 'inline-radio' }
  },
  // "if the style is "currency", the currency property must be provided"
  currency: {
    options: CURRENCIES,
    control: { type: 'select' }
  },
  // only for currency?
  currencyDisplay: {
    options: ['symbol', 'narrowSymbol', 'code', 'name'],
    control: { type: 'inline-radio' }
  },
  // in many locales, accounting format means to wrap the number with parentheses instead of appending a minus sign
  currencySign: {
    options: ['standard', 'accounting'],
    control: { type: 'inline-radio' }
  },
  localeMatcher: {
    options: ['best fit', 'lookup'],
    control: { type: 'inline-radio' }
  },
  notation: {
    options: ['standard', 'scientific', 'engineering', 'compact'],
    control: { type: 'inline-radio' }
  },
  // Not yet in the typescript Intl definitions?
  //   numberingSystem: {
  //     options: ([undefined] as (string | undefined)[]).concat(NUMBERING_SYSTEMS)
  //   },
  signDisplay: {
    options: ['auto', 'never', 'always', 'exceptZero'],
    control: { type: 'inline-radio' }
  },
  style: {
    options: NUMBER_STYLES,
    control: { type: 'inline-radio' }
  },
  unit: {
    options: UNITS,
    control: { type: 'select' }
  },
  unitDisplay: {
    options: ['long', 'short', 'narrow'],
    control: { type: 'inline-radio' }
  },
  useGrouping: {
    control: { type: 'boolean' }
  },
  minimumIntegerDigits: {
    control: { type: 'range', min: 1, max: 21, step: 1 }
  },
  minimumFractionDigits: {
    control: { type: 'range', min: 0, max: 20, step: 1 }
  },
  maximumFractionDigits: {
    control: { type: 'range', min: 0, max: 20, step: 1 }
  },
  minimumSignificantDigits: {
    control: { type: 'range', min: 1, max: 21, step: 1 }
  },
  maximumSignificantDigits: {
    control: { type: 'range', min: 1, max: 21, step: 1 }
  }
}

const NUMBER_FORMAT_COMMON_ARGS = (({
  notation,
  compactDisplay,
  signDisplay,
  useGrouping,
  minimumIntegerDigits,
  minimumFractionDigits,
  maximumFractionDigits,
  minimumSignificantDigits,
  maximumSignificantDigits
}) => ({
  notation,
  compactDisplay,
  signDisplay,
  useGrouping,
  minimumIntegerDigits,
  minimumFractionDigits,
  maximumFractionDigits,
  minimumSignificantDigits,
  maximumSignificantDigits
}))(NUMBER_FORMAT_ARGS)

export const NUMBER_FORMAT_ARGS_BY_STYLE = {
  decimal: NUMBER_FORMAT_COMMON_ARGS,
  currency: {
    ...(({ currency, currencyDisplay, currencySign }) => ({
      currency,
      currencyDisplay,
      currencySign
    }))(NUMBER_FORMAT_ARGS),
    ...NUMBER_FORMAT_COMMON_ARGS
  },
  percent: NUMBER_FORMAT_COMMON_ARGS,
  unit: {
    ...(({ unit, unitDisplay }) => ({
      unit,
      unitDisplay
    }))(NUMBER_FORMAT_ARGS),
    ...NUMBER_FORMAT_COMMON_ARGS
  }
}

export const DATE_TIME_FORMAT_ARGS: Record<
  keyof Intl.DateTimeFormatOptions,
  unknown
> = {
  dateStyle: {
    options: ['full', 'long', 'medium', 'short'],
    control: { type: 'inline-radio' }
  },
  timeStyle: {
    options: ['full', 'long', 'medium', 'short'],
    control: { type: 'inline-radio' }
  },
  calendar: { options: CALENDARS, control: { type: 'select' } },
  dayPeriod: {
    options: ['narrow', 'short', 'long'],
    control: { type: 'inline-radio' }
  },
  numberingSystem: {
    options: NUMBERING_SYSTEMS,
    control: { type: 'select' }
  },
  localeMatcher: {
    options: ['best fit', 'lookup'],
    control: { type: 'inline-radio' }
  },
  // TODO timezones
  timeZone: {},
  hour12: { control: { type: 'boolean' } },
  hourCycle: {
    options: ['h11', 'h12', 'h23', 'h24'],
    control: { type: 'inline-radio' }
  },
  formatMatcher: {
    options: ['best fit', 'basic'],
    control: { type: 'inline-radio' }
  },
  weekday: {
    options: ['long', 'short', 'narrow'],
    control: { type: 'inline-radio' }
  },
  era: {
    options: ['long', 'short', 'narrow'],
    control: { type: 'inline-radio' }
  },
  year: {
    options: ['numeric', '2-digit'],
    control: { type: 'inline-radio' }
  },
  month: {
    options: ['numeric', '2-digit', 'long', 'short', 'narrow'],
    control: { type: 'inline-radio' }
  },
  day: {
    options: ['numeric', '2-digit'],
    control: { type: 'inline-radio' }
  },
  hour: {
    options: ['numeric', '2-digit'],
    control: { type: 'inline-radio' }
  },
  minute: {
    options: ['numeric', '2-digit'],
    control: { type: 'inline-radio' }
  },
  second: {
    options: ['numeric', '2-digit'],
    control: { type: 'inline-radio' }
  },
  fractionalSecondDigits: {
    options: [0, 1, 2, 3],
    control: { type: 'inline-radio' }
  },
  timeZoneName: {
    options: [
      'long',
      'short',
      'shortOffset',
      'longOffset',
      'shortGeneric',
      'longGeneric'
    ],
    control: { type: 'inline-radio' }
  }
}
