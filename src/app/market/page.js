import heroStyles from "@/app/styles/herosection.module.css"
import styles from "@/app/styles/common.module.css"
import Link from "next/link";
import { Mulish } from 'next/font/google';

const mulish = Mulish({
    weight: ['300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
    display: 'swap'
})


const Market = ({title, imageUrl}) => {
    return (
        <main className={heroStyles.main_section}>
            <div className={styles.container}>
                <div className={styles.grid_two_section}>
                    <div className={heroStyles.hero_content}>
                        <h1>National ID</h1>
                        <span> <li>National biometric system plays a key role in fraud prevention, providing of digital governmental services and national security. Fingerprint recognition is a "must-have" biometric modality in such systems: it's reliable, unique for any individuals including identical twins and changes less over time than face.</li>
                        <li>Our algorithms are designed to work with millions of records in enrollment databases with high accuracy and low false accept rate even for a search with one finger. High matching speed - up to 1 billion matches per 1 s - is a crucial advantage for big scale projects. It significantly saves customer's budget: numbers of required matching servers is up to 100 times less than the same numbers for "traditional" recognition algorithms.</li>
                        </span>
                    </div>

                    <div className={heroStyles.hero_image}>
                    <img src="/id_sm.png" width={500} height={500} alt="Italian Trulli"></img>
                    </div>
                </div>
            </div>
            
            
            <div className={styles.container}>
                <div className={styles.grid_two_section}>
                    <div className={heroStyles.hero_content}>
                        <h1>Banks</h1>
                        <span> <li>Banks go digital today. Now good service means that a lot of features can be provided to a client remotely, without visiting bank office. Biometric identification and verification help to prove customer's identity for online operations. Its safer and more convenient than a password, biometrics can not be forgotten or passed to someone else and it doesn't require memorizing.</li>
                        <li>Our technologies unlock fingerprint recognition for user's online verification and customer onboarding, because it requires only a regular phone. Mobile SDK can verify a person using 4 fingers, which are user-friendly to capture. It ensures ultimate verification and identification accuracy, which is much higher than recognition with one face.</li>
                        </span>
                    </div>

                    <div className={heroStyles.hero_image}>
                    <img src="/bank_sm.png" alt="Italian Trulli" width={500} height={500}></img>
                    </div>
                </div>
            </div>
            <div className={heroStyles['custom-shape-divider-bottom-1681647578']}>
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
                     preserveAspectRatio="none">
                    <path
                        d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                        className={heroStyles["shape-fill"]}></path>
                </svg>
            </div>
        </main>
        
    );
};

export default Market;