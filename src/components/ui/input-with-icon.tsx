'use client';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { LucideIcon } from 'lucide-react';
import { InputHTMLAttributes, forwardRef } from 'react';

type InputWithIconProps = {
  Icon: LucideIcon;
  label: string;
  error: string | undefined;
} & InputHTMLAttributes<HTMLInputElement>;

export const InputWithIcon = forwardRef<HTMLInputElement, InputWithIconProps>(function Component(
  { Icon, label, error, ...inputProps },
  ref
) {
  const [parentRef] = useAutoAnimate();
  return (
    <div ref={parentRef} className="flex flex-col space-y-1">
      <label htmlFor={inputProps.id} className="font-medium text-gray-300/80">
        {label}
      </label>
      <div
        className={
          'flex items-center space-x-3 rounded-md border-2 border-gray-700 px-3 focus-within:border-gray-500'
        }
      >
        <Icon className="size-5 text-gray-500" />
        <input
          {...inputProps}
          className={`py-2 font-medium text-gray-300 placeholder:text-gray-600 ${inputProps.className}`}
          ref={ref}
        />
      </div>
      {error && <p className="pl-1 text-sm font-medium text-rose-500">{error}</p>}
    </div>
  );
});
