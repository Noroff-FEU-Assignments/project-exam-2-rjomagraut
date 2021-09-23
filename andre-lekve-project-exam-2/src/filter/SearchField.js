import { useHistory } from 'react-router-dom';
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import InputGroup from 'react-bootstrap/InputGroup'

export const SearchBar = ({ searchRequest, setSearchRequest }) => {
    const history = useHistory();
    const onSubmit = (search) => {
        history.push(`?search=${searchRequest}`);
        search.preventDefault();
    };
    if (searchRequest.length>0){

    }
    return (
        <Form action="/" method="get" autoComplete="off" onSubmit={onSubmit}>
             <InputGroup className="mb-3">
                 <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon1"><i className="searchbar-icon fas fa-search"></i></InputGroup.Text>
            </InputGroup.Prepend>
                <FormControl value={searchRequest}  onChange={(search) => setSearchRequest(search.target.value)} type="text" placeholder="Search for posts..." name="search"/>
             </InputGroup>
        </Form>
    );
};

// {posts && posts.map((post,i)=>
//                 <div key={i}>{post.hotel_name}</div>
//                 )}