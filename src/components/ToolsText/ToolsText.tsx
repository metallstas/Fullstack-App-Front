import { FC } from 'react'

import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter'
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft'
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight'
import FormatBoldIcon from '@mui/icons-material/FormatBold'
import FormatItalicIcon from '@mui/icons-material/FormatItalic'
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered'
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined'

import './tools-text.scss'

export const ToolsText: FC = () => {
    return (
        <div className="tools-text">
            <div className="tools-text__wrapper">
                <div className="tools-text__section">
                    <div className="tools-text__item">
                        <FormatBoldIcon
                            onClick={() => {}}
                            className={`tools-text__btn ${false && 'pressed'}`}
                        />
                    </div>
                    <div className="tools-text__item">
                        <FormatItalicIcon
                            onClick={() => {}}
                            className={`tools-text__btn ${false && 'pressed'}`}
                        />
                    </div>
                </div>

                <div className="tools-text__section">
                    <div className="tools-text__item" onClick={() => {}}>
                        <FormatAlignLeftIcon className="tools-text__btn" />
                    </div>
                    <div className="tools-text__item" onClick={() => {}}>
                        <FormatAlignCenterIcon className="tools-text__btn" />
                    </div>
                    <div className="tools-text__item" onClick={() => {}}>
                        <FormatAlignRightIcon className="tools-text__btn" />
                    </div>
                </div>

                <div className="tools-text__section">
                    <div className="tools-text__item" onClick={() => {}}>
                        <ImageOutlinedIcon className="tools-text__btn" />
                    </div>
                </div>

                <div className="tools-text__section">
                    <div className="tools-text__item" onClick={() => {}}>
                        <FormatListNumberedIcon className="tools-text__btn" />
                    </div>
                </div>
            </div>
        </div>
    )
}
