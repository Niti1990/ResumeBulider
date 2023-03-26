import React from 'react'
// import './Contact.module.css'
import styles from './Contact.module.css'
import contact from '../../images/contact.png'
import contact1 from '../../images/contact1.png'

function Contact() {
	return (
		<div>
			<div className={styles.mainContainer}>
				<div className={styles.card1}>
					<img className={styles.contact1} src={contact1} alt='resume' />
					<img className={styles.contact} src={contact} alt='resume' />
				</div>

				{/* <div className={styles.card2}> */}
				<div className={styles.Container}>
					<form>
						<label for='fname'>First Name</label>
						<input
							type='text'
							id='fname'
							name='firstname'
							placeholder='Your name..'
						/>

						<label for='lname'>Last Name</label>
						<input
							type='text'
							id='lname'
							name='lastname'
							placeholder='Your last name..'
						/>

						<label for='lname'>Phone Number</label>
						<input
							type='text'
							id='lname'
							name='lastname'
							placeholder='Your Phone Number..'
						/>

						<label for='subject'>Subject</label>
						<textarea
							id='subject'
							name='subject'
							placeholder='Write something..'
							style={{ height: '200px' }}
						></textarea>

						<input className={styles.button} type='submit' value='Submit' />
					</form>
				</div>
			</div>
			{/* </div>{' '} */}
		</div>
	)
}
export default Contact
