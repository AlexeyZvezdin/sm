import { CLOSE_MODAL_CITY, OPEN_MODAL_CITY } from '../actionTypes'

export function openModalCity() {
  return {
    type: OPEN_MODAL_CITY
  }
}

export function closeModalCity () {
  console.log('FIRED')
  return {
    type: CLOSE_MODAL_CITY
  }
}