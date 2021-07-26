const Home = ( {user} ) => {
	const un = ( user ) => { 
		if (user) {
			return (user.username)
		}
		return ('')
	}
  	return (
	  	<div>
		  	<h1>
		  		Welcome to CalPlanner{un(user)}!
		  	</h1> 
		  	<h1>
		  		The number one place to discuss class schedules and talk about your favorite courses!
		  	</h1>
		  	<h1>
		  		Our Features
		  	</h1>
		  	<h2>
		  		Class Schedules For All Majors
		  	</h2>
		  	<h2>
		  		Dicussion Among Students
		  	</h2>
		  	<h2>
		  		Popularity and Difficulty Meter 
		  	</h2>
		</div>
  	)
}

export default Home
