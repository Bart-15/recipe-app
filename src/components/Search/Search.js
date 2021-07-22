import React from 'react'
import {Input, Container} from '@material-ui/core'
import useStyles from './styles'
const Search = ({ query, setQuery, onSubmit}) => {

    const classes = useStyles();
    return (
        <div>
            <Container>
           <form onSubmit={onSubmit} className={classes.root} noValidate autoComplete="off">
           <Input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search here" inputProps={{ 'aria-label': 'description' }} />
           </form>
            </Container>
        </div>
    )
}

export default Search
