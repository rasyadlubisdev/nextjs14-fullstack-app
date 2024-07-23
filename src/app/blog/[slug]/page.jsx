import Image from "next/image";
import styles from "./singlePost.module.css";

const SinglePostPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image
                  src="https://images.pexels.com/photos/16769639/pexels-photo-16769639/free-photo-of-kota-terbang-orang-orang-masyarakat.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="" 
                  fill 
                  className={styles.img}
                />
            </div>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>Title</h1>
                <div className={styles.detail}>
                    <Image 
                      className={styles.avatar} 
                      src="https://images.pexels.com/photos/16769639/pexels-photo-16769639/free-photo-of-kota-terbang-orang-orang-masyarakat.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                      alt="" 
                      width={50}
                      height={50}
                    />
                    <div className={styles.detailText}>
                        <span className={styles.detailTitle}>Author</span>
                        <span className={styles.detailValue}>Terry Jefferson</span>
                    </div>
                    <div className={styles.detailText}>
                        <span className={styles.detailTitle}>Published</span>
                        <span className={styles.detailValue}>01.01.2024</span>
                    </div>
                </div>
                <div className={styles.content}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam debitis doloribus aut similique quisquam modi, ullam suscipit neque reprehenderit tempora? Animi magnam aut praesentium quo assumenda fuga esse unde perferendis.
                </div>
            </div>
        </div>
    )
}

export default SinglePostPage;