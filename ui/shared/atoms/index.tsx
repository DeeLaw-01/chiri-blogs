import { atom, useAtom } from 'jotai'

const atoms = {
  hamburgerMenuAtom: atom<boolean>(false),
}

export default function usePrimitiveDrawerAndModalsState() {
  const [isOpenHamburgerMenu, setIsOpenHamburgerMenu] = useAtom(
    atoms.hamburgerMenuAtom
  )

  const onOpenHamburgerMenu = () => {
    setIsOpenHamburgerMenu(true)
  }

  const onCloseHamburgerMenu = () => {
    setIsOpenHamburgerMenu(false)
  }

  return {
    isOpenHamburgerMenu,
    onOpenHamburgerMenu,
    onCloseHamburgerMenu,
  }
}
