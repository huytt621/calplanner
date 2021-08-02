const Home = ( {user} ) => {
	const un = ( user ) => { 
		if (user) {
			return (user.username)
		}
		return ('')
	}
  	return (
	  	<div className="text-center text-2xl p-2 ml-4">
		  	<h1 className="mx-4 bg-yellow-400 rounded-lg rounded-full py-3 px-6 text-4xl p-2 ml-4">
		  		Welcome to CalPlanner{un(user)}!
		  	</h1> 
		  	<div className="mx-52 bg-blue-400 rounded-lg rounded-full p-4 whitespace-pre-wrap">
		  		The number one place to discuss class schedules and talk about your favorite courses!
		  	</div>
		  	<div className="py-32 text-4xl p-2 ml-4">
		  		Features
		  	</div>
			<div className="grid grid-cols-3 gap-2 place-items-center h-48">
			  	<div className="rounded-full border-solid bg-green-400 w-9/12 h-8">
			  		Class Schedules For All Majors
			  	</div>
			  	<div className="rounded-full border-solid bg-red-400 w-9/12 h-8">
			  		Dicussion Among Students
			  	</div>
			  	<div className="rounded-full border-solid bg-blue-400 w-9/12 h-8">
			  		Popularity and Diffic ulty Meter 
			  	</div>
		  	</div>
		</div>
  	)
}

export default Home