import { memo, useState } from 'react'
import cn from 'classnames'
import { Button } from '@components/Elements'

type Props = {
  className?: string
  icon?: JSX.Element
  placeholder?: string
  value: string
  children: React.ReactNode
}

export const Popover = memo(({ className, icon, placeholder, value, children }: Props) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div
      className="relative"
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setIsOpen(false)
      }}
    >
      <Button
        className={cn(
          className,
          'focus:outline-none w-max rounded-lg border py-2.5 pr-3 focus:ring-2 focus:ring-blue-600',
        )}
        icon={icon}
        placeholder={placeholder}
        value={value}
        click={() => setIsOpen(!isOpen)}
      />
      {isOpen && (
        <div
          className="absolute -inset-x-1/4 z-20 mt-1 w-max rounded-md bg-white p-2 shadow-md"
          tabIndex={0}
        >
          {children}
        </div>
      )}
    </div>
  )
})
