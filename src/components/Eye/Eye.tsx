import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined'
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined'
import './eye.scss'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { visiblePass } from '@/store/slices/auth'
import { FC } from 'react'

type EyeProps = {
	customClass?: string
}

export const Eye: FC<EyeProps> = ({ customClass }) => {
	const dispatch = useAppDispatch()
	const visible = useAppSelector((state) => state.auth.visiblePass)
	return (
		<div className={`eye ${customClass}`}>
			{visible ? (
				<VisibilityOutlinedIcon
					onClick={() => dispatch(visiblePass())}
					className="icon eye__visible"
				/>
			) : (
				<VisibilityOffOutlinedIcon
					onClick={() => dispatch(visiblePass())}
					className="icon eye__not-visible"
				/>
			)}
		</div>
	)
}
