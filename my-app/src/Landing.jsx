
import { Button } from "semantic-ui-react";
import Header from "./component/common/Header";
import { Link } from "react-router-dom";
import './Landing.css';

const Home = () => {

    return (
        <Header title="Our Recipes" bgClass="bg-image">
            <Button
                content="SEARCH RECIPES"
                color="primary"
                as={Link}
                to="/recipes"
                size="big"
            />
        </Header>
    )
}

export default Home;