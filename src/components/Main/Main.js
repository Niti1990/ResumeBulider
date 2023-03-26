import React from 'react'
import styles from './Main.module.css'
import header from '../../images/header.avif'
import flex1 from '../../images/flex1.png'
import flex2 from '../../images/flex2.png'
import flex3 from '../../images/flex3.png'

function Main() {
	return (
		<div>
			{' '}
			<div className={styles.container}>
				<div className={styles.left}>
					<p className={styles.heading}>
						A <span>Resume</span> that stands out!
					</p>
					<p className={styles.heading}>
						Make your own resume.<span>It's free</span>
					</p>
				</div>
				<div className={styles.right}>
					<img src={header} alt='resume' />
				</div>
			</div>
			{/* second container */}
			<div className={styles.container1}>
				<h1 className={styles.heading1}>Use ResumeBuilder...</h1>
				<p className={styles.para}>
					A simple way to build you resume and get started in your career.just
					enter your details and your resume is ready in less than 5 mins
				</p>
				<div className={styles.containerFlex}>
					<img src={flex1} alt='resume' />
					<img src={flex2} alt='resume' />
					<img src={flex3} alt='resume' />
				</div>
			</div>
		</div>
	)
}
export default Main
