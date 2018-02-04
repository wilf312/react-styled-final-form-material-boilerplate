import React from 'react'
import { Form } from 'react-final-form'
import Styled from 'styled-components'

// import TimePicker from 'atom/TimePicker'
import TimePicker from 'material-ui/TimePicker'
import DatePicker from 'material-ui/DatePicker'

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
            <TimePicker
              disabled={false}
              autoOk
              hintText='Disabled TimePicker'
            />

            <DatePicker
              hintText='Landscape Dialog'
              disabled={false}
              openToYearSelection
            />
            {/*<ThirdPartyInput />*/}
            {/*<DefaultInput />*/}

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
