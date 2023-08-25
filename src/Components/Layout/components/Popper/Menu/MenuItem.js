import Button from '~/Components/Layout/components/Button'
import classNames from 'classnames/bind'
import styles from './Menu.module.scss'
const cx = classNames.bind(styles)

function MenuItem({ data }) {
    return (
        <Button leftIcon={data.icons} to={data.to} className={cx('menu-items')}>
            {data.title}
        </Button>
    )
}

export default MenuItem
