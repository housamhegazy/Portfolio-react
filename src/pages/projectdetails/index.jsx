import { Box } from '@mui/material'
import React from 'react'
import { useParams } from 'react-router-dom'

export default function ProjectDetails() {
    const param = useParams()
  return (
    <Box>
        <img src={""} alt='img'/>
    </Box>
  )
}
