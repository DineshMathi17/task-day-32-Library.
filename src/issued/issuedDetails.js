import { useHistory, useParams } from "react-router-dom";
import BaseApp from "../Base";
import { AppState } from "../appprovider";

export function Detailsissued() {
    const { teacher, setTeacher } = AppState();
    const history = useHistory();
    const { id } = useParams();
    const teachers = teacher[id];

    return (
        <BaseApp
            title={"Teacher Details"}
        >
            <div className="detail-continar">
                <div className="detail-card">
                    <img src={teachers.image} alt={teachers.name} title={teachers.name} className="image"></img>
                    <h1>{teachers.name}</h1>
                    <p>Author : {teachers.Author}</p>
                    <p>Details : {teachers.details}</p>


                    <div className="btn-group">

                        <button
                            className="btn btn-detail"
                            onClick={() => history.push("/issued")}
                        >Issued Book</button>

                    </div>
                </div>
            </div>
        </BaseApp>
    )
}