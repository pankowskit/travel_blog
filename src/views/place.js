import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import PlaceS1 from "../components/place-s1";
import PlaceS2 from "../components/place-s2";

class Place extends Component{
    render(){
        return(        
            <Container fluid className="minh-footer-adj p-0">
                <PlaceS1/>
                <PlaceS2/>
            </Container>    
        );
    }
}

export default Place;