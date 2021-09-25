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

    return (
        <Form action="/" method="get" autoComplete="off" onSubmit={onSubmit}>
             <InputGroup>
                <FormControl className="fas fa-search searchbar-placeholder" value={searchRequest}  onChange={(search) => setSearchRequest(search.target.value)} type="text" placeholder="&#xF002;" name="search"/>
             </InputGroup>
        </Form>
    );
};

