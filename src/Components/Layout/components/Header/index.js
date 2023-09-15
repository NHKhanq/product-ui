import classNames from 'classnames/bind'
import styles from './Header.module.scss'

import 'tippy.js/dist/tippy.css'
import Tippy from '@tippyjs/react'
import HeadlessTippy from '@tippyjs/react/headless'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faCircleXmark,
    faSpinner,
    faMagnifyingGlass,
    faEllipsisH,
    faEllipsisVertical,
    faEarthAsia,
    faCircleQuestion,
    faUpload,
    faUser,
    faGear,
    faSignOut,
} from '@fortawesome/free-solid-svg-icons'
import images from '~/assets/images'
import Image from '../image'
import Button from '~/Components/Layout/components/Button'
import { Wrapper as PopperWrapper } from '~/Components/Layout/components/Popper'
import Menu from '../Popper/Menu'
import { faFacebookMessenger } from '@fortawesome/free-brands-svg-icons'
const cx = classNames.bind(styles)

//handle logic
const handleChange = (menuItem) => {
    console.log(menuItem)
}

const currenUser = true

const MENU_ITEMS = [
    {
        icons: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'Tiếng Việt',
        children: {
            title: 'Language',
            data: [
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        // icons: <FontAwesomeIcon icon="fa-solid fa-question" />,
        icons: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback',
        to: '/feedback',
    },
]

const userMenu = [
    {
        icons: <FontAwesomeIcon icon={faUser} />,
        title: 'View Profile',
        to: '/@123',
    },
    {
        icons: <FontAwesomeIcon icon={faGear} />,
        title: 'Setting',
        to: '/setting',
    },
    ...MENU_ITEMS,

    {
        icons: <FontAwesomeIcon icon={faSignOut} />,
        title: 'Log out',
        to: '/log out',
    },
]
function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('content')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="tiktok" />
                </div>
                <HeadlessTippy
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
                </HeadlessTippy>

                {/* check user dang nhap de tra va giao dien nguoidung  */}

                <div className={cx('actions')}>
                    {currenUser ? (
                        <>
                            <Tippy content="Upload" placement="bottom" delay={200}>
                                <button className={cx('action-btn')}>
                                    <FontAwesomeIcon icon={faUpload} />
                                </button>
                            </Tippy>
                            <Tippy content="Message" placement="bottom" delay={200}>
                                <button className={cx('action-btn')}>
                                    <FontAwesomeIcon icon={faFacebookMessenger} />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    <Menu items={currenUser ? userMenu : MENU_ITEMS} onChange={handleChange}>
                        {currenUser ? (
                            <Image
                                className={cx('user-avt')}
                                src="https://cdnimg.vietnamplus.vn/uploaded/bokttj/2023_01_02/avatar_the_way_of_water.jpg"
                                alt="Nguyen Hoang Khang"
                            />
                        ) : (
                            <span>
                                <Button className={cx('more-btn')}>
                                    <FontAwesomeIcon icon={faEllipsisVertical} />
                                </Button>
                            </span>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    )
}

export default Header
