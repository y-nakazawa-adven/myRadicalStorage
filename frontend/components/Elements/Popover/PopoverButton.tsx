import cn from 'classnames'

type Props = {
  className?: string
  icon?: JSX.Element
  placeholder?: string
  value?: string
  click: () => void
}

export const PopoverButton = ({ className, icon, placeholder = '', value, click }: Props) => {
  const btnClass =
    'focus:outline-none relative w-max rounded-lg border py-2.5 pr-4 text-sm focus:ring-2 focus:ring-blue-600'
  const paddingLeft = icon ? 'pl-8' : 'pl-2'

  return (
    <button className={cn([btnClass, paddingLeft], className)} onClick={click}>
      {icon && <div className="inset-y-2.25 absolute left-2">{icon}</div>}
      {value ? (
        <p className="text-left text-black">{value}</p>
      ) : (
        <p className="text-left text-gray-999">{placeholder}</p>
      )}
    </button>
  )
}
