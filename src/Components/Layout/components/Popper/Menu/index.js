import { Wrapper as PopperWrapper } from '~/Components/Layout/components/Popper'
import Tippy from '@tippyjs/react/headless'
import classNames from 'classnames/bind'
import styles from './Menu.module.scss'
import MenuItem from './MenuItem'
import Header from './Header'
import { useState } from 'react'

const cx = classNames.bind(styles)

const defaultFN = () => {

}
function Menu({ children, items = [], onChange = defaultFN }) {
    const [his, setHis] = useState([{data: items}])
    const current = his[his.length - 1]
    const renderItems = () => {
        return current.data.map((items, index) =>  {
                const isParent = !!items.children
            return <MenuItem key={index} data={items}  onClick={() => {
                if (isParent) {
                    setHis((prev) => [...prev, items.children])
                } else {
                    onChange(items)
                }
            }}/>
        })
    }
    return (
        <Tippy
            onHide={()=> setHis(prev=> prev.slice(0, 1))} // hov 
            delay={[0, 500]}
            interactive="true"
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('content')} tabIndex="-1">
                    <PopperWrapper>
                       {his.length > 1 && <Header title='Language' onClick={()=>{
                                setHis(prev => prev.slice(0, prev.length - 1))
                       }}/>}
                        {renderItems()}
                        
                        </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    )
}

export default Menu
