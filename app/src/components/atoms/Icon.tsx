import { LucideIcon } from 'lucide-react'
import { useTheme } from 'styled-components'
import { Theme } from '../../styles/Theme'

type IconProps = {
  icon: LucideIcon
  color?: keyof Theme['color']['text']
}

export function Icon({ icon: Icon, color = 'base' }: IconProps) {
  const theme = useTheme()
  const colorHex = theme.color.text[color]

  return <Icon color={colorHex} />
}
