import React from 'react'
import TextField from 'atom/TextField/adapt'
import Toggle from 'atom/Toggle/adapt'
import SelectField from 'atom/SelectField/adapt'
import Slider from 'adapt/Slider'
import { Form, Field } from 'react-final-form'
import Styled from 'styled-components'
import {composeValidators, required, basicLatin, checkIceCream} from '../util/validation'

import DefaultInput from 'organism/DefaultInput'

const dataSet = {
  SelectField: [
    {label: 'Chocolate', value: 1},
    {label: 'Vanilla', value: 2},
    {label: 'Cosmic taste ', value: -1}
  ]
}

class TopPage extends React.Component {
  render () {
    return (<div>
      <p> Hello React & final-form & material-ui & Styled-components!</p>
      <Form
        onSubmit={() => {}}
        initialValues={Object.assign({}, {
          Slider: 13,
          TextField: '',
          SelectField: '',
          Toggle: true
        }, {
          Text: 'Text',
          Color: '#00ff00',
          LuckyNumber: '2',
          PotateChips: [
            'consomme'
          ]
        })}
        validate={required}
        render={({ values }) => (
          <Wrap>
            <StyledSection>
              <h2>third party</h2>
              <h3>SelectField</h3>
              <Field
                name='SelectField'
                component={SelectField}
                value={values.SelectField}
                dataList={dataSet.SelectField}
                validate={composeValidators(checkIceCream)}
              />

              <h3>Slider</h3>
              <Field name='Slider' component={Slider} initialValue={values.Slider} />

              <h3>Text</h3>
              <Field
                name='TextField'
                component={TextField}
                validate={composeValidators(required, basicLatin)}
                defaultValue={values.TextField}
                hintText={'john titor'}
                disabled={false}
                floatingLabelText={'名前'}
                floatingLabelFixed
              />

              <h3>Toggle</h3>
              <Field
                name='Toggle'
                label={'名前'}
                disabled={false}
                defaultValue={values.Toggle}
                component={Toggle}
              />
            </StyledSection>

            <DefaultInput />

            <StyledPre>{JSON.stringify(values, 0, 2)}</StyledPre>

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

const StyledPre = Styled.pre`
  background-color: #e8e2e2;
  padding: 10px 15px;
`

const StyledSection = Styled.section`
  padding: 10px;
  margin-bottom: 30px;
  border: solid 1px #f0f0f0;
`
