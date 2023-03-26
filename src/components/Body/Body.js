import React, { useState, useRef } from 'react'
import ReactToPrint from 'react-to-print'
import styles from './Body.module.css'
import { ArrowDown } from 'react-feather'
import Editor from '../Editor/Editor'
import Resume from '../Resume/Resume'
function Body() {
	// declare variable for color selection
	const colors = ['#239ce2', '#48bb78', '#0bc5ea', '#a0aec0', '#ed8936']
	//declare object variable for sections.
	const sections = {
		basicInfo: 'Basic Info',
		workExp: 'Work Experience',
		project: 'Projects',
		education: 'Education',
		achievement: 'Achievements',
		summary: 'Summary',
		other: 'Other',
	}

	const resumeRef = useRef()

	//state for color selection
	const [activeColor, setActiveColor] = useState(colors[0])

	//create state for storing the information of resume.
	const [resumeInformation, setResumeInformation] = useState({
		[sections.basicInfo]: {
			// id: sections.basicInfo,
			sectionTitle: sections.basicInfo,
			detail: {},
		},
		[sections.workExp]: {
			id: sections.workExp,
			sectionTitle: sections.workExp,
			details: [],
		},
		[sections.project]: {
			id: sections.project,
			sectionTitle: sections.project,
			details: [],
		},
		[sections.education]: {
			id: sections.education,
			sectionTitle: sections.education,
			details: [],
		},
		[sections.achievement]: {
			id: sections.achievement,
			sectionTitle: sections.achievement,
			points: [],
		},
		[sections.summary]: {
			id: sections.summary,
			sectionTitle: sections.summary,
			detail: '',
		},
		[sections.other]: {
			id: sections.other,
			sectionTitle: sections.other,
			detail: '',
		},
	})
	// useEffect(() => {
	// 	console.log(resumeInformation)
	// }, [resumeInformation])

	return (
		<div className={styles.container}>
			{/* heading */}
			<p className={styles.heading}>Resume Builder</p>
			<div className={styles.toolbar}>
				<div className={styles.colors}>
					{/* choose the color */}
					{colors.map(item => (
						<span
							key={item}
							style={{ backgroundColor: item }}
							className={`${styles.color} ${
								activeColor === item ? styles.active : ''
							}`}
							onClick={() => setActiveColor(item)}
						/>
					))}
					{/* <span className={styles.color} />
					<span className={styles.color} />
					<span className={styles.color} />
					<span className={styles.color} />
					<span className={styles.color} /> */}
				</div>

				{/* for printing  */}

				<ReactToPrint
					trigger={() => {
						return (
							<button>
								Download
								<ArrowDown />
							</button>
						)
					}}
					content={() => resumeRef.current}
				/>
			</div>
			{/*  call Editor */}
			<div className={styles.main}>
				{/* information pass in editor component and receive the information in editor*/}
				<Editor
					sections={sections}
					information={resumeInformation}
					setInformation={setResumeInformation}
				/>
				<Resume
					ref={resumeRef}
					sections={sections}
					information={resumeInformation}
					activeColor={activeColor}
				/>
			</div>
		</div>
	)
}
export default Body
