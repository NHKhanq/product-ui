import Button from '~/Components/Layout/components/Button'
import classNames from 'classnames/bind'
import styles from './Menu.module.scss'
const cx = classNames.bind(styles)

function MenuItem({ data, onClick }) {
    return (
        <Button leftIcon={data.icons} to={data.to} className={cx('menu-items')} onClick={onClick}>
            {data.title}
        </Button>
    )
}

export default MenuItem
