import { useState } from 'react'

const EditableText = ({ text, placeholder, children }) => {
  const [displayText, setDisplayText] = useState(text)
  const [isEditing, setIsEditing] = useState(false)

  const changeDisplayText = () => {
    setDisplayText(children.props.value)
    setIsEditing(false)
  }
  
  return (
    <div>
      { isEditing ? (
        <div onBlur={changeDisplayText}>{children}</div>
      ) : (
        <div onClick={() => setIsEditing(true)}>
          <span>{displayText || placeholder}</span>
        </div>
      )}
    </div>
  )
}

export default EditableText