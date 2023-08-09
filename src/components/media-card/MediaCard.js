import Link from "next/link";
import styles from "./MediaCard.module.scss";
import Image from "next/image";

const MediaCard = ({ media }) => {
  return (
    <div className={styles.card}>
      <Link href={`/movies/${media.id}`}>
        <div className={styles.image}>
          <Image
            src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_PATH}${media.poster_path}`}
            alt={media.title}
            fill
          />
        </div>
        <div className={styles.content}>
          <div className={styles.vote}>{media.vote_average}</div>
          <h3>{media.title}</h3>
          <p>Le {new Date(media.release_date).toLocaleDateString("fr-FR")}</p>
        </div>
      </Link>
    </div>
  );
};

export default MediaCard;