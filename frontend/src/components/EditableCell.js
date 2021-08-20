import { useState, useEffect } from 'react'

const EditableCell = ({
  value: initialValue,
  row: { index },
  column: { id },
  updateMyData
}) => {
  const [value, setValue] = useState(initialValue)

  useEffect(() => {
    setValue(initialValue)
  }, [initialValue])

  return <input value={value} onChange={e => setValue(e.target.value)} onBlur={() => updateMyData(index, id, value)} />
}

export default EditableCell