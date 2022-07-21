import React, { useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Modal2 from '../components/Modal'
import Button from '../components/Button'

export default {
  title: 'Modal2',
  component: Modal2,
  argTypes: {},
} as ComponentMeta<typeof Modal2>

function ModalTest(props: any) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open modal</Button>
      <Modal2 open={open} setOpen={setOpen}>
        Hello
      </Modal2>
    </>
  )
}

const Template: ComponentStory<typeof Modal2> = (args) => (
  <ModalTest {...args} />
)

export const Plain = Template.bind({})
Plain.args = {}

export const WithTitle = Template.bind({})
WithTitle.args = {
  title: 'Hello',
}
