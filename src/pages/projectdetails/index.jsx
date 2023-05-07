import { Box } from '@mui/material'
import { useParams } from 'react-router-dom'
import { projects } from "assest/data";
export default function ProjectDetails() {
    const param = useParams()
    console.log(param.id)
    const project = projects.find((item)=>item.id === Number(param.id))
  return (
    <Box>
        <img style={{width:"100%"}} src={project.imgURL} alt='img'/>
    </Box>
  )
}
