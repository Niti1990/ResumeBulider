import { Outlet } from 'react-router-dom'
import logo from '../../images/logo.png'
import styles from './Header1.module.css'

function Header1() {
	return (
		<div>
			<ul>
				<li>
					<img className={styles.mainContainer} src={logo} alt='logo' />
				</li>

				<li className={styles.list}>
					<a href='/'>Home</a>
				</li>
				<li className={styles.list}>
					<a href='Body'>Resume Editor</a>
				</li>
				<li className={styles.list}>
					<a href='Contact'>Contact</a>
				</li>

				<li style={{ float: 'right' }}>
					<a href='User'>Hi,User</a>
				</li>
			</ul>
			<Outlet />
		</div>
	)
}
export default Header1
