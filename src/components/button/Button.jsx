import './Button.css'

export default function Button(props) {
    let classes = 'btnCard '
    classes += props.largerBtn ? 'largerBtn ' : ''
    classes += props.zoomBtn ? 'zoomBtn ' : ''
    classes += props.googleMeetBtnY ? 'googleMeetBtnY ' : ''
    classes += props.googleMeetBtnG ? 'googleMeetBtnG ' : ''
    classes += props.googleMeetBtnR ? 'googleMeetBtnR ' : ''
    classes += props.googleMeetBtnB ? 'googleMeetBtnB ' : ''
    classes += props.microsoftTeamsBtn ? 'microsoftTeamsBtn ' : ''
    classes += props.btnTools ? 'btnTools ' : ''

    return (
        <button id className={classes} onClick={e => props.click(props.id)} >
            {props.label}
        </button>
    )
}