import HeadlessTippy from '@tippyjs/react/headless'
import { Wrapper as PopperWrapper } from '~/Components/Layout/components/Popper'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames/bind'
import styles from './Search.module.scss'

import { faCircleXmark, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useState, useRef } from 'react'
import { clear } from '@testing-library/user-event/dist/clear'

const cx = classNames.bind(styles)
function Search() {
    const [search, setSearch] = useState('')
    const [result, setResult] = useState(true)

    const inputRef = useRef()
    return (
        <HeadlessTippy
            // onClickOutside={setResult(false)}
            interactive={result}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1">
                    <PopperWrapper>
                        <h3>demo</h3>
                    </PopperWrapper>
                </div>
            )}
        >
            <div className={cx('search')}>
                <input
                    ref={inputRef}
                    value={search}
                    placeholder="Shoppe bao ship 0Đ - Đăng kí ngay!"
                    onChange={(e) => setSearch(e.target.value)}
                    // onFocus={setResult(true)}
                />

                {!!search && (
                    <button
                        className={cx('clear')}
                        onClick={() => {
                            setSearch('')
                            inputRef.current.focus()
                        }}
                    >
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}
                {/* <FontAwesomeIcon className={cx('loading')} icon={faSpinner} /> */}
                <button className={cx('search-btn')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
        </HeadlessTippy>
    )
}

export default Search
