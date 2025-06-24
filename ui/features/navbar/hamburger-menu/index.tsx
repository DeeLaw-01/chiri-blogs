import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import Menu from 'ui/features/menu'
import Drawer from 'ui/primitives/Drawer'

type HamburgerMenuProps = {
  onClose: () => void
  isOpen: boolean
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ onClose, isOpen }) => {
  const pathname = usePathname()
  const [curr, setCurr] = useState<string>()

  useEffect(() => {
    if (curr !== pathname) {
      onClose()
      setCurr(pathname)
    }
  }, [pathname])

  return (
    <Drawer size={'sm'} onClose={onClose} isOpen={isOpen}>
      <Menu />
    </Drawer>
  )
}

export default HamburgerMenu
