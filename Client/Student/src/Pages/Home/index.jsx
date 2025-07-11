import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import Navbar from '../../Components/Navbar'
import Header from './Header'
import Courses from './Courses'
import Companies from './Companies'

export default function Home() {
  return (
    <Stack>
      <Header />
      <Companies />
      <Courses />
    </Stack>
  )
}
