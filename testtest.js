var course = {
	name: 'JavaScript Applications',
	awesome: true,
	teachers: ["Assaf", "Shane"],
	students: [
		{
			name: 'Steve',
			computer: {
				OS: "Linux",
				type: "laptop"
			}
		},
		{
			name: "Katy",
			computer: {
				OS: "OSX",
				type: "macbook"
			}
		},
		{
			name: "Chuck",
			computer: {
				OS: "OSX",
				type: "macbook"
			}
		}

	],
	preReqs : {
		skills : ["html", "css", "git"],
		equipment: {
			laptop: true,
			OSOptions: ["linux", "osx"]
		}
	}
};

console.log("The name of the course is " + course.name);
console.log("The name of the second teacher is " + course.teachers[1]);
console.log(course.students[0].name + "is a student");
console.log("Katy's computer is a "+ course.students[1].computer.type);
console.log(course.preReqs.equipment);
console.log( "The second required OS is: " + course.preReqs.equipment.OSOptions[1]);
console.log( "The required OS is: " + course.preReqs.equipment.OSOptions[0] + " or " + course.preReqs.equipment.OSOptions[1]);
console.log("Students using osx are: " + nameList.join(','))
