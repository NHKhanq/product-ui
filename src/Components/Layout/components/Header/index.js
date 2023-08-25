import classNames from 'classnames/bind'
import styles from './Header.module.scss'

import Tippy from '@tippyjs/react/headless'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faCircleXmark,
    faSpinner,
    faMagnifyingGlass,
    faEllipsisH,
    faEllipsisVertical,
    faEarthAsia,
    faCircleQuestion,
} from '@fortawesome/free-solid-svg-icons'
import images from '~/assets/images'
import Button from '~/Components/Layout/components/Button'
import { Wrapper as PopperWrapper } from '~/Components/Layout/components/Popper'
import Menu from '../Popper/Menu'
const cx = classNames.bind(styles)

const MENU_ITEMS = [
    {
        icons: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'Tiếng Việt',
    },
    {
        // icons: <FontAwesomeIcon icon="fa-solid fa-question" />,
        icons: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback',
        to: '/feedback',
    },
]
function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('content')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="tiktok" />
                </div>
                <Tippy
                    interactive="true"
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1">
                            <PopperWrapper>
                                <h3>demo</h3>
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder="Shoppe bao ship 0Đ - Đăng kí ngay!" />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>

                <div className={cx('actions')}>
                    <Button text>Upload</Button>
                    <Button primary>Log in</Button>
                    <Menu items={MENU_ITEMS}>
                        <span>
                            <Button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </Button>
                        </span>
                    </Menu>
                </div>
            </div>
        </header>
    )
}

export default Header
