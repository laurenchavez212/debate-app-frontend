import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteMeeting } from "../actions/meetingActions";

const Meeting = ({ meeting, deleteMeeting }) => {
    return (
        <div className="meeting-card">
            <Card>
                <CardImg top width="100%" src={meeting.imgUrl} alt="Card image cap" />
                <CardBody>
                    <CardTitle>{meeting.title}</CardTitle>
                    <CardSubtitle>Presented By: <Link to={`/employee/${meeting.presenter.id}`}>{meeting.presenter.name}</Link></CardSubtitle>
                    <hr />
                    <CardText>{meeting.about}</CardText>
                    <Link to={`/meeting/${meeting.id}`}><Button className="li"><a>More Info</a></Button></Link> {localStorage.getItem('userId') == meeting.presenter.id && <Button onClick={() => deleteMeeting(meeting.id)} color="danger" className="li"><a>Delete</a></Button>}
                </CardBody>
            </Card>
        </div>
    );
};

export default connect(null, { deleteMeeting })(Meeting);