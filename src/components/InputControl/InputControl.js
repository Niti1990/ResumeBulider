import React from 'react'
import styles from './InputControl.module.css'
function InputControl({label,...props}) {
	return (
  <div className={styles.container}>
    {label && <label>{label}</label>}
    {/* //we can pass any prop  by using spread opertor (onclick etc) */}
    <input type="text" {...props} />
    </div>
    )
}
export default InputControl
