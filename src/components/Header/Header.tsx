import style from './Header.module.scss'
import Logo from '../../assets/Logo@2x.png'
import Vector from '../../assets/Vector@2x.png'
import Search from '../../assets/Search@2x.png'
import Cart from '../../assets/Cart@2x.png'
import Moon from '../../assets/Moon@2x.png'
import Sun from '../../assets/Sun@2x.png'

export default function Header() {
  return (
    <>
      <header>
        <div className={style['header-container']}>
          <a className={style['header-logo-container']} href="#">
            <img className={style['icon-logo']} src={Logo} />
          </a>
          <div className={style['navbar-burger-warper']}>
            <label
              htmlFor="navbar-toggle"
              className={style['burger-container']}
            >
              <img src={Vector} className={style['icon-toggle']} />
            </label>
          </div>
          <input
            id="navbar-toggle"
            className={style['navbar-toggle']}
            type="checkbox"
          />
          <nav className={style['navbar-menu']}>
            <ul className={style['nav-list-text-link']}>
              <li className={style['nav-item__link']}>
                <a className={style['nav-link']} href="#">
                  男款
                </a>
              </li>
              <li className={style['nav-item__link']}>
                <a className={style['nav-link']} href="#">
                  女款
                </a>
              </li>
              <li className={style['nav-item__link']}>
                <a className={style['nav-link']} href="#">
                  最新消息
                </a>
              </li>
              <li className={style['nav-item__link']}>
                <a className={style['nav-link']} href="#">
                  客製商品
                </a>
              </li>
              <li className={style['nav-item__link']}>
                <a className={style['nav-link']} href="#">
                  聯絡我們
                </a>
              </li>
            </ul>
            <ul className={style['nav-list-icon']}>
              <li className={style['nav-item__icon']}>
                <img src={Search} className={style['nav-icon-search']}></img>
              </li>
              <li className={style['nav-item__icon']}>
                <img src={Cart} className={style['nav-icon-cart']} />
              </li>
              <li id="theme-toggle" className={style['nav-item__icon']}>
                <img src={Moon} className={style['nav-icon-moon']} />
                <img src={Sun} className={style['nav-icon-sun']} />
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}
