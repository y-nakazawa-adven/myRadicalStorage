/*
ちょっとめんどくさいので、既製のものを利用
細かいデザインの調整だったり、実際自分で作るのもそこまで手間ではないので、
リファクタしてもOK
*/

import { Switch } from '@headlessui/react'
import { useState } from 'react'
import cn from 'classnames'

type Props = {
  className?: string
}

export const ToggleButton = ({ className }: Props) => {
  const [enabled, setEnabled] = useState(false)

  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className={cn(
        `${
          enabled ? 'bg-blue-600' : 'bg-gray-200'
        } relative inline-flex h-6 w-11 items-center rounded-full`,
        className,
      )}
    >
      <span className="sr-only">Enable notifications</span>
      <span
        className={`${
          enabled ? 'translate-x-6' : 'translate-x-1'
        } inline-block h-4 w-4 transform rounded-full bg-white`}
      />
    </Switch>
  )
}
