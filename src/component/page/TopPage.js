import React from 'react'
import Slider from 'adapt/Slider'
import { Form, Field } from 'react-final-form'
import Styled from 'styled-components'

const required = value => (value ? undefined : 'Required')

class TopPage extends React.Component {
  render () {
    return (<div>
      <p> Hello React & final-form & material-ui & Styled-components!</p>
      <Form
        onSubmit={() => {}}
        initialValues={{
          Slider: 13,
          Text: 'Text',
          Color: '#00ff00',
          LuckyNumber: '2',
          PotateChips: [
            'consomme'
          ]
        }}
        validate={required}
        render={({ values }) => (
          <Wrap>
            <h2>Slider</h2>
            <Field name='Slider' component={Slider} initialValue={values.Slider} />

            <h2>Text</h2>
            <Field name='Text' type='text' component='input'  />



            <h2>Color</h2>
            <Field name="Color" component="select">
              <option />
              <option value="#ff0000">❤️ Red</option>
              <option value="#00ff00">💚 Green</option>
              <option value="#0000ff">💙 Blue</option>
            </Field>

            <h2>LuckyNumber</h2>
            <label><Field name="LuckyNumber" component="input" type="radio" value="1" />1</label>
            <label><Field name="LuckyNumber" component="input" type="radio" value="2" />2</label>
            <label><Field name="LuckyNumber" component="input" type="radio" value="3" />3</label>



            <h2>PotateChips</h2>
            <label><Field name="PotateChips" component="input" type="checkbox" value="salt" />salt</label>
            <label><Field name="PotateChips" component="input" type="checkbox" value="consomme" />consomme</label>

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
