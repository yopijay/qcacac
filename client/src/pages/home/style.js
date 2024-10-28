import banner from "assets/images/banner.jpg";

export const container = {
    flexGrow: 1,
    height: '100vh',
    background: `url(${banner}) no-repeat`,
    backgroundSize: 'cover',
    backgroundPositionX: 'center',
    backgroundPositionY: '35%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center', 
    alignItems: 'stretch'
}

export const subtitle = {
    fontSize: '200%',
    fontWeight: 'bold',
    color: '#64a93d'
}

export const title = {
    fontFamily: 'Montserrat ExtraBold',
    fontSize: '300%',
    textAlign: 'right',
    lineHeight: '48px',
    textTransform: 'uppercase',
    color: '#1B4168'
}

export const btn = {
    cursor: 'pointer', 
    fontSize: '120%',
    color: '#ffffff',
    fontWeight: 'bold',
    backgroundColor: '#1B4168',
    // border: 'solid 1px #1B4168',
    padding: '8px 20px',
    borderRadius: '8px',
    transition: '0.2s ease-in-out',
    textDecoration: 'none'
}