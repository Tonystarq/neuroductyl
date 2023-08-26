import React from 'react';
import SolutionCard from "@/app/components/solutioncard";
import styles from "./solution.module.css";

const Solution = () => {
    return (
        <>
            <div className={styles.container}>
            <h1>Biometric deduplication</h1>
            <p>Nationwide biometric systems contain tens or hundreds of millions or even billions fingerprints. These data usually have been collected for years, from different country regions, by hundreds or thousands operators.

            During enrollment, the data were not necessarily checked for duplicates: because of human errors or identity fraud biometric databases in AFIS or ABIS can be full of different errors and duplicates.</p>
            <h2>The most frequent types of errors:</h2>
            <SolutionCard />

                
            </div>

            

        </>
    );
};

export default Solution;