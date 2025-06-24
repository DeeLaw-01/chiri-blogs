import { CustomVideoProps } from '../Video/video.type'
import { CustomImageProps } from '../Image/image.type'

export type CustomVideoImageProps =
  | ({ src: string } & CustomImageProps)
  | ({ src: string } & CustomVideoProps)

export type StyleType = {}
