import TwitterIcon from '@mui/icons-material/Twitter'
import TelegramIcon from '@mui/icons-material/Telegram'
import InstagramIcon from '@mui/icons-material/Instagram'

import './footer.scss'

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                <h2 className="footer__logo">My Blog</h2>
                <div className="footer__social-wrapper">
                    <p>Social media</p>
                    <ul className="footer__social">
                        <li>
                            <TwitterIcon />
                        </li>
                        <li>
                            <TelegramIcon />
                        </li>
                        <li>
                            <InstagramIcon />
                        </li>
                    </ul>
                </div>
                <div>
                    <p>Company</p>
                    <ul>
                        <li>BuzzCraze Marketing</li>
                        <li>TechWave Labs</li>
                        <li>ElevateX Fitness</li>
                        <li>CleanCut Barbers</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}
