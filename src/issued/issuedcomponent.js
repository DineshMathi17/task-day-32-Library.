import React from "react";
import { useHistory } from "react-router-dom";
import BaseApp from "../Base";
import { AppState } from "../appprovider";


export default function IssuedComponent() {
    const { teacher, setTeacher } = AppState();

    const history = useHistory();

    
    const teacherDelete = async (idx) => {
        try {
            const response = await fetch(`https://64550a72a74f994b3350551a.mockapi.io/issued/${idx}`, {
                method: "Delete"
            })
            const data1 = await response.json();
            const teacherAlterList = teacher.filter((tea) => tea.id !== idx);
            setTeacher(teacherAlterList)
        } catch (error) {
            console.log(Error)
        }
    }

    return (
        <BaseApp
            title="List of Issued book"
        >

            <div className="tea-com">
                {
                    teacher.map((issues, index) => (
                        <div key={index} className="tea-com2">
                            <img src={issues.image} alt={issues.name} title={issues.name} className="image"></img>
                            <h1>{issues.name}</h1>
                            <p>Author: {issues.Author}</p>



                            <div className="btn-group">
                                <button
                                    className="btn btn-view"
                                    onClick={() => history.push(`/issued/view/${index}`)}
                                >View</button>
                                <button
                                    className="btn btn-edit"
                                    onClick={() => history.push(`/issued/edit/${issues.id}`)}
                                >Edit</button>

                                <button
                                    className="btn btn-delete"
                                    onClick={() => teacherDelete(issues.id)}
                                >Delete</button>


                            </div>
                        </div>

                    ))


                }
            </div>


        </BaseApp>
    )
}