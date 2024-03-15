function formatHours (numero) {
  if (numero >= 0 && numero <= 11) {
    return numero + ':00 AM'
  } else if (numero === 12) {
    return '12:00 PM'
  } else {
    return (numero - 12) + ':00 PM'
  }
}

export { formatHours }
