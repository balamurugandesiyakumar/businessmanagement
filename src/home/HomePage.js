import React, { Component } from 'react'
import Header from "../Header/Header";
import Sidebar from "../sidebar/Sidebar";
import BusinessManagement from "../business-management/BusinessManagement";
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import "./homepage.scss";

export default class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editorState: EditorState.createEmpty(),
        };
    }

    onEditorStateChange = (editorState) => {
        this.setState({
            editorState,
        });
    };

    render() {
        return (
            <div className="home-bg">
                <Header />
                <section className="container-section">
                    <section className="container-lft">
                        <div className="cl-hd">
                            <ul>
                                <li>Details</li>
                                <li>Related</li>
                                <li className="active">Account Plan</li>
                                <li>Business Review</li>
                            </ul>
                        </div>
                        <div className="cl-det">
                            <i class="fas fa-address-book"></i>
                            <div className="cl-rght-det">
                                <h3>Account Details</h3>
                                <div className="cl-ac-det">
                                    <span>Account Name</span>
                                    <input type="text" value="Ohana Inc" />
                                </div>

                                <div className="cl-sub-det">
                                    <h3>Account Meta Data</h3>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td><i class="fas fa-ellipsis-v"></i>Account Type<i class="fas fa-chevron-down"></i></td>
                                                <td>Enterprise<i class="fas fa-sort"></i></td>
                                            </tr>
                                            <tr>
                                                <td><i class="fas fa-ellipsis-v"></i>Industry<i class="fas fa-chevron-down"></i></td>
                                                <td>Biotechnology<i class="fas fa-sort"></i></td>
                                            </tr>
                                            <tr>
                                                <td><i class="fas fa-ellipsis-v"></i>Employees<i class="fas fa-chevron-down"></i></td>
                                                <td>20,050<i class="fas fa-sort"></i></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <button className="link-btn"><i class="fas fa-plus"></i>Add Another Info</button>
                                    <h3>Sponsors</h3>
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Title</th>
                                                <th>Picture</th>
                                                <th>Notes</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Emily Waters</td>
                                                <td>CIO</td>
                                                <td><img src={`${process.env.PUBLIC_URL}/images/profile.png`} alt="profile image" /></td>
                                                <td>Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.</td>
                                            </tr>
                                            <tr>
                                                <td>Emily Waters</td>
                                                <td>CIO</td>
                                                <td><img src={`${process.env.PUBLIC_URL}/images/profile.png`} alt="profile image" /></td>
                                                <td>Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <button className="link-btn"><i class="fas fa-plus"></i>Add Sponsors</button>
                                    <h3>Account Description</h3>
                                    <Editor
                                        editorState={this.state.editorState}
                                        toolbarClassName="toolbarClassName"
                                        wrapperClassName="wrapperClassName"
                                        editorClassName="editorClassName"
                                        onEditorStateChange={this.onEditorStateChange}
                                    />
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="container-rght">
                        <section className="cr-linkcard">
                            <ul>
                                <li><i class="fas fa-address-book"></i>Associated Documents<i class="fas fa-chevron-down"></i></li>
                                <li><i class="fas fa-file-alt"></i>Ohana Inc</li>
                                <li><i class="fas fa-file-alt"></i>Ohana Account Plan</li>
                                <li><i class="fas fa-file-alt"></i>Big Bet Close Plan - Ohana Inc</li>
                            </ul>
                            <button className="vw-all">View All</button>
                        </section>
                        <section className="">

                        </section>
                    </section>
                </section>
            </div>
        )
    }
}
