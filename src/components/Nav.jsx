
const Nav = () => {
  return (
    <nav className="navbar navbar-light justify-content-center shadow" style={styles.navbar}>
      <h3>

      <a className="navbar-brand text-center" style={{color: '#faa', fontSize: 23}} href="#">
       
        <img
          src="./logo1.png"
          width="30"
          height="30"
          className="d-inline-block align-top mr-3"
          alt=""
          loading="lazy"
        />
       
        Sticky Notes
      </a>
     </h3>
    </nav>
  );
};

const styles = {
    navbar :{
        backgroundColor : '#444',
    },
    title : {
        color: '#faa'
    }
}

export default Nav;
