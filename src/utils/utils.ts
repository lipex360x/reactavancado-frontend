export const getImageUrl = (url: string) => `${process.env.NEXT_PUBLIC_IMAGE_HOST}${url}`


interface CurrencyProps {
  value: number
  language?: string
  code?: string
}

export const numberToCurrency = ({ value, language = 'pt-br', code = 'BRL' }: CurrencyProps) => (
  new Intl.NumberFormat(language, { style: 'currency', currency: code }).format(value)
)
