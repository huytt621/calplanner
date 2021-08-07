import { useState } from 'react'

const EditableText = ({ text, placeholder, children }) => {
  const [isEditing, setIsEditing] = useState(false)
  
  return (
    <div>
      { isEditing ? (
        <div onBlur={() => setIsEditing(false)}>{children}</div>
      ) : (
        <div onClick={() => setIsEditing(true)}>
          <span>{text || placeholder}</span>
        </div>
      )}
    </div>
  )
}

export default EditableText