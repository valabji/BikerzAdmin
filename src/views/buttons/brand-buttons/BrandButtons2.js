import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

const BrandButtons = () => {
  return (
    <CRow>
      <CCol xs="12">
        <CCard>
          <CCardHeader>
            Main Dashboard
          </CCardHeader>
          <CCardBody>
            <h4>Some Data must be here
            </h4>
          </CCardBody>
        </CCard>
      </CCol>
  </CRow>
  )
}

export default BrandButtons
