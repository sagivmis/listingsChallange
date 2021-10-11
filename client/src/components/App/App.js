import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Jobs from "../Jobs/Jobs";
import Filter from "../Filter/Filter";

function App() {
    const [data, setData] = useState();
    const [jobs, setJobs] = useState();
    const [filters, setFilters] = useState();

    const fetchData = async () => {
        try {
            await axios
                .get("http://localhost:8080/data")
                .then(({ data }) => setData(data.data));
            // .then(() => {
            //     setJobs(data);
            // });
        } catch (err) {
            console.log(err);
        }
    };
    const existsByIdInFiltered = (id) => {
        jobs.forEach((job) => {
            if (job.id === id) return false;
        });
        return true;
    };
    let filtered = [];
    const filterData = () => {
        setJobs();
        filtered = [];
        if (data && filters)
            data.map((job) => {
                const tags = [job.role, job.level, ...job.languages];
                if (job.tools) tags.push(...job.tools);
                console.log(tags, filters);
                if (filters) {
                    for (let i = 0; i < filters.length; i++) {
                        if (tags.includes(filters[i])) {
                            filtered.push(job);
                            break;
                        }
                    }
                    setJobs(filtered);
                }
            });
    };
    useEffect(() => {
        fetchData();
    }, [jobs, data]);
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
                {/* {data && <Jobs data={data} setData={setData} />} */}
                {!filters && data && (
                    <Jobs data={data} setData={setData} filters={filters} />
                )}
                {console.log(jobs)}
                {jobs && (
                    <Jobs data={jobs} setData={setJobs} filters={filters} />
                )}
            </div>
        </div>
    );
}

export default App;
