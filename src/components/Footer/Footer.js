import React from 'react'
import styles from './Footer.module.css'
function Footer() {
	return (
		<div>
			<footer>
				<div className={styles.container}>
					{' '}
					<p>
						Author: Nitika Bajaj
						<br />
						<a
							style={{ color: 'white' }}
							href='mailto:https://mail.google.com/mail/u/0/#inbox'
						>
							nitikadiwakar.bajaj@gmail.com
						</a>
					</p>
				</div>
			</footer>
		</div>
	)
}
export default Footer
