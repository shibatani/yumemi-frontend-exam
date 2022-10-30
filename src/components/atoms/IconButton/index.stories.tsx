import { ComponentMeta, ComponentStory } from '@storybook/react'
import { CheckBoxOutlineBlankIcon, CheckBoxIcon } from './'

export default {
  title: 'Atoms/IconButton',
  argTypes: {
    color: {
      control: { type: 'string' },
      description: 'アイコン色',
      table: {
        type: { summary: 'ThemeColors' },
      },
    },
    backgroundColor: {
      control: { type: 'color' },
      description: '背景色',
      table: {
        type: { summary: 'string' },
      },
    },
    size: {
      control: { type: 'number' },
      defaultValue: 24,
      description: 'アイコンのサイズ',
      table: {
        type: { summary: 'number' },
      },
    },
    onClick: {
      description: 'onClickイベントハンドラ',
      table: {
        type: { summary: 'function' },
      },
    },
  },
} as ComponentMeta<typeof CheckBoxIcon>

const Template: ComponentStory<typeof CheckBoxIcon> = (args) => (
  <>
    <CheckBoxIcon {...args} />
    <CheckBoxOutlineBlankIcon {...args} />
  </>
)

export const Normal = Template.bind({})
