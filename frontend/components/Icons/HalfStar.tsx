import { Star } from '@components/Icons'

type Props = {
  width?: number
  height?: number
  filledClassName: string
  halfClassName: string
}
export const HalfStar = ({ filledClassName, halfClassName, width = 24, height = 24 }: Props) => (
  <div className="relative">
    <Star className={filledClassName} width={width} height={height} />
    <Star
      className={`absolute left-1/2 top-0 ${halfClassName}`}
      width={width}
      height={height}
      x={12}
    />
  </div>
)
