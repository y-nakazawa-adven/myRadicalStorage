/*
Modal component
TODO:
  1. 表示位置を上にするオプションはあったほうがいいかもね
  2. transition（上からスライドしてくるとかはいらない）
*/

import { memo, useState } from 'react'
import cn from 'classnames'
import { Button } from '.'
import { Overlay } from './Overlay'
import { Close } from '@components/Icons'

type Props = {
  className?: string
  icon?: JSX.Element
  text: string
  title?: string
  children: React.ReactNode
  submitText?: string
  submitFunc?: () => void
}

export const Modal = memo(
  ({ className, icon, text, title, children, submitText, submitFunc }: Props) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
      <div
        onBlur={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget)) setIsOpen(false)
        }}
      >
        <Button
          className={cn(
            'focus:outline-none w-max rounded-lg border py-2.5 pr-3 focus:ring-2 focus:ring-blue-600',
            className,
          )}
          icon={icon}
          value={text}
          click={() => setIsOpen(!isOpen)}
        />
        {isOpen && (
          <div>
            <Overlay />
            <div
              className="fixed top-1/2 left-1/2 z-40 h-auto w-max -translate-x-1/2 -translate-y-1/2 transform rounded-md bg-white p-2"
              tabIndex={0}
            >
              <div className="relative">
                <div className="flex cursor-pointer justify-end" onClick={() => setIsOpen(false)}>
                  <Close className="fill-black" width="18" height="18" />
                </div>
                <p className="mt-2 text-center text-base font-bold">{title}</p>
              </div>
              <div className="mt-2">{children}</div>
              {!!submitText && (
                <div className="mt-6 mb-2 flex justify-center">
                  <Button
                    click={() => {
                      setIsOpen(false)
                      !!submitFunc && submitFunc()
                    }}
                    value={submitText}
                    className="focus:outline-none w-max rounded-lg border py-2 px-4 text-center focus:ring-2 focus:ring-blue-600"
                  />
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    )
  },
)
