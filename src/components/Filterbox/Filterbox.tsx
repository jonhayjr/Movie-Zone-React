import React, { useState } from 'react';

type FilterboxProps = {
    searchForMovie: (search: string) => void;
}

const Filterbox = ({searchForMovie}: FilterboxProps) => {
    const [search, setSearch] = useState('');
    const [validationAlert, setValidationAlert] = useState(false);

    const handleChange = (e: React.FormEvent<HTMLInputEvent>): void => {
        setSearch(e.target.value);
    }

    const handleSubmit = (e: ReactSyntheticEvent) => {
        e.preventDefault();

        if (search) {
            searchForMovie(search);
            setSearch('');
        } else {
            setValidationAlert(true);
        }
    }

    const handleAlertClose = () => {
        setValidationAlert(false);
    }

  return (
    <>
        <div className="alert alert-warning alert-dismissible fade show text-center w-100 mx-auto" role="alert" hidden={!validationAlert}>
            <p>Please enter a value in the search box.</p>
            <button type="button" className="close btn btn-warning w-25" data-dismiss="alert" aria-label="Close" onClick={handleAlertClose}>
            <span aria-hidden="true">&times;</span>
            </button>
        </div>

        <form className="input-group mb-3 w-75 mx-auto mt-3" autoComplete="off" onSubmit={(e) => {handleSubmit(e)}}>
            <input type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" placeholder="Search for Movie" name="search" onChange={(e) => {handleChange(e)}} value={search}/>
            <button className="btn-secondary btn">Search</button>
        </form>
    </>
  )
};

export default Filterbox;
