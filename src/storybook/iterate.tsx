import React from 'react'
import { CommonFormatPartsProps } from '../types'
import { omit } from 'lodash'
import { LabelContainer, labelPartRenderer, LabelValue } from './label'
import { LabelProps } from './label.styles'

export const IterateTemplateFactory =
  <PropTypes extends CommonFormatPartsProps>(
    component: React.FC<PropTypes>,
    argName: keyof PropTypes
  ) =>
  ({
    iterate,
    showLabels,
    ...args
  }: PropTypes &
    LabelProps & {
      iterate: PropTypes[typeof argName][]
    }) => {
    // This should be fairly safe even with 'as unknown'
    // (unless given component's props clashes with 'iterate' or LabelProps)
    const arg = (args as unknown as PropTypes)[argName]
    const rest = omit(args, [argName]) as unknown as PropTypes
    const labelProps = { showLabels: showLabels ?? true }

    return (
      <>
        {[arg]
          .concat(iterate)
          .filter((item) => item !== undefined)
          .map((item, i) => (
            <LabelContainer key={i} {...labelProps}>
              {React.createElement(
                component,
                { ...rest, [argName]: item },
                labelPartRenderer
              )}
              <LabelValue {...labelProps}>
                {/* We could use JSON.stringify here but it doesn't work with NaN & Infinity */}
                {item instanceof Date ? item.toISOString() : item}
              </LabelValue>
            </LabelContainer>
          ))}
      </>
    )
  }
