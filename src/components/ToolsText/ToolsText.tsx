import { FC } from 'react'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { isBold, isItalic } from '@/store/slices/textEditor'

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

import './tools-text.scss'

export const ToolsText: FC = () => {
    const dispatch = useAppDispatch()
    const bold = useAppSelector((state) => state.textEditor.bold)
    const italic = useAppSelector((state) => state.textEditor.italic)

    return (
        <div className="tools-text">
            <div className="tools-text__wrapper">
                <div className="tools-text__section">
                    <div className="tools-text__item">
                        <FormatBoldIcon
                            onClick={(e) => {
                                dispatch(isBold())
                                document.execCommand('bold')
                            }}
                            className={`tools-text__btn ${bold && 'pressed'}`}
                        />
                    </div>
                    <div className="tools-text__item">
                        <FormatItalicIcon
                            onClick={() => {
                                dispatch(isItalic())
                            }}
                            className={`tools-text__btn ${italic && 'pressed'}`}
                        />
                    </div>
                    <div className="tools-text__item">
                        <HMobiledataIcon
                            className={`tools-text__btn ${false && 'pressed'}`}
                        />
                    </div>
                </div>

                <div className="tools-text__section">
                    <div className="tools-text__item">
                        <FormatQuoteIcon className="tools-text__btn" />
                    </div>
                    <div className="tools-text__item">
                        <FormatAlignLeftIcon className="tools-text__btn" />
                    </div>
                    <div className="tools-text__item">
                        <FormatAlignRightIcon className="tools-text__btn" />
                    </div>
                    <div className="tools-text__item">
                        <FormatAlignCenterIcon className="tools-text__btn" />
                    </div>
                </div>

                <div className="tools-text__section">
                    <div className="tools-text__item">
                        <ImageOutlinedIcon className="tools-text__btn" />
                    </div>
                </div>

                <div className="tools-text__section">
                    <div className="tools-text__item">
                        <FormatListBulletedIcon className="tools-text__btn" />
                    </div>
                    <div className="tools-text__item">
                        <FormatListNumberedIcon className="tools-text__btn" />
                    </div>
                </div>
            </div>
        </div>
    )
}
