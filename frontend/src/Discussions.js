import { useEffect, useState } from "react";
import {useParams, Link} from "react-router-dom";
import axios from "axios";

const Discussions = () => {

    let {name} = useParams();

    return ( <div>Discussions of {name} </div> );
}
 
export default Discussions;