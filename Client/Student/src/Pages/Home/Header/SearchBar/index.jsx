import { Button, Stack, TextField } from "@mui/material";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
    const navigate = useNavigate()
    const [loading , setLoading] = useState(false)
    const [input , setInput] = useState('')
    const handleSubmit = async(e)=>{
        e.preventDefault()
        setLoading(true)
        navigate(`courses-list/${input}`)
        setInput('')
        setLoading(false)
    }
  return (
    <Stack
    onSubmit={handleSubmit}
    component={'form'}
      maxWidth={"450px"}
      sx={{ position: "relative", mx: "auto" }}
      direction={"row"}
      spacing={1}
    >
      <TextField
      disabled={loading}
      value={input}
      onChange={(e)=> setInput(e.target.value)}
        sx={{
          "& .MuiInputBase-input": {
            padding: "12px 40px", // For all input types
          },
        }}
        fullWidth
        size="small"
        placeholder="search for courses ..."
      />{" "}
      <Button disabled={loading} sx={{ px: 5 }} type="submit" variant="contained">
        Search
      </Button>
      <SearchIcon
        sx={{ position: "absolute", top: "50%", transform: "translateY(-50%)", left: "4px" }}
      />
    </Stack>
  );
}
