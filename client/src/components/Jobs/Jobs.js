import React from "react";
import Job from "../Job/Job";

let tags;
let filtered = [];
const Jobs = ({ data, setData, filters }) => {
    return (
        <div className='jobs'>
            {console.log(data)}
            {console.log(filters)}
            {data.map((job) => {
                tags = [job.role, job.level, ...job.languages];
                if (job.tools) tags.push(...job.tools);
                console.log(tags);
                if (filters) {
                    filtered = filters.map((filter) => {
                        if (tags.includes(filter)) {
                            console.log("created");
                            return <Job job={job} key={job.id} />;
                        }
                    });
                }
                if (!filters) {
                    return <Job job={job} key={job.id} />;
                }
                return filtered;
            })}
            ;
        </div>
    );
};

export default Jobs;
