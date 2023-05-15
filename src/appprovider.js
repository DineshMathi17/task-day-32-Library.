import { createContext, useContext, useEffect, useState } from "react";


const AppContext = createContext();
const AppProvider = ({ children }) => {
    const [student, setStudent] = useState([]);
    const [teacher, setTeacher] = useState([]);
    useEffect(() => {
        const getDetails = async () => {
            try {
                const response = await fetch("https://64550a72a74f994b3350551a.mockapi.io/books", {
                    method: "GET"
                });
                const data = await response.json()
                setStudent(data)
            } catch (error) {
                console.log(error);
            }
        }
        getDetails();
    }, [])
    useEffect(() => {
        const getDetails = async () => {
            try {
                const response = await fetch("https://64550a72a74f994b3350551a.mockapi.io/issued", {
                    method: "GET"
                });
                const data = await response.json()
                setTeacher(data)
            } catch (error) {
                console.log(error);
            }
        }
        getDetails();
    }, [])
    return (
        <AppContext.Provider
            value={{
                student,
                setStudent,
                teacher,
                setTeacher
            }}
        >
            {children}
        </AppContext.Provider>
    )
}
export const AppState = () => {
    return useContext(AppContext)
}
export default AppProvider