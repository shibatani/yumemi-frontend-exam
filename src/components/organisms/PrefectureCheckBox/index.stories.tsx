import { ComponentMeta, ComponentStory } from '@storybook/react'
import PrefectureCheckBox from './index'

export default {
  title: 'Organisms/PrefectureCheckbox',
} as ComponentMeta<typeof PrefectureCheckBox>

const Template: ComponentStory<typeof PrefectureCheckBox> = () => (
  <PrefectureCheckBox />
)

export const Normal = Template.bind({})
