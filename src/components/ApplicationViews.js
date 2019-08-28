import { Route, Redirect } from 'react-router-dom'
import React, { Component } from 'react'
import Home from './home/Home'
import AnimalList from './animal/AnimalList'
import AnimalDetail from './animal/AnimalDetail'
import AnimalForm from './animal/AnimalForm'
import LocationList from './location/LocationList'
import LocationDetail from './location/LocationDetail'
import LocationForm from './location/LocationForm'
import EmployeeList from './employee/EmployeeList'
import EmployeeForm from './employee/EmployeeForm'
import OwnerList from './owner/OwnerList'
import OwnerForm from './owner/OwnerForm'
import Login from './auth/Login'



class ApplicationViews extends Component {

    // Check if credentials are in local storage
    //returns true/false
    isAuthenticated = () => localStorage.getItem("credentials") !== null

    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <Home />
                }} />

                <Route path="/login" component={Login} />

                <Route path="/animals/new" render={(props) => {
                    return <AnimalForm {...props} />
                }} />

                <Route exact path="/animals" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <AnimalList {...props} />
                    }
                    return <Redirect to="/login" />
                }} />

                <Route path="/animals/:animalId(\d+)" render={(props) => {
                    // Pass the animalId to the AnimalDetailComponent
                    return <AnimalDetail
                        {...props}
                        animalId={parseInt(props.match.params.animalId)}
                    />
                }} />

                <Route exact path="/locations" render={(props) => {
                    return (this.isAuthenticated() ? <LocationList {...props} /> : <Redirect to="/login" />);
                }} />

                <Route path="/locations/new" render={(props) => {
                    return <LocationForm {...props} />
                }} />

                <Route path="/locations/:locationId(\d+)" render={(props) => {
                    // Pass the animalId to the AnimalDetailComponent
                    return <LocationDetail
                        {...props}
                        locationId={parseInt(props.match.params.locationId)}
                    />
                }} />

                <Route exact path="/employees" render={props => this.isAuthenticated() ? <EmployeeList {...props} /> : <Redirect to="/login" />} />

                <Route path="/employees/new" render={(props) => {
                    return <EmployeeForm {...props} />
                }} />

                <Route exact path="/owners" render={props => this.isAuthenticated() ? <OwnerList {...props} /> : <Redirect to="/login" />} />

                <Route path="/owners/new" render={(props) => {
                    return <OwnerForm {...props} />
                }} />

            </React.Fragment>
        )
    }
}

export default ApplicationViews