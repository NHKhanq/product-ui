import classNames from 'classnames/bind'
import styles from './Menu.module.scss'
import { Wrapper as PopperWrapper } from '~/Components/Layout/components/Popper'
import Tippy from '@tippyjs/react/headless'
import MenuItem from './MenuItem'

const cx = classNames.bind(styles)
function Menu({ children, items = [] }) {
    const renderItems = () => {
        return items.map((items, index) => <MenuItem key={index} data={items} />)
    }
    return (
        <Tippy
            delay={[0, 500]}
            interactive="true"
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('content')} tabIndex="-1">
                    <PopperWrapper>{renderItems()}</PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    )
}

export default Menu
