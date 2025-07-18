import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import Navbar from '../../Components/Navbar'
import Header from './Header'
import Courses from './Courses'
import Companies from './Companies'
import Comments from './Comments'
import Footer from '../../Components/Footer'

export default function Home() {
  return (
    <Stack>
      <Header />
      <Companies />
      <Courses />
      <Comments />
      <Footer />
    </Stack>
  )
}
