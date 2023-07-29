import MediaCard from '@/components/Header/media-card/MediaCard';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.main}>
      <MediaCard mediaId={10}/>
    </div>
  )
}
