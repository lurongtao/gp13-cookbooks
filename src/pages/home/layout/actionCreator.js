import { SWITCHTAB } from './actionTypes'

export const switchSync = (checked) => {
  return {
    type: SWITCHTAB,
    checked
  }
}