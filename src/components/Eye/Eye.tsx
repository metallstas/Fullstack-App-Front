import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined'
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined'
import './eye.scss'
import { FC } from 'react'

type EyeProps = {
    customClass?: string
    visible: boolean
    onClick: () => void
}

export const Eye: FC<EyeProps> = ({ customClass, visible, onClick }) => {
    return (
        <div className={`eye ${customClass}`}>
            {visible ? (
                <VisibilityOutlinedIcon
                    onClick={onClick}
                    className="icon eye__visible"
                />
            ) : (
                <VisibilityOffOutlinedIcon
                    onClick={onClick}
                    className="icon eye__not-visible"
                />
            )}
        </div>
    )
}
