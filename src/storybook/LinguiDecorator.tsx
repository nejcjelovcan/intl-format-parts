import { i18n } from '@lingui/core'
import { I18nProvider } from '@lingui/react'
import { DecoratorFn } from '@storybook/react'
import React from 'react'

export const LinguiDecorator: DecoratorFn = (Story) => (
  <I18nProvider i18n={i18n} forceRenderOnLocaleChange={false}>
    <Story />
  </I18nProvider>
)
