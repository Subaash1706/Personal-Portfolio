const project1Array = [ 'image1' ]
const project2Array = [ 'image1' ]
const project3Array = [ 'image1' ]
const project4Array = [ 'image1' ]

const project1 = project1Array.map((item, ind)=>`/assets/images/ProjectImages/horizontal/project1/${item}.png`)
const project2 = project2Array.map((item, ind)=>`/assets/images/ProjectImages/horizontal/project2/${item}.png`)
const project3 = project3Array.map((item, ind)=>`/assets/images/ProjectImages/horizontal/project3/${item}.png`)
const project4 = project4Array.map((item, ind)=>`/assets/images/ProjectImages/horizontal/project4/${item}.png`)

const projectVert1 = project1Array.map((item, ind)=>`/assets/images/ProjectImages/vertical/project1/${item}.png`)
const projectVert2 = project2Array.map((item, ind)=>`/assets/images/ProjectImages/vertical/project2/${item}.png`)
const projectVert3 = project3Array.map((item, ind)=>`/assets/images/ProjectImages/vertical/project3/${item}.png`)
const projectVert4 = project4Array.map((item, ind)=>`/assets/images/ProjectImages/vertical/project4/${item}.png`)

export { project1, project2, project3, project4,  projectVert1,projectVert2, projectVert3, projectVert4 }