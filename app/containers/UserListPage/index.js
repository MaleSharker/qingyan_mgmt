/**
 * Created by YCYL on 2017/8/31.
 */


import React from 'react';
import { Table, Modal, Button, Popconfirm } from 'antd';
import 'whatwg-fetch';


class EditModal extends React.Component {
    state = {

    };

    render() {
        return (
            <div>
                <Button type="primary" onClick={this.showModal}>
                    Open modal dialog
                </Button>

            </div>
        );
    }
}




class UserListPage extends React.Component {

    constructor(props) {
        super(props);

        this.columns = [
            {
                title: 'Name',
                dataIndex: 'name',
                sorter: true,
                render: name => `${name.first} ${name.last}`,
                width: '20%',
            }, {
                title: 'Gender',
                dataIndex: 'gender',
                filters: [
                    { text: 'Male', value: 'male' },
                    { text: 'Female', value: 'female' },
                ],
                width: '20%',
            }, {
                title: 'Email',
                dataIndex: 'email',
            },{
                title: 'Operation',
                dataIndex: 'operation',
                render: (text, record, index) => {
                    return (
                        <span>
                            <Popconfirm title="Sure to delete?" onConfirm={() => this.onDelete(index)}>
                                <a href="#">Delete</a>
                            </Popconfirm>
                            <span className="ant-divider" />
                            <Button type="primary" onClick={() => {this.onEdit(index)}}>Edit</Button>
                        </span>
                    )
                },
            },
        ];

        this.state = {
            data: [],
            pagination: {},
            loading: false,
            visible: false,
            modalLoading: false,
        };

    }

    onDelete = (index) => {
        console.log("edit index - - - ",index);
    };

    onEdit = (index) => {
        console.log('event - - ',index);
        this.setState({
            visible: true,
        });
    };

    handleTableChange = (pagination, filters, sorter) => {
        const pager = { ...this.state.pagination };
        pager.current = pagination.current;
        this.setState({
            pagination: pager,
        });
    };


    handleModalOk = () => {
        this.setState({ modalLoading: true });
        setTimeout(() => {
            this.setState({ modalLoading: false, visible: false });
        }, 3000);
    };
    handleModalCancel = () => {
        this.setState({ visible: false });
    };

    reqwest = (params = {}) => {
        this.setState({
            loading: false,
            data: [
                {
                    "gender": "male",
                    "name": {
                        "title": "mr",
                        "first": "romain",
                        "last": "hoogmoed"
                    },
                    "location": {
                        "street": "1861 jan pieterszoon coenstraat",
                        "city": "maasdriel",
                        "state": "zeeland",
                        "postcode": 69217
                    },
                    "email": "romain.hoogmoed@example.com",
                    "login": {
                        "username": "lazyduck408",
                        "password": "jokers",
                        "salt": "UGtRFz4N",
                        "md5": "6d83a8c084731ee73eb5f9398b923183",
                        "sha1": "cb21097d8c430f2716538e365447910d90476f6e",
                        "sha256": "5a9b09c86195b8d8b01ee219d7d9794e2abb6641a2351850c49c309f1fc204a0"
                    },
                    "dob": "1983-07-14 07:29:45",
                    "registered": "2010-09-24 02:10:42",
                    "phone": "(656)-976-4980",
                    "cell": "(065)-247-9303",
                    "id": {
                        "name": "BSN",
                        "value": "04242023"
                    },
                    "picture": {
                        "large": "https://randomuser.me/api/portraits/men/83.jpg",
                        "medium": "https://randomuser.me/api/portraits/med/men/83.jpg",
                        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/83.jpg"
                    },
                    "nat": "NL"
                }
            ],
            pagination: 20,
        });
    };

    componentDidMount() {
        this.reqwest();
    }
    render() {
        return (
            <div>
                <Table columns={this.columns}
                       rowKey={record => record.registered}
                       dataSource={this.state.data}
                       pagination={this.state.pagination}
                       loading={this.state.loading}
                       onChange={this.handleTableChange}
                />
                <Modal
                    visible={this.state.visible}
                    title="Title"
                    onOk={this.handleModalOk}
                    onCancel={this.handleModalCancel}
                    footer={[
                        <Button key="back" size="large" onClick={this.handleModalCancel}>Return</Button>,
                        <Button key="submit" type="primary" size="large" loading={this.state.modalLoading} onClick={this.handleModalOk}>
                            Submit
                        </Button>,
                    ]}
                >
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal>
            </div>
        );
    }
}

export default UserListPage;
