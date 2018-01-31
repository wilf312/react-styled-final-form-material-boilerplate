import React from 'react'
import Slider from 'atom/Slider'
import { Form, Field } from 'react-final-form'
import Styled from 'styled-components'

const SliderAdapter = ({input, meta}) => (
  <Slider
    onChange={(e, val) => {

