import { useFormContext } from 'react-hook-form'
import Checkbox from 'ui/primitives/Checkbox'
import Text from 'ui/primitives/Text'

export default function SaveInformationCheckbox() {
  const { register } = useFormContext()

  return (
    <Checkbox my="3" alignItems="flex-start" {...register('save_information')}>
      <Text
        color="_gray"
        fontSize="xs"
        st="checkout-page.passenger.save.data.label"
      />
    </Checkbox>
  )
}
