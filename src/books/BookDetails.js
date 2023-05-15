import { useHistory, useParams } from "react-router-dom";
import BaseApp from "../Base";
import { AppState } from "../appprovider";

export function BookDetails() {
    const { student, setStudent } = AppState();
    const history = useHistory();
    const { id } = useParams();
    const students = student[id];
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
            title={"Student Details"}
        >
            <div className="detail-continar">
                <div className="detail-card">
                    <img src={students.image} alt={students.name} title={students.name} className="image"></img>
                    <h1>{students.name}</h1>
                    <p>Author : {students.Author}</p>
                    <p>Details : {students.details}</p>

                    <div>
                        <button
                            className="btn btn-detail"
                            onClick={() => history.push("/")}
                        >List Of Books</button>
                    </div>

                </div>
            </div>
        </BaseApp>
    )
}