import { IoMdSpeedometer } from 'react-icons/io';
import { GiDiscussion } from 'react-icons/gi';
import { GrSchedules } from 'react-icons/gr';
const Home = ( {user} ) => {
	const un = ( user ) => { 
		if (user) {
			return (user.username)
		}
		return ('')
	}
  	return (
	  	<div className="text-center text-2xl p-2 ml-4">
		  	<h1 className="py-3 px-6 text-4xl p-2 ml-4">
		  		Welcome to CalPlanner{un(user)}!
		  	</h1> 
		  	<div className="p-4 whitespace-pre-wrap">
		  		The number one place to discuss class schedules and talk about your favorite courses!
		  	</div>
		  	<div className="py-32 text-4xl p-2 ml-4">
		  		Features
		  	</div>
			<div className="grid grid-cols-3 gap-2 place-items-center h-48">
			  	<div className="w-9/12 h-8">
			  		<div className="">
			  			<GrSchedules/>
			  		</div>
				  	<div>
				  		 Class Schedules For All Majors
				  	</div>
			  	</div>
			  	<div className="w-9/12 h-8">
			  		<div>
			  			<GiDiscussion/>
			  		</div>
				  	<div>
				  		 Dicussion Among Students
				  	</div>
			  	</div>
			  	<div className="w-9/12 h-8">
			  		<div>
			  			<IoMdSpeedometer/>
			  		</div>
				  	<div>
				  		Popularity and Difficulty Meter 
				  	</div>
			  	</div>
			  	
		  	</div>
		</div>
  	)
}

export default Home