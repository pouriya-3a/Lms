import { Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Course from '../../Components/Course'
import { useParams } from 'react-router-dom'

export default function CoursesList() {
  const { input } = useParams()
  console.log(input)
  // Get All Courses
      const [courses , setCourses] = useState()
      useEffect(()=>{
          (async()=>{
              try {
                  const res = await fetch('https://fakestoreapi.com/products')
                  const data = await res.json()
                  if (input) {
                    const items = data?.filter((e) => e.title.includes(input))
                    items.length > 0 ? setCourses(items) : setCourses([{title:'Nothing Found' , image:'' , rating:{rate:'0'},category:'...',price:'0',id:''}])
                  }
                  else{
                    setCourses(data)
                  }
              } catch (error) {
                  console.log(error)
              }
          })()
      },[])
      const items = courses?.map((e,index) => (
          <Course title={e.title} key={index} rating={e.rating.rate} category={e.category} image={e.image} id={e.id} price={e.price} /> 
      ))
  return (
    <>
    <Typography px={3} my={5} variant='h5' color='primary'>Courses List ...</Typography>
    <Grid sx={{justifyContent:'center'}} container>
      {courses ? items : <Typography textAlign={'center'}>Loading ...</Typography>}
    </Grid>
    </>
  )
}
