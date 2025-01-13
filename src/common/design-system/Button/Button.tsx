import { ReactElement } from 'react';
import MuiButton from '@mui/material/Button'
import type { ButtonProps } from '@mui/material/Button'

type Props = {
    children: ButtonProps['children'];
    type?: ButtonProps['type'];
    disabled?: ButtonProps['disabled'];
    onClick: ButtonProps['onClick'];
    variant?: ButtonProps['variant'];

}

const Button = ({children,type = "button",disabled =false,onClick,variant = "text"} : Props) : ReactElement => {
  return (
    <MuiButton
        variant={variant}
        type={type}
        disabled={disabled}
        onClick={onClick}
    >
       {children}
    </MuiButton>
  )
}
export default Button