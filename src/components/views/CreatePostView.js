import { Container } from "@mui/material";
import React from "react";
import GridLayout from "../GridLayout";
import Navbar from "../Navbar";
import PostEditor from "../PostEditor";

const CreatePostView = () => {
  return (
    <Container>
      <Navbar />

      <GridLayout left={<PostEditor />} />
    </Container>
  );
};

export default CreatePostView;
