const skills: string[] = ['Dev', 'DevOps', 'Testing'];

for (const skill of skills) {
    console.log(skill.toLowerCase());
}

const result = skills
    .filter((skill: string) => skill !== 'DevOps')
    .map(skill => skill + '!')
    .reduce((a, b) => a + b);

console.log(result);
