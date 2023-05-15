import { useHistory } from "react-router-dom";
import BaseApp from "../Base";
import { AppState } from "../appprovider";
import { Button, TextField } from "@mui/material";
import * as yup from 'yup'
import { useFormik } from "formik";

const userSchemaValidation = yup.object({
    id: yup.string().required("please specify Book ID"),
    name: yup.string().required("Please fill in your Book Name"),
    image: yup.string().required("please write proper image sorce"),
    Author: yup.string().required("Please fill Author?"),
    details: yup.string().required("Please fill details..")
  
  })

export function Addbook() {

    const history = useHistory();

    const { student, setstudent } = AppState(); 

    const addNewstudent = async ({ newstudent }) => {
        try {
          const response = await fetch("https://64550a72a74f994b3350551a.mockapi.io/books", {
            method: "POST",
            body: JSON.stringify(newstudent),
            headers: {
              "Content-Type": "application/json",
            },
          })
          const data = await response.json();
          console.log(data);
          setstudent([...student, data])
          history.push("/book")
    
        } catch (error) {
          console.log(error)
        }
    
    
      }
    
    const { values, handleChange, handleSubmit, handleBlur, errors, touched } = useFormik({
        initialValues: {
          id: "",
          name: "",
          image: "",
          Author: "",
          details: "",
        },
        validationSchema: userSchemaValidation,
        onSubmit: (newstudent) => {
          console.log("on submit called :", newstudent)
          addNewstudent({ newstudent });
    
        }
    
      })

    return (
        <BaseApp
            title="Add New book"
        >
            <div className="text-areas">

            <form onSubmit={handleSubmit} className="text-areas">
          <TextField
            fullWidth
            id="fullWidth"
            name="id"
            onBlur={handleBlur}
            label="ID"
            variant="outlined"
            value={values.id}
            onChange={handleChange}
          />
          {touched.id && errors.id ? <p style={{ color: "crimson" }}>{errors.id}</p> : ""}
          <TextField
            fullWidth
            id="fullWidth"
            label="Book name"
            variant="outlined"
            onBlur={handleBlur}
            name="name"
            value={values.name}
            onChange={handleChange}
          />
          {touched.name && errors.name ? <p style={{ color: "crimson" }}>{errors.name}</p> : ""}

          <TextField
            fullWidth
            id="fullWidth"
            label="Image Sorce"
            variant="outlined"
            onBlur={handleBlur}
            name="image"
            value={values.image}
            onChange={handleChange}
          />
          {touched.image && errors.image ? <p style={{ color: "crimson" }}>{errors.image}</p> : ""}

          <TextField
            fullWidth
            id="fullWidth"
            label="Author"
            variant="outlined"
            onBlur={handleBlur}
            name="Author"
            value={values.Author}
            onChange={handleChange}
          />
          {touched.Author && errors.Author ? <p style={{ color: "crimson" }}>{errors.Author}</p> : ""}
          <TextField
            fullWidth
            id="fullWidth"
            label="Details"
            variant="outlined"
            onBlur={handleBlur}
            name="details"
            value={values.details}
            onChange={handleChange}
          />
          {touched.details && errors.details ? <p style={{ color: "crimson" }}>{errors.details}</p> : ""}
          <Button
            variant="contained"
            type="submit"
            color="success"
          >
            Add Book
          </Button>
        </form>
 
            </div>

        </BaseApp>
    )

}