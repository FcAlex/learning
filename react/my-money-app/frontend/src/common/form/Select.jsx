const Select = props => {
  const options = props.list || []
  return (
    <select {...props.input} >
      {options.map((item, index) => (
        <option value={item} key={index}>{item}</option>
      ))}
    </select>
  )
}

export default Select