import { SvgXml } from 'react-native-svg'
import { search, message, profile, recent } from '../../assets/icons'

type Icon = keyof typeof IconMap

type SvgProps = {
  iconName: Icon
  width?: string
  height?: string
  fill?: string
}

const IconMap = {
  search,
  message,
  profile,
  recent,
}

export const Svg = ({ iconName, height, width, fill }: SvgProps) => (
  <SvgXml xml={IconMap[iconName]} width={width ?? '12px'} height={height ?? '12px'} fill={fill ?? 'none'} />
)
