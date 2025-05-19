import FormatQuoteIcon from '@mui/icons-material/FormatQuote'
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter'
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft'
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight'
import FormatBoldIcon from '@mui/icons-material/FormatBold'
import FormatItalicIcon from '@mui/icons-material/FormatItalic'
import HMobiledataIcon from '@mui/icons-material/HMobiledata'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted'
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered'
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined'

import './text-editor.scss'

export const TextEditor = () => {
	return (
		<div className="text-editor">
			<div className="text-editor__wrapper">
				<div className="text-editor__section">
					<FormatBoldIcon
						onClick={(e) => {
							console.dir(e.currentTarget)
						}}
						className="text-editor__btn"
					/>
					<FormatItalicIcon className="text-editor__btn" />
					<HMobiledataIcon className="text-editor__btn" />
				</div>

				<div className="text-editor__section">
					<FormatQuoteIcon className="text-editor__btn" />
					<FormatAlignLeftIcon className="text-editor__btn" />
					<FormatAlignRightIcon className="text-editor__btn" />
					<FormatAlignCenterIcon className="text-editor__btn" />
				</div>

				<div className="text-editor__section">
					<ImageOutlinedIcon className="text-editor__btn" />
				</div>

				<div className="text-editor__section">
					<FormatListBulletedIcon className="text-editor__btn" />
					<FormatListNumberedIcon className="text-editor__btn" />
				</div>
			</div>
		</div>
	)
}
