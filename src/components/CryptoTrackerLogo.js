import styles from '../App.module.css'
import { Typography } from '@mui/material'

const CryptoTrackerLogo = () => {
  return (
    <div className={styles["ct__app-header_logo"]}>
      <Typography variant="h4" component="h1" lineHeight="normal">CT</Typography>
    </div>
  )
}

export default CryptoTrackerLogo