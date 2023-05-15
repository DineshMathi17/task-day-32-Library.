import * as yup from 'yup'
import { useFormik } from "formik";
import { Button, TextField } from "@mui/material";
import { useHistory, useParams } from "react-router-dom";
import { AppState } from "../appprovider";
import BaseApp from '../Base';


const userSchemaValidation = yup.object({
    id: yup.string().required("please specify Book ID"),
    name: yup.string().required("Please fill in your Book Name"),
    image: yup.string().required("please write proper image sorce"),
    Author: yup.string().required("Please fill Author?"),
    details: yup.string().required("Please fill details..")

})


export function Editissue() {
    const { teacher, setteacher } = AppState();
    const history = useHistory();
    const { id } = useParams();
    const selectedteacher = teacher.find((tea) => tea.id === id);
    const Editteacher = async ({ editteacher }) => {

        try {
            const response = await fetch(`https://64550a72a74f994b3350551a.mockapi.io/issued/${id}`, {
                method: "PUT",
                body: JSON.stringify(editteacher),
                headers: {
                    "Content-Type": "application/json",
                },
            })
            const data = await response.json();
            console.log(data);
            setteacher([...teacher])
            history.push("/issued")

        } catch (error) {
            console.log(error)
        }

    }


    const { values, handleChange, handleSubmit, handleBlur, errors, touched } = useFormik({

        initialValues: {
            id: selectedteacher.id,
            name: selectedteacher.name,
            image: selectedteacher.image,
            Author: selectedteacher.Author,
            details: selectedteacher.details,
        },
        validationSchema: userSchemaValidation,
        onSubmit: (editteacher) => {
            console.log("on submit called :", editteacher)
            const editindex = teacher.findIndex(is => is.id === id);
            teacher[editindex] = editteacher;
            Editteacher({ editteacher })


        }

    })

    return (
        <BaseApp>
            <div className='issued-container'>

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
                        label="Issued name"
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
                        onClick={Editteacher}
                    >
                        Edit issued
                    </Button>
                </form>
            </div>
        </BaseApp>

    )
}