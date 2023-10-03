import PropTypes from 'prop-types';

import { nanoid } from "nanoid";
import { List, ListItems } from './ContactList.styled';

export const ContactList = ({ items, onDelete }) => {
    return (<ListItems>{
        items.map(item => <List key={nanoid()}>
            {item.name}: {item.number}
            <button type="button" onClick={() => onDelete(item.name)}>Delete</button>
        </List>)
    }
</ListItems>)
}

ContactList.propTypes = {
        items: PropTypes.arrayOf(
            PropTypes.exact({
                number: PropTypes.string.isRequired,
                name: PropTypes.string.isRequired
            })  
    )}