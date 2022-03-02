import cn from 'classnames'
import { memo } from 'react'

type Props = {
  className?: string
  icon?: JSX.Element
  placeholder?: string
  value?: string
  click: () => void
}

export const Button = memo(({ className, icon, placeholder = '', value, click }: Props) => {
  return (
    <button className={cn({ 'relative pl-8': icon }, className)} onClick={click}>
      {icon && <div className="absolute inset-y-1.75 left-2">{icon}</div>}
      {value ? (
        <p className="text-black">{value}</p>
      ) : (
        <p className="text-gray-999">{placeholder}</p>
      )}
    </button>
  )
})
