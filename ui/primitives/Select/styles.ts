import { SystemStyleObject } from '@chakra-ui/react'

export const styles = {
  styles: {
    menuPortal: (provided: SystemStyleObject) => ({
      ...provided,
      zIndex: 1555,
    }),
  },
  chakraStyles: {
    control: (provided: SystemStyleObject) => ({
      ...provided,
      height: 'unset',
      minH: '2.5rem',
    }),
    container: (provided: SystemStyleObject) => ({
      ...provided,
      width: '100%',
    }),
    option: () => ({
      px: 2,
      _hover: { bg: '_lightestgray' },
    }),
    singleValue: (provided: SystemStyleObject) => ({
      ...provided,
      textAlign: 'left',
      display: 'inline-block',
      width: '100%',
    }),
    menuList: (provided: SystemStyleObject) => ({
      ...provided,
      padding: 0,
      margin: 0,
      borderRadius: 'md',
    }),
    placeholder: (provided: SystemStyleObject) => ({
      ...provided,
      textAlign: 'left',
    }),
  },
}
