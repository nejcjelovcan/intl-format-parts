export interface CommonFormatPartsProps {
  locale?: string
}

export type PartRenderer<FormatPart> = (
  part: FormatPart,
  i: number
) => React.ReactNode

export type FormatPartsProps<
  ValueType,
  OptionsType extends object,
  FormatPart extends object
> = CommonFormatPartsProps & {
  value: ValueType
  children: PartRenderer<FormatPart>
} & OptionsType
