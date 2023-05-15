import React from "react";
import { useHistory } from "react-router-dom";
import BaseApp from "../Base";
import { AppState } from "../appprovider";

export default function StudentComponent() {
    const { student, setStudent } = AppState();
    const history = useHistory();
    const studentDelete = async (idx) => {
        try {
            const response = await fetch(`https://64550a72a74f994b3350551a.mockapi.io/books/${idx}`, {
                method: "Delete"
            })
            const book = await response.json();
            const studentAlterList = student.filter((stu) => stu.id !== idx);
            setStudent(studentAlterList)
        } catch (error) {
            console.log(Error)
        }
    }
    return (
        <BaseApp
            title="List of Book"
        >

            <div className="stu-com" >

                {
                    student.map((students, index) => (
                        <div key={index} className="stu-com2">
                            <img src={students.image} alt={students.name} title={students.name} className="image"></img>
                            <h1>{students.name}</h1>
                            <p>Author: {students.Author}</p>

                            <div className="btn-group">
                                <button
                                    className="btn btn-view"
                                    onClick={() => history.push(`/book/view/${index}`)} >
                                    View
                                </button>
                                <button
                                    className="btn btn-edit"
                                    onClick={() => history.push(`/book/edit/${students.id}`)}>
                                    Edit
                                </button>

                                <button
                                    className="btn btn-delete"
                                    onClick={() => studentDelete(students.id)}>
                                    Delete
                                </button>


                            </div>
                        </div>

                    ))

                }

            </div>


        </BaseApp>
    )
}