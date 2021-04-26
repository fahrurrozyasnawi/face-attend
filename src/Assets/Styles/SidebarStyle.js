const SidebarStyle = theme =>({
    drawerPaper: {
        border: 'none',
        position: 'fixed',
        top: '0',
        bottom: '0',
        left: '0',
        zIndex: '1'
    },
    logo: {
        position: 'relative',
        padding: '15px 15px',
        zIndex: '4',
        '&:after': {
            content: '""',
            position: 'absolute',
            bottom: '0',

            height: '1px',
            right: '15px', 
            width: 'calc(100% - 30pc)',
            //backgroundColor
        },
    logoLink: {
        // ...defaultFont //import custom font
        textTransform: 'uppercase',
        padding: '5px 0',
        display: 'block',
        fontSize: '18px',
        textAlign: 'left',
        fontWeight: '400',
        lineHeight: '30px',
        textDecoration: 'none',
        backgroundColor: 'transparent',
        '&,&:hover' : {
            color: 'white' //import custom color
        }
    },
    logoImage: {
        width: '30px',
        display: 'inline-block',
        maxHeight: '30px',
        marginLeft: '10px',
        marginRight: '15px',
    },
    img: {
        width: '35px',
        top: '22px',
        position: 'absolute',
        verticalAlign: 'middle',
        border: '0'
    },
    list: {
        marginTop: '20px',
        paddingLeft: '0',
        paddingTop: '0',
        paddingBottom: '0',
        marginBottom: '0',
        listStyle: 'none',
        position: 'unset'
    },
    item: {
        position: 'relative',
        display: 'block',
        textDecoration: 'none',
        '&:hover,&:focus,&:visited,&': {
            color: 'white' //import custom color 
        }
    },
    itemLink: {
        width: 'auto',
        transition: 'all 300ms linear',
        margin: '10px 15px 0',
        borderRadius: '3px',
        position: 'relative',
        display: 'block',
        padding: '10px 15px',
        backgroundColor: 'transparent',
        // ...defaultFont
    },
    itemIcon: {
        width: '24px',
        height: '30px',
        fontSize: '24px',
        lineHeight: '30px',
        float: 'left',
        marginRight: '15px',
        textAlign: 'center',
        verticalAlign: 'middle',
        // color
    },
    itemText: {
        // ...defaultFont
        margin: '0',
        lineHeight: '30px',
        fontSize: '14px',
        color: 'white'
    },
    whiteFont: {
        color: 'white'
    },
    // colorHover: {
    // }
    sideBarWrapper: {
        position: 'relative',
        height: 'calc(100vh - 75px)',
        overflow: 'auto',
        width: '260px',
        zIndex: '4',
        overflowScrolling: 'touch'
        }
    }
});

export default SidebarStyle;