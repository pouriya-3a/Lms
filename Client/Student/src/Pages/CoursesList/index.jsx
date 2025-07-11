import { Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Course from '../../Components/Course'

export default function CoursesList() {
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
    <Grid container>
      {courses ? items : 'Loading ...'}
    </Grid>
  )
}
