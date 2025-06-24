import {
  Box,
  HStack,
  Menu,
  MenuItem,
  MenuList,
  Spinner,
  VStack,
} from '@chakra-ui/react'
import { Select, chakraComponents } from 'chakra-react-select'
import Text from 'ui/primitives/Text'
import SearchIcon from '@/icons/new-homepage/pill-search.svg'
import { theme } from 'src/styles/theme'
import { useState } from 'react'
import { articles } from './help-data'
import { Article } from './help.model'
import { renderTrimmedString } from 'src/utils/renderUtils'
import { useRouter } from 'src/i18n/router'

const getChakraStyles = () => {
  const styles = {
    container: (provided) => ({
      ...provided,
      border: '0px',
      w: 'full',
    }),
    valueContainer: (provided) => ({
      ...provided,
      fontSize: { base: 'md', md: 'xl' },
      fontWeight: '500',
      color: 'primary',
    }),
    menu: (provided) => ({
      ...provided,
      width: 'full',
    }),
    control: (provided) => ({
      ...provided,
      border: '0px',
      bg: '_lightestgray',
      boxShadow: 'none',
      zIndex: '0 !important',
      borderRadius: 'full',
      h: '3.5rem',
    }),
    placeholder: (provided) => ({
      ...provided,
      position: 'absolute',
      ml: '2',
    }),
  }
  return { chakraStyles: styles }
}

const LocationMenu = ({ children, options, getValue }) => {
  const height = 120 // Height of each option. Required for virtualized.
  const [value] = getValue()
  const initialOffset = options.indexOf(value) * height

  return (
    <Menu>
      <MenuList>
        {children.type !== chakraComponents.NoOptionsMessage ? (
          <MenuItem
            height={height * (options.length > 3 ? 3 : options.length)}
            itemCount={children.length}
            itemSize={height}
            initialScrollOffset={initialOffset}
            backgroundColor="_white"
          >
            {({ index, style }) => <div style={style}>{children[index]}</div>}
          </MenuItem>
        ) : (
          children
        )}
      </MenuList>
    </Menu>
  )
}

const Option = ({ ...props }) => (
  <chakraComponents.Option {...props}>
    <VStack spacing="0" py="2" h="full" align="flex-start">
      <Text fontSize="xl" fontWeight="medium">
        {props?.data?.title}
      </Text>
      <Text fontSize="sm">
        {renderTrimmedString(props?.data?.description, 50, false)}
      </Text>
    </VStack>
  </chakraComponents.Option>
)

const ValueContainer = ({ children, ...props }) => (
  <chakraComponents.ValueContainer {...props}>
    <HStack w="100%" m="0px" p="0">
      <SearchIcon stroke={theme.colors.primary} height="25px" width="25px" />
      <HStack>{children}</HStack>
    </HStack>
  </chakraComponents.ValueContainer>
)

export default function SearchBox() {
  const [options, setOptions] = useState<Article[]>([])
  const router = useRouter()

  const handleSearch = (event: string) => {
    if (event === '') {
      setOptions([])
    } else {
      const articleOptions = articles.filter((a) => {
        return a.content.toLowerCase().search(event.toLowerCase()) > -1
      })

      if (articleOptions?.length > 0) setOptions(articleOptions)
    }
  }

  const handleSelect = (article: Article) => {
    router.push('/help/' + article.slug)
  }

  return (
    <Box w="full" display={'flex'} justifyContent={'center'}>
      <Select
        {...getChakraStyles()}
        onFocus={() => {}}
        aria-label="Search help center"
        options={options}
        noOptionsMessage={(e) =>
          e.inputValue ? <Text st="common.search.no.location.found" /> : null
        }
        loadingMessage={() => <Spinner />}
        filterOption={() => true}
        onInputChange={(event) => handleSearch(event)}
        isOptionSelected={() => false}
        components={{
          DropdownIndicator: () => null,
          IndicatorSeparator: () => null,
          Option,
          LocationMenu,
          ValueContainer,
        }}
        placeholder={<Text st="help-page.search.placeholder" />}
        onChange={(event) => handleSelect(event)}
      />
    </Box>
  )
}
