import React from 'react'
import "./studenthome.css"
import StudentHomeCard from './studenthomecard'
import StudentHomeTable from './studenthometable'
import StudentTwoCards from './studenttwocards'

const StudentHome = () => {
	return (
		<div className="student-home">
			<div className="student-home-content">
				<h3 className="student-home-h3">
					Hi, welcome back
				</h3>
				<div className="student-home-cards">
					{[
						[1,2,3,4].map(() => (
							<StudentHomeCard/>
						))
					]}
				</div>
				<StudentTwoCards/>
				<StudentHomeTable/>
			</div>
		</div>
	)
}

export default StudentHome
