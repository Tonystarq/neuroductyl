import React from 'react';
import Image from "next/image";
import styles from "@/app/styles/common.module.css"
import heroStyles from "@/app/styles/herosection.module.css"
import Link from "next/link";
import { Mulish } from 'next/font/google';
const mulish = Mulish({
    weight: ['300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
    display: 'swap'
})
const Movie = async () => {


    return (
        <main className={heroStyles.main_section}>
            <div className={styles.container}>
            <h1>Advantages:</h1>
                <div className={styles.grid_two_section}>
                    <div className={heroStyles.hero_content}>
                    
                    
                        <h2>Superior accuracy</h2>
                        
                        <p>Neural network based technology provides
                        extremely high recognition accuracy
                        for verification and identification
                        </p>
                        
                        
                    </div>
                    <div className={heroStyles.hero_content}>
                    
                    
                        <h2>All types of fingerprints</h2>
                        
                        <p>Processing of photo images and standard scans
                        (flats, rolls, latents) with one technology
                        creating templates compatible between each other
                        </p>
                        
                        
                    </div>
                    <div className={heroStyles.hero_content}>
                    
                    
                    <h2>Fixed size of biometric template</h2>
                    
                    <p>Fingerprint biometric templates
                    always have standard size - 512 bytes
                    regardless of fingerprint or image type
                    </p>
                    
                    
                </div>
                <div className={heroStyles.hero_content}>
                    
                    
                    <h2>High matching speed</h2>
                    
                    <p>Matching performance is 100+ million matches
                    per 1 s on one modern CPU and up to 1 billion
                    matches per 1 s using batch mode or GPU
                    </p>
                    
                    
                </div>
                <div className={heroStyles.hero_content}>
                    
                    
                    <h2>DPI tolerant technology</h2>
                    
                    <p>Algorithm works with images or scans from 250 dpi and higher and doesn't require exact DPI values
                    (for example, exactly 500 dpi)
                    </p>
                    
                    
                </div>
                <div className={heroStyles.hero_content}>
                    
                    
                    <h2>Identification with the highest confidence</h2>
                    
                    <p>
                    By capturing of 4 fingers at once with our mobile SDK you can guarantee almost 100% reliable
                    and user-friendly identification
                    
                    </p>
                    
                    
                </div>
                </div>
            </div>
            
        </main>
    );
};

export default Movie;