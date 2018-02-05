import React from 'react'
import { Form } from 'react-final-form'
import Styled from 'styled-components'

import DefaultInput from 'organism/DefaultInput'
import ThirdPartyInput from 'organism/ThirdPartyInput'

import {required} from 'src/component/util/validation'

class TopPage extends React.Component {
  render () {
    return (<div>
      <p> Hello React & final-form & material-ui & Styled-components!</p>
      <Form
        onSubmit={() => {}}
        initialValues={Object.assign({}, {
          Slider: 13,
          DatePicker: new Date(),
          TimePicker: new Date(),
          TextField: '',
          SelectField: '',
          Checkbox: ['UI design'],
          Toggle: true
        }, {
          Text: 'Text',
          Color: '#00ff00',
          LuckyNumber: '2',
          PotateChips: [
            'consomme'
          ],
          Ice: [
            'Chocolate'
          ]
        })}
        validate={required}
        render={({ values }) => (
          <Wrap>
            <Item>
              <ThirdPartyInput />
            </Item>
            <Item>
              <DefaultInput />
            </Item>
            <Item>
              <StyledPre>{JSON.stringify(values, 0, 2)}</StyledPre>
            </Item>
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
  display: flex;
  flex-direction row;
  justify-content: space-between;
`

const Item = Styled.div`
  display: flex;
  margin: 20px;
  width: 33%;
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
