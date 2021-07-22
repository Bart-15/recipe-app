import React from 'react'
import {Input, Container} from '@material-ui/core'
import useStyles from './styles'
const Search = ({getData, query, setQuery}) => {

    const classes = useStyles();

    console.log(query)
    return (
        <div>
            <Container>

           <form onSubmit={getData} className={classes.root} noValidate autoComplete="off">
           <Input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search here" inputProps={{ 'aria-label': 'description' }} />
           </form>

            </Container>
        </div>
    )
}

export default Search
