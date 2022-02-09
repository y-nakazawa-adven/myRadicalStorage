type Props = {
  width?: string | number
  height?: string | number
  className: string
}
export const Minus = ({ className, height = 18, width = 18 }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={height}
    viewBox="0 0 24 24"
    width={width}
    className={className}
  >
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
  </svg>
)
