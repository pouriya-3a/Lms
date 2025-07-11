import { Button, Grid, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Course from '../../../Components/Course'
import { Link } from 'react-router-dom'

export default function Courses() {
    // Get All Courses
    const [courses , setCourses] = useState()
    useEffect(()=>{
        (async()=>{
            try {
                const res = await fetch('https://fakestoreapi.com/products')
                const data = await res.json()
                setCourses(data)
            } catch (error) {
                console.log(error)
            }
        })()
    },[])
    const items = courses?.map((e,index) => (
        <Course title={e.title} key={index} rating={e.rating.rate} category={e.category} image={e.image} id={e.id} price={e.price} /> 
    ))
  return (
    <Stack mt={15} spacing={2} alignItems={'center'}>
        <Typography variant='h5' fontWeight={'bold'}>Learn From <Typography color='primary' variant='h4' component={'span'}>Edemy</Typography></Typography>
        <Typography textAlign={'center'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae aliquid, itaque fuga numquam <br/> enim reiciendis inventore.</Typography>
        <Grid container>
            {courses ? items.slice(0,4) : 'Loading ...'}
        </Grid>
        <Link to={'/course-list'}><Button variant='outlined'>Show All Courses</Button></Link>
    </Stack>
  )
}
