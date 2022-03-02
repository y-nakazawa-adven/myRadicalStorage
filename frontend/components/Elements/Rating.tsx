import { HalfStar, Star } from '@components/Icons'
import { memo } from 'react'

type Props = {
  width?: number
  height?: number
  x?: number
  y?: number
  filledClassName: string
  emptyClassName: string
  rate: number
}
export const Rating = memo(
  ({ filledClassName, emptyClassName, width = 24, height = 24, rate }: Props) => {
    return (
      <ul className="flex flex-row items-center justify-start">
        {[...Array(5)].map((_, i) => {
          if (rate >= i + 1) {
            return (
              <li key={`rating-${i}`}>
                <Star className={filledClassName} width={width} height={height} />
              </li>
            )
          }
          if (rate - i >= 0.5) {
            return (
              <li key={`rating-${i}`}>
                <HalfStar
                  filledClassName={filledClassName}
                  halfClassName={emptyClassName}
                  width={width}
                  height={height}
                />
              </li>
            )
          }
          return (
            <li key={`rating-${i}`}>
              <Star className={emptyClassName} width={width} height={height} />
            </li>
          )
        })}
      </ul>
    )
  },
)
