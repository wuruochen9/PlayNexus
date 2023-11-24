import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faUserCircle  } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {NavLink} from "react-router-dom";
import { Link, useNavigate } from "react-router-dom"
import { useState, useMemo, useCallback, useEffect} from 'react';
import { Dropdown, Image } from 'react-bootstrap';
import DataListInput from 'react-datalist-input';
import api from '../../api/axiosConfig'; 
import 'react-datalist-input/dist/styles.css'
import "./Header.css"

const Header = () => {
    const [item, setItem] = useState();
    const [keywords, setKeywords] = useState("");
    const [profile, setProfile] = useState("");
    const navigate = useNavigate();
    const options = [
        { name: 'Chocolate' },
        { name: 'Coconut' },
        { name: 'Mint' },
        { name: 'Strawberry' },
        { name: 'Vanilla' },
      ];

    const loggedin = 1;
    const image = "https://avatars.githubusercontent.com/u/59141023?s=96&v=4";
    // const image = "";
    
    
    const getUser =  async () =>{
      try{
        // Makes an API request to fetch a list of games and updates the games state variable with the response data.
        const userkey = sessionStorage.getItem("userkey");
        const response = await api.get('/user', {
          headers: {
            Authorization: `Bearer ${userkey}`,
          },
        });
        if("UserID" in response.data[0]){
          debugger
          setProfile(response.data[0]);
        }
        debugger
      }
      catch(err){
        console.log(err);
      }
    }

    // Function Definition
    function gotoLogin(){ navigate(`/login`);}
    function searchInput(event){
        if (event.key === 'Enter') {
            navigate(`/search/${keywords}`);
            console.log(keywords);
        }
    }
    
    // The onSelect callback function is called if the user selects one option out of the dropdown menu.
    const onSelect = useCallback((selectedItem) => {
      console.log('selectedItem', selectedItem);
      setItem(selectedItem);
    }, []);
  

    // Dropdown menu
    const items = useMemo(
      () =>
        options.map((option) => ({
          id: option.name,
          value: option.name,
        })),
      [],
    );
    
    useEffect(() => {getUser();},[])


    return (
    <Navbar bg="black" variant="dark" expand="lg">

        <Container fluid>
            <Navbar.Brand href="/" >
                <img src={"https://raw.githubusercontent.com/fan19-hub/fa23-cs411-team026-LADYS/main/icon.png"} alt="PlayNexus" style={{ height: '60px', marginRight: '5px' }} />
            </Navbar.Brand>

            <DataListInput className="search-bar" placeholder="Search games!" items={items}  onSelect={onSelect} onKeyDown={searchInput} onChange={(e) => setKeywords(e.target.value)} />


            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{maxHeight: '100px' }}
                    navbarScroll>
                </Nav>
                <NavLink className ="nav-link home" to="/" style={{"color":'lightgrey'}}>Home</NavLink>
                {( profile["UserID"])?  <div/> :
                <div className="login-button-container">
                    <Button className="mx-2" onClick={() => gotoLogin()} style={{ backgroundColor: "black", color: "white", border: "none" }}> Login </Button>
                </div>
                }   
            </Navbar.Collapse>
            {( profile["Photo"]!=null)?  
                <Dropdown>
                    <Dropdown.Toggle variant="light" id="dropdown-basic" style={{"background-color":"transparent", "border":"0px"}}>
                    <img src={profile["Photo"]} alt="" style={{"width":"50px","height":"50px","border-radius":"100%"}}/> 
                    </Dropdown.Toggle>
            
                    <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1" style={{"text-decoration":"none"}}>Profile</Dropdown.Item>
                    <Dropdown.Item href="#/action-2" style={{"text-decoration":"none"}}>History</Dropdown.Item>
                    <Dropdown.Item href="#/action-3" style={{"text-decoration":"none"}}>Posts</Dropdown.Item>
                    <Dropdown.Item href="#/action-7" style={{"text-decoration":"none"}}>Upgrade</Dropdown.Item>
                    <Dropdown.Item href="#/action-8" style={{"text-decoration":"none"}}>Logout</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            : 
                <FontAwesomeIcon className="fa-2x mx-2" icon={faUserCircle} color="white" style={{"width":"50px","height":"50px"}} />
                
            }
            
        </Container>
    </Navbar>
  );
}

export default Header

{/* <FaSearch id="fasearch-sign"/> */}
// import { FaSearch } from "react-icons/fa";
// faBars,faUserFriends, faVideoSlash
