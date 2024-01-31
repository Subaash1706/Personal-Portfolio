const project1Array = [ 'image1' ]
const project2Array = [ 'image1' ]
const project3Array = [ 'image1' ]

const project1 = project1Array.map((item, ind)=>`/Personal-Portfolio/assets/images/project1/${item}.png`)
const project2 = project2Array.map((item, ind)=>`/Personal-Portfolio/assets/images/project2/${item}.png`)
const project3 = project3Array.map((item, ind)=>`/Personal-Portfolio/assets/images/project3/${item}.png`)

export { project1, project2, project3 }