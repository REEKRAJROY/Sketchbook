import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil, faEraser, faRotateLeft, faRotateRight, faFileArrowDown } from '@fortawesome/free-solid-svg-icons'
import styles from './index.module.css'
import cx from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import { menuItemClick, actionMenuItem } from '@/slice/menuSlice'
import { MENU_ITEMS } from '@/constants'

const Menu = () => {
    const dispatch = useDispatch() //to use the logic written inside slice
    const activeMenuItem = useSelector((state) => state.menu.activeMenuItem)
    const handleMenuClick = (itemName) => {
        dispatch(menuItemClick(itemName))//this goes into the action param of menuItemClick in
    }

    return(
        <div className={styles.menuContainer}>
            <div className={cx(styles.iconWrapper, {[styles.active]: activeMenuItem === MENU_ITEMS.PENCIL})} onClick={() => handleMenuClick(MENU_ITEMS.PENCIL)}>
            <FontAwesomeIcon icon={faPencil} className={styles.icon}/>
            </div>
            <div className={cx(styles.iconWrapper, {[styles.active]: activeMenuItem === MENU_ITEMS.ERASER})} onClick={() => handleMenuClick(MENU_ITEMS.ERASER)}>
            <FontAwesomeIcon icon={faEraser} className={styles.icon}/>
            </div>
            <div className={styles.iconWrapper}>
            <FontAwesomeIcon icon={faRotateLeft} className={styles.icon} />
            </div>
            <div className={styles.iconWrapper}>
            <FontAwesomeIcon icon={faRotateRight} className={styles.icon} />
            </div>
            <div className={styles.iconWrapper}>
            <FontAwesomeIcon icon={faFileArrowDown} className={styles.icon} />
            </div>
        </div>
    )
}

export default Menu;