var skills = ['Dev', 'DevOps', 'Testing'];
for (var _i = 0, skills_1 = skills; _i < skills_1.length; _i++) {
    var skill = skills_1[_i];
    console.log(skill.toLowerCase());
}
var result = skills
    .filter(function (skill) { return skill !== 'DevOps'; })
    .map(function (skill) { return skill + '!'; })
    .reduce(function (a, b) { return a + b; });
console.log(result);
