import React from 'react'
import styled from 'styled-components'
import Text from 'components/atoms/Text'
import Grid from 'components/layout/Grid/index'
import CheckBox from 'components/molecules/CheckBox/index'
import { PREFECTURE_LIST } from 'utils/constant'

const CheckBoxWrapper = styled.div`
  padding: 20px;
`

const PrefectureCheckBox = () => {
  return (
    <>
      <Text>都道府県</Text>
      <CheckBoxWrapper>
        <Grid gridTemplateColumns="repeat(auto-fill, minmax(95px, 1fr))">
          {PREFECTURE_LIST.map((prefecture) => {
            return (
              <CheckBox
                key={prefecture.id}
                id={prefecture.id}
                label={prefecture.label}
              />
            )
          })}
        </Grid>
      </CheckBoxWrapper>
    </>
  )
}

export default PrefectureCheckBox
