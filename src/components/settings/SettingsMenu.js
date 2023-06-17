
const SettingsMenu = (props) => {

    return (
        <div className="booking-tab">
            <p> <a href="/settings"><i className="fa fa-mobile"></i> Settings </a></p> 
            <hr/>
            <p> <a href="/business-settings"><i className="fa fa-th"></i> Business Settings </a></p> 
            <hr/>
            <p> <a href="/users"> <i className="fa fa-group"></i> Users</a></p>
        </div>
    )
}

export default SettingsMenu;
