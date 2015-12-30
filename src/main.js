const retArr = (a,b, ...args) => {
  console.log(args);
}

// retArr(1,2,3,4,5);

var austin = {
  name: 'austin',
  skills: ['js', 'html', 'java'],
  saySkills() {
    this.skills.forEach((skill) => {
      console.log(skill);
    });
  },
  sleeping: false
}

var austinSaySkills = austin.saySkills;
austinSaySkills();
