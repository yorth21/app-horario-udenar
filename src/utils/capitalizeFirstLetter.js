function capitalizeFirstLetter (text) {
  text = text.toLowerCase()
  return text.charAt(0).toUpperCase() + text.slice(1)
}

export { capitalizeFirstLetter }
