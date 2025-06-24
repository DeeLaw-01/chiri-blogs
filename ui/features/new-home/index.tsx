'use client'

import HomeHeader from './header'
import Categories from './categories'
import Content from './content'
import HomeModals from './modals'
import Backlinks from './backlinks'
import { useHomeEffects } from './hooks/useHomeEffects'
import { HomeOverwriteData } from './types/home.type'
import { BlogWithoutContent } from '../blog/types/blog.type'

type HomeProps = {
  data: HomeOverwriteData
  blogs?: BlogWithoutContent[]
}

export default function NewHome({ data, blogs }: HomeProps) {
  useHomeEffects()

  return (
    <>
      <HomeHeader data={data} />
      <Categories />
      <Content />
      <HomeModals />
      <Backlinks />
    </>
  )
}
