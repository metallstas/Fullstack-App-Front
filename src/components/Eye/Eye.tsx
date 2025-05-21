import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined'
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined'
import './eye.scss'

export const Eye = () => {
    return (
        <div className="eye">
            <VisibilityOutlinedIcon className="eye__visible" />
            <VisibilityOffOutlinedIcon className="eye__not-visible" />
        </div>
    )
}
