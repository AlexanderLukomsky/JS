(function tuesday_2() {
  /* eslint-disable no-magic-numbers */
  const students = [
    { name: 'Den', age: 21, isMarried: false, scores: 90 },
    { name: 'Nick', age: 20, isMarried: false, scores: 120 },
    { name: 'David', age: 35, isMarried: true, scores: 70 },
    { name: 'Helen', age: 20, isMarried: false, scores: 110 },
    { name: 'Ann', age: 20, isMarried: true, scores: 105 },
    { name: 'John', age: 19, isMarried: false, scores: 100 },
  ];
  const user = {
    name: 'John',
    age: 35,
    friend: ['Alex', 'David', 'Nick'],
  };

  //1
  let copyUser = { ...user };

  // console.log(user === copyUser); // false
  // console.log(user.friend === copyUser.friend); //true

  //2;
  let deepCopyUser = { ...user, friend: [...user.friend] };

  //  console.log(user === deepCopyUser); // false
  //  console.log(user.friend === deepCopyUser.friend); // false

  //3
  let copyStudents = [...students];

  // console.log(students === copyStudents); //false
  //  console.log(students[0] === copyStudents[0]); //true

  //4
  let deepCopyStudents = students.map(student => ({ ...student }));

  // console.log(students === deepCopyStudents); //false
  // console.log(students[0] === deepCopyStudents[0]); //false

  //5
  let sortByName = [...deepCopyStudents].sort((a, b) => (a.name > b.name ? 1 : -1));

  //  console.log(sortByName);

  //5a
  let sortByScore = [...deepCopyStudents].sort((a, b) => b.scores - a.scores);

  // console.log(sortByScore);

  //6
  let bestStudents = deepCopyStudents.filter(student => student.scores >= 100);

  // console.log(bestStudents);

  //6a
  let topStudents = [...deepCopyStudents].sort((a, b) => b.scores - a.scores).slice(0, 3);

  //console.log(topStudents);
  //  console.log(deepCopyStudents);

  //6b
  let newDeepCopyStudents = [
    ...topStudents,
    ...[...deepCopyStudents]
      .sort((a, b) => b.scores - a.scores)
      .slice(3, deepCopyStudents.length),
  ];

  //console.log(newDeepCopyStudents);

  //7
  let notMarriedStudent = deepCopyStudents.filter(student => !student.isMarried);

  // console.log(notMarriedStudent);

  //8
  let studentsNames = deepCopyStudents.map(student => student.name);

  //  console.log(studentsNames);

  //8a
  let nameWithSpace = studentsNames.join(' ');

  // console.log(nameWithSpace);

  let nameWithComma = studentsNames.join(', ');

  // console.log(nameWithComma);

  //9
  let trueStudents = deepCopyStudents.map(student => ({ ...student, isStudent: true }));

  // console.log(trueStudents);

  //10
  let studentWithMarriedNick = deepCopyStudents.map(student =>
    student.name === 'Nick' ? { ...student, isMarried: true } : student,
  );

  //  console.log(studentWithMarriedNick);

  //11
  let ann = deepCopyStudents.find(student => student.name === 'Ann');

  // console.log(ann);

  //12
  let bestStudent = deepCopyStudents.reduce((acc, student) =>
    acc.scores > student.scores ? acc : student,
  );

  //  console.log(bestStudent);

  //13
  let scoresSum = deepCopyStudents.reduce((acc, student) => acc + student.scores, 0);

  // console.log(scoresSum);

  //14
  const addFriends = students => {
    return students.map((student, i) => {
      return {
        ...student,
        friends: students.filter((_, j) => j !== i).map(st => st.name),
      };
    });
  };

  // console.log(addFriends(students));
  // console.log(deepCopyStudents);
})();
