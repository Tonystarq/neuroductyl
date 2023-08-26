import styles from "@/app/styles/navbar.module.css"
import Link from "next/link";
import Nav from "@/app/components/Nav";

const Header = () => {
    return (
        <header className={styles.main_header}>
            <div className={styles.navbar_brand}>
                <Link href="#">
                <img src="/logo1.png" alt="Italian Trulli"></img>
                </Link>

            </div>
            <Nav/>
        </header>
    );
};

export default Header;