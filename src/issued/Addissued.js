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

export function Addissued() {
    const history = useHistory();

    const { teacher, setteacher } = AppState();


    const addNewteacher = async ({ newteacher }) => {

        try {
            const response = await fetch("https://64550a72a74f994b3350551a.mockapi.io/issued", {
                method: "post",
                body: JSON.stringify(newteacher),
                headers: {
                    "Content-Type": "application/json",
                },
            })
            const data2 = await response.json();
            setteacher([...teacher, data2])
            history.push("/teacher")
        } catch (error) {
            console.log(Error)
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
        onSubmit: (newteacher) => {
            console.log("on submit called :", newteacher)
            addNewteacher({ newteacher });

        }

    })

    return (
        <BaseApp
            title="Add New Issued Book"
        >

            <div className="text-areas-t">

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
                        onClick={addNewteacher}
                    >
                        Add Book
                    </Button>
                </form>



            </div>

        </BaseApp>
    )

}

