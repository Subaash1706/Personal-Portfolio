const project1Array = [ 'image1', 'image2' ]
const project2Array = [ 'image1', 'image2', 'image3' ]

const project1 = project1Array.map((item, ind)=>`/Personal-Portfolio/assets/images/project1/${item}.png`)
const project2 = project2Array.map((item, ind)=>`/Personal-Portfolio/assets/images/project2/${item}.png`)

export { project1, project2 }