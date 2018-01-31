import React from 'react'
import Slider from 'atom/Slider'
import { Form, Field } from 'react-final-form'
import Styled from 'styled-components'

const SliderAdapter = ({input, meta}) => (
  <Slider
    onChange={(e, val) => {
      input.onChange(val)
    }}
    min={1}
    max={100}
    step={1}
  />
)
const required = value => (value ? undefined : 'Required')

class TopPage extends React.Component {
  render () {
    return (<div>
      <p> Hello React!</p>
      <Form
        onSubmit={() => {}}
        initialValues={{
          slider: ''
        }}
        validate={required}
        render={({ values }) => (
          <Wrap>
            <Field
              name='slider'
              component={SliderAdapter}
            />

            <pre>{JSON.stringify(values, 0, 2)}</pre>

          </Wrap>
        )}
      />
    </div>)
  }
}

export default TopPage


const Wrap = Styled.div`
  box-sizing: border-box;
  padding: 20px;
`
