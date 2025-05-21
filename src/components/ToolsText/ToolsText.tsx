import { FC } from 'react'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { isBold, isItalic } from '@/store/slices/textEditor'

import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter'
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft'
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight'
import FormatBoldIcon from '@mui/icons-material/FormatBold'
import FormatItalicIcon from '@mui/icons-material/FormatItalic'
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered'
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined'

import './tools-text.scss'

export const ToolsText: FC = () => {
    const dispatch = useAppDispatch()
    const bold = useAppSelector((state) => state.textEditor.bold)
    const italic = useAppSelector((state) => state.textEditor.italic)

    //command fro execCommand
    //https://www.w3schools.com/jsref/met_document_execcommand.asp
    return (
        <div className="tools-text">
            <div className="tools-text__wrapper">
                <div className="tools-text__section">
                    <div className="tools-text__item">
                        <FormatBoldIcon
                            onClick={() => {
                                dispatch(isBold())
                                document.execCommand('bold', false, '')
                            }}
                            className={`tools-text__btn ${bold && 'pressed'}`}
                        />
                    </div>
                    <div className="tools-text__item">
                        <FormatItalicIcon
                            onClick={() => {
                                dispatch(isItalic())
                                document.execCommand('italic', false, '')
                            }}
                            className={`tools-text__btn ${italic && 'pressed'}`}
                        />
                    </div>
                </div>

                <div className="tools-text__section">
                    <div
                        className="tools-text__item"
                        onClick={() => document.execCommand('justifyLeft')}
                    >
                        <FormatAlignLeftIcon className="tools-text__btn" />
                    </div>
                    <div
                        className="tools-text__item"
                        onClick={() => document.execCommand('justifyCenter')}
                    >
                        <FormatAlignCenterIcon className="tools-text__btn" />
                    </div>
                    <div
                        className="tools-text__item"
                        onClick={() => document.execCommand('justifyRight')}
                    >
                        <FormatAlignRightIcon className="tools-text__btn" />
                    </div>
                </div>

                <div className="tools-text__section">
                    <div
                        className="tools-text__item"
                        onClick={() => {
                            document.execCommand('insertImage')
                        }}
                    >
                        <ImageOutlinedIcon className="tools-text__btn" />
                    </div>
                </div>

                <div className="tools-text__section">
                    <div
                        className="tools-text__item"
                        onClick={() => {
                            document.execCommand('insertOrderedList')
                        }}
                    >
                        <FormatListNumberedIcon className="tools-text__btn" />
                    </div>
                </div>
            </div>
        </div>
    )
}
