import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Jobs from "../Jobs/Jobs";
import Filter from "../Filter/Filter";
function App() {
    const [data, setData] = useState();
    const [filteredData, setFilteredData] = useState();
    const [filters, setFilters] = useState();
    const fetchData = async () => {
        try {
            await axios
                .get("http://localhost:8080/data")
                .then(({ data }) => setData(data.data));
        } catch (err) {
            console.log(err);
        }
    };
    const filterData = () => {
        data.map((job) => {
            const tags = [job.role, job.level, ...job.languages];
            if (job.tools) tags.push(...job.tools);
            if (filters)
                filters.forEach((filter) => {
                    // console.log(filters);
                    if (tags.includes(filter)) {
                        if (filteredData)
                            setFilteredData([...filteredData, job]);
                        else setFilteredData([job]);
                    }
                });
            // for (const filter in filters) {
            //     console.log(filters);
            //     if (tags.includes(filter)) {
            //         console.log("includes");
            //         setFilteredData(...filteredData, job);
            //     }
            // }
        });
    };
    useEffect(() => {
        if (!filters) fetchData();
        else filterData();
    }, [data, filteredData]);
    return (
        <div className='App'>
            <header />
            <div className='container'>
                {data && (
                    <Filter
                        filterData={filterData}
                        filters={filters}
                        setFilters={setFilters}
                    />
                )}
                {!filters && data && <Jobs data={data} setData={setData} />}
                {filters && data && <Jobs data={data} setData={setData} />}
            </div>
        </div>
    );
}

export default App;
