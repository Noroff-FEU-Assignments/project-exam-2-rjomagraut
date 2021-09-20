import { useHistory } from 'react-router-dom';
import Form from 'react-bootstrap/Form'
import { Typeahead } from 'react-bootstrap-typeahead';


export const SearchBar = ({ searchRequest, setSearchRequest }) => {
    const history = useHistory();
    const onSubmit = (search) => {
        history.push(`?search=${searchRequest}`);
        search.preventDefault();
    };

    return (
        <Form className="accommodations-searchbar" action="/" method="get" autoComplete="off" onSubmit={onSubmit}>
                <Typeahead value={searchRequest}  onInput={(search) => setSearchRequest(search.target.value)} type="text" placeholder="Accommodations..." name="search"/>
        </Form>
    );
};