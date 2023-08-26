import  styles from "@/app/contact/contact.module.css"
import { MdEmail, MdVoiceChat, MdForum } from "react-icons/md";
import Link from "next/link";

const SolutionCard = () => {
    return (
        <div className={styles.section}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    <div className={styles.grid_card}>
                        <h2>Full duplicate of a record</h2>
                        <p>All fingerprints in a record are the same as in another record. Such errors occur, when a person gets a new ID without duplication check or as a result of a fraud. </p>
                       
                    </div>

                    <div className={styles.grid_card}>
                        <h2>Errors inside a record</h2>
                        <p>Some finger in a record belonging to one person is a duplicate of another finger of the same person. Such errors happen because of operator's mistakes.</p>
                    </div>

                    <div className={styles.grid_card}>
                        <h2>Partial duplicates</h2>
                        <p>Errors in a record, where some fingerprints are duplicated from another record can be caused by human errors, when fingerprints are manually added to AFIS from folders. </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SolutionCard;