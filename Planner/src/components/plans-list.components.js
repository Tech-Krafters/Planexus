import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

const Plan = props => (
  <tr>
    <td>{props.plan.users}</td>
    <td>{props.plan.description}</td>
    <td>{props.plan.duration}</td>
    <td>{props.plan.date.substring(0,10)}</td>
    <td>
      <Link to={"/edit/"+props.plan._id}>edit</Link> | <a href="/" onClick={() => { props.deleteplan(props.plan._id) }}>delete</a>
    </td>
  </tr>
)

export default class PlansList extends Component {
  constructor(props) {
    super(props);

    this.deleteplan = this.deleteplan.bind(this)

    this.state = {plans: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/plans/')
      .then(response => {
        this.setState({ plans: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteplan(id) {
    axios.delete('http://localhost:5000/plans/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      plans: this.state.plans.filter(el => el._id !== id)
    })
  }

  planList() {
    return this.state.plans.map(currentplan => {
      return <plan plan={currentplan} deleteplan={this.deleteplan} key={currentplan._id}/>;
    })
  }

  render() {
    return (
      <div>
        <h3>Logged plans</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Users</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.planList() }
          </tbody>
        </table>
      </div>
    )
  }
}