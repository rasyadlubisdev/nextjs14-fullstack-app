import Image from "next/image";
import styles from "./postCard.module.css";
import Link from "next/link";

const PostCard = () => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.imgContainer}>
                    <Image src="https://images.pexels.com/photos/16769639/pexels-photo-16769639/free-photo-of-kota-terbang-orang-orang-masyarakat.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" fill className={styles.img} />
                </div>
                <span className={styles.date}>01.01.2024</span>
            </div>
            <div className={styles.bottom}>
                <h1 className={styles.title}>Title</h1>
                <p className={styles.desc}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod dolore aut repudiandae culpa recusandae, ipsam vero corporis cupiditate aperiam ad impedit assumenda error doloremque suscipit sapiente ducimus qui molestias nulla.
                </p>
                <Link className={styles.link} href="/blog/post">READ MORE</Link>
            </div>
        </div>
    )
}

export default PostCard;