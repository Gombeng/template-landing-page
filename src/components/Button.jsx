
const Button = ({label = 'Label', color, bg = '#00C6BF', margin}) => {
  return (
    <button className="btn p-2 px-5 rounded-pill" style={{ color: color, backgroundColor: bg, margin: margin }}>{label}</button>
  )
}

const ButtonOutline = ({label = 'Label', color, bg = '#00C6BF', margin}) => {
  return (
    <button className="btn btn-outline-info p-2 px-5 rounded-pill" style={{ color: color, backgroundColor: bg, margin: margin }}>{label}</button>
  )
}

export {Button, ButtonOutline}