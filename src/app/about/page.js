import React from 'react';
import styles from "@/app/styles/common.module.css"
import heroStyles from "@/app/styles/herosection.module.css"
const About = async () => {


    return (
        <main className={heroStyles.main_section}>
            <div className={styles.container}>
            <h1 >About Us</h1>
                <div >
                    <div >
                    
                    
                        <p>
                        Neurodactyl is a technology start-up founded in 2023 by specialists in machine vision and deep learning technologies. We have vast experience on biometric markets and have been working with different biometric technologies starting from 2014, when neural network based facial recognition technologies have completely changed the market. Today we are focused on creating cutting edge algorithms in fingerprint recognition, striving to bring a new life and power of new mobile technologies to the market of old-school biometrics.
                        
                        We aim to make identification powered by biometrics convenient, easy and reliable and help to protect personal and financial data in new digital reality.
                        
                        Besides fingerprint recognition our R&D team also doing research in other biometrics like face, voice and iris.</p>
                        
                        
                        
                        
                    </div>
                </div>
            </div>
            
        </main>
    );
};

export default About;