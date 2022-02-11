import cn from 'classnames'

type Props = {
  className?: string
  icon?: JSX.Element
  placeholder?: string
  value?: string
  click: () => void
}

export const Button = ({ className, icon, placeholder = '', value, click }: Props) => {
  const paddingLeft = icon ? 'pl-8' : 'pl-2'

  return (
    <button className={cn(paddingLeft, className)} onClick={click}>
      {icon && <div className="inset-y-1.75 absolute left-2">{icon}</div>}
      {value ? (
        <p className="text-left text-black">{value}</p>
      ) : (
        <p className="text-left text-gray-999">{placeholder}</p>
      )}
    </button>
  )
}
