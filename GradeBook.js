function getAverage(scores) {
	let sum = 0;

	for (const score of scores) {
		sum += score;
	}

	return sum / scores.length;
}

function getGrade(score) {
	if (score === 100) {
		return "A++";
	} else if (score >= 90) {
		return "A";
	} else if (score >= 80) {
		return "B";
	} else if (score >= 70) {
		return "C";
	} else if (score >= 60) {
		return "D";
	} else {
		return "F";
	}
}

function hasPassingGrade(score) {
	return getGrade(score) !== "F";
}

function studentMsg(totalScores, studentScore) {
	if (hasPassingGrade(studentScore)) {
		return (
			"Class average: " +
			getAverage(totalScores) +
			". Your grade: " +
			getGrade(studentScore) +
			". You passed the course."
		);
	} else {
		return (
			"Class average: " +
			getAverage(totalScores) +
			". Your grade: " +
			getGrade(studentScore) +
			". You failed the course."
		);
	}
}
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
console.log(studentMsg([92, 82, 32, 57, 57, 100, 97, 88, 57, 79], 98));
console.log(studentMsg([96, 28, 62, 87, 56, 100, 57, 34, 27, 99], 87));
console.log(studentMsg([32, 28, 92, 47, 47, 100, 69, 18, 94, 86], 57));
console.log(studentMsg([90, 83, 17, 72, 97, 100, 27, 78, 96, 85], 99));
console.log("GradeBook.js");
//Use 'node GradeBook.js' in the terminal to run this code
