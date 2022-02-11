import { ChangeEventHandler } from 'react'

type InputFieldProps = {
  type?: 'text' | 'email' | 'password'
  id: string
  icon: JSX.Element
  placeholder?: string
  value: string
  width?: string
  change: ChangeEventHandler<HTMLInputElement>
}

export const InputField = ({
  type,
  id,
  icon,
  placeholder,
  value,
  width,
  change,
}: InputFieldProps) => (
  <label htmlFor={id} className="relative" tabIndex={0}>
    <div className="absolute inset-y-0 left-0 pl-2">{icon}</div>
    <input
      id={id}
      type={type}
      className={`focus:outline-none rounded-lg border py-2.5 pl-8 pr-2 text-xs focus:ring-2 focus:ring-blue-600 ${width}`}
      placeholder={placeholder}
      value={value}
      autoComplete="off"
      onChange={change}
    />
  </label>
)
