import { LucideIcon } from 'lucide-react'
import { useTheme } from 'styled-components'
import { Theme } from '../../styles/Theme'

type IconProps = {
  icon: LucideIcon
  color?: keyof Theme['color']['text']
  size?: 'small' | 'medium'
}

export function Icon({ icon: Icon, color = 'base', size = 'medium' }: IconProps) {
  const theme = useTheme()
  const colorHex = theme.color.text[color]
  const actualSize = {
    small: 16,
    medium: 24,
  }[size]

  return <Icon size={actualSize} color={colorHex} />
}
