import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Jobs from "../Jobs/Jobs";
function App() {
    const [data, setData] = useState();
    const fetchData = async () => {
        try {
            await axios
                .get("http://localhost:8080/data")
                .then(({ data }) => setData(data.data));
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
                {data && <Jobs data={data} setData={setData} />}
            </div>
        </div>
    );
}

export default App;
