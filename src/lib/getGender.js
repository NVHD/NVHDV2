export const getGender = (anrede) => {
  if (anrede === 'female') {
    return 'in'
  } else if (anrede === 'male') {
    return ''
  } else {
    return '*in'
  }
}
