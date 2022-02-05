type Props = {
  width?: string | number
  height?: string | number
  className: string
}
export const ArrowDropUp = ({ className, height = 18, width = 18 }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={height}
    viewBox="0 0 24 24"
    width={width}
    className={className}
  >
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M7 14l5-5 5 5H7z" />
  </svg>
)
