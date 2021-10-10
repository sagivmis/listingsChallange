import React, { useEffect, useState } from "react";
import "./job.css";
import account from "../../assets/account.svg";
import headerdesktop from "../../assets/bg-header-desktop.svg";
import headermobile from "../../assets/bg-header-mobile.svg";
import eyecamco from "../../assets/eyecam-co.svg";
import faceit from "../../assets/faceit.svg";
import insure from "../../assets/insure.svg";
import loopstudios from "../../assets/loop-studios.svg";
import manage from "../../assets/manage.svg";
import myhome from "../../assets/myhome.svg";
import photosnap from "../../assets/photosnap.svg";
import shortly from "../../assets/shortly.svg";
import theairfiltercompany from "../../assets/the-air-filter-company.svg";
import Button from "../Button/Button";

const svgs = [
    account,
    headerdesktop,
    headermobile,
    eyecamco,
    faceit,
    insure,
    loopstudios,
    manage,
    myhome,
    photosnap,
    shortly,
    theairfiltercompany,
];

const Job = ({ job }) => {
    const varToString = (vr) =>
        Object(vr).toString().slice(14).split(".")[0].split("-").join("");

    const configName = (svgName) => {
        return svgName.split("-").join("").toLowerCase();
    };
    const currentCompanySVG = () => {
        let companyName = configName(job.listedCompany);
        let svgNeeded;
        svgs.forEach((svg) => {
            if (companyName === varToString(svg)) {
                svgNeeded = svg;
            }
        });
        return svgNeeded;
    };

    const currentSvg = currentCompanySVG();
    const [svg, setSvg] = useState(currentSvg);

    const tagsToAdd = [job.role, job.level, ...job.languages];
    if (job.tools) tagsToAdd.push(...job.tools);

    const daysBetweenDates = (date1, date2) => {
        let diff = Math.abs(date1.getTime() - date2.getTime());
        return diff / (1000 * 60 * 60 * 24);
    };
    const timeSincePosted = daysBetweenDates(
        new Date(),
        new Date(job.timeRegistered)
    );
    let newJob = false;
    const date = new Date();
    const [month, day, year] = [
        date.getMonth() + 1,
        date.getDate(),
        date.getFullYear(),
    ];
    let [dayJob, monthJob, yearJob] = job.timeRegistered.split("/");
    dayJob = parseInt(dayJob);
    monthJob = parseInt(monthJob);
    yearJob = parseInt(yearJob);
    if (yearJob === year && monthJob === month && dayJob - day <= Math.abs(7))
        newJob = true;

    return (
        <div className={`job ${job.isFeatured ? "selected" : ""}`}>
            <img src={svg} alt='svg' />
            <span className='company-name'>{job.listedCompany}</span>
            <div className='listing-tags'>
                {newJob && <Button text={`NEW!`} classN={`btn rounded`} />}
                {job.isFeatured && (
                    <Button
                        text={`FEATURED`}
                        classN={`btn rounded`}
                        color={"hsl(180, 29%, 30%)"}
                        textColor={"#fff"}
                    />
                )}
            </div>
            <p className='job-title'>{job.listingTitle}</p>
            <span className='job-details'>
                {job.timeRegistered} • {job.listingType} • {job.listingLocation}
            </span>
            <div className='tags'>
                {tagsToAdd.map((tag) => (
                    <Button text={`${tag}`} />
                ))}
            </div>
        </div>
    );
};

export default Job;
