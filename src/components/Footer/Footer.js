import './Footer.css'

const Footer = () => (
    <footer>
        <div className="footer-links">
            <span><a href='https://github.com/dzianiskor'>GitHub</a></span>
            <span><a href='https://www.youtube.com/'>YouTube</a></span>
            <span><a href='https://rs.school/js/'>RS.School</a></span>
            <span>© 2021</span>
        </div>
        <div>
            <button className="btn setting-button">
                <img src="/img/setting.png" alt="setting-button"/>
            </button>
        </div>
    </footer>
)

export default Footer
