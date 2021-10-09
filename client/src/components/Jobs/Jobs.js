import React from "react";
import Job from "../Job/Job";

const Jobs = ({ data, setData }) => {
    return (
        <div className='jobs'>
            {data.map((job) => (
                <Job job={job} key={job.id} />
            ))}
        </div>
    );
};

export default Jobs;
