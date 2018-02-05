import React from 'react'
import Styled from 'styled-components'
import { Field } from 'react-final-form'

export default () => (
  <StyledSection>
    <Title>default input type</Title>
    <h3>Text</h3>
    <Field name='Text' type='text' component='input' />

    <h3>Color</h3>
    <Field name='Color' component='select'>
      <option />
      <option value='#ff0000'>❤️ Red</option>
      <option value='#00ff00'>💚 Green</option>
      <option value='#0000ff'>💙 Blue</option>
    </Field>

    <h3>LuckyNumber</h3>
    <label><Field name='LuckyNumber' component='input' type='radio' value='1' />1</label>
    <label><Field name='LuckyNumber' component='input' type='radio' value='2' />2</label>
    <label><Field name='LuckyNumber' component='input' type='radio' value='3' />3</label>

    <h3>PotateChips</h3>
    <label><Field name='PotateChips' component='input' type='checkbox' value='salt' />salt</label>
    <label><Field name='PotateChips' component='input' type='checkbox' value='consomme' />consomme</label>

  </StyledSection>
)

const StyledSection = Styled.section`
  width: 100%;
  padding: 10px;
  margin-bottom: 30px;
  border: solid 1px #f0f0f0;
`

const Title = Styled.h2`
  border-bottom: solid 3px;
  padding-bottom: 3px;
`
