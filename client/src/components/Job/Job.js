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

    return (
        <div className={`job ${job.isFeatured ? "selected" : ""}`}>
            <img src={svg} alt='svg' />
            <p className='job-title'>{job.listingTitle}</p>
            <span className='job-details'>
                {job.timeRegistered} • {job.listingType} • {job.listingLocation}
            </span>
        </div>
    );
};

export default Job;
