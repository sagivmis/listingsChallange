import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
    const [exampleRes, setExampleRes] = useState();

    const fetchData = async () => {
        try {
            const { message } = await axios
                .get("http://localhost:8080/example")
                .then(({ data }) => data);
            setExampleRes(message);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchData();
    });

    return (
        <div className='App'>
            <header />
            <div className='container'>
                <h1> {exampleRes} </h1>
            </div>
        </div>
    );
}

export default App;
