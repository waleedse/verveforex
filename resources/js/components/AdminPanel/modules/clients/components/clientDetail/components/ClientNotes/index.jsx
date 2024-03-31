import React, { Fragment, useEffect, useRef, useState } from 'react';
import { addNote, getNotes } from '../../../../../../../services/client/commonService';
import { useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import { IMAGE_BASE_URL } from '../../../../../../../config/constants';

const ClientNotes = ({ client }) => {
    const scrollableRef = useRef(null);
    const [note, setNote] = useState('')
    const [notes, setNotes] = useState(null)
    const user = useSelector((state) => state.user?.user)
    const params = useParams();

    const scrollToBottom = () => {
        scrollableRef.current.scrollTop = scrollableRef.current.scrollHeight;
    }

    useEffect(() => {
        const scrollElement = document.getElementById('chat');
        // console.log(scrollElement)
        if (scrollElement) {
            scrollElement.scrollTop = scrollElement.scrollHeight;
        }
    }, [notes])

    const getClientNotes = async () => {
        let res = await getNotes(params?.id)
        setNotes(res?.notes)
    }

    useEffect(() => {
        getClientNotes()
    }, [])

    const addClientNote = async (e) => {
        e.preventDefault();

        toast.loading("Creating note")
        let res = await addNote({ note: note, client_id: params?.id, author_id: user?.id })
        toast.dismiss()
        setNote('')
        if (res?.status == 200) {
            toast.success("Note created")
            setNotes(res?.notes)
        } else {
            toast.error(res?.message)
        }
    }

    const formatDate = (dateStringParam) => {
        const dateString = dateStringParam;
        const date = new Date(dateString);

        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0"); // Adding 1 to month since January is 0
        const day = String(date.getDate()).padStart(2, "0");
        const hours = String(date.getHours()).padStart(2, "0");
        const minutes = String(date.getMinutes()).padStart(2, "0");
        const seconds = String(date.getSeconds()).padStart(2, "0");

        const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}`;
        return formattedDate;

    }

    return (
        <div className="tab-pane" id="profile-4" role="tabpanel" aria-labelledby="profile-tab-4">
            <div className="chat-wrapper">
                <div className="col-sm-12">
                    <div ref={scrollableRef} className="chat-content">
                        <div className="card mb-0">
                            <div className="card-header p-3">
                                <div className="d-flex align-items-center">
                                    <ul className="list-inline me-auto mb-0">

                                        <li className="list-inline-item">
                                            <div className="media align-items-center">

                                                <div className="media-body mx-3 d-none d-sm-inline-block">
                                                    <h6 className="mb-0">Notes</h6>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>

                                </div>
                            </div>
                            <div id="chat" ref={scrollableRef} style={{ overflowY: 'scroll', height: '500px' }} className="scroll-block chat-message">
                                <div ref={scrollableRef} className="card-body">

                                    {
                                        notes && notes?.map((item, index) => (

                                            item?.author_id != user?.id ?
                                                <div className="message-out">
                                                    <div className="d-flex align-items-end flex-column">
                                                        <p className="mb-1 text-muted"><small>{formatDate(item?.created_at)}</small></p>
                                                        <div className="message d-flex align-items-end flex-column">
                                                            <div className="d-flex align-items-center mb-1 chat-msg">

                                                                <div className="flex-grow-1 ms-3">
                                                                    <div className="msg-content bg-primary">
                                                                        <p className="mb-0">{item?.note}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                :
                                                <div className="message-in">
                                                    <div className="d-flex">
                                                        <div className="flex-shrink-0">
                                                            <div className="chat-avtar">
                                                                <img className="rounded-circle img-fluid wid-40" src={IMAGE_BASE_URL + item?.author?.image} alt="User image" />
                                                                <i className="chat-badge bg-success" />
                                                            </div>
                                                        </div>
                                                        <div className="flex-grow-1 mx-3">
                                                            <div className="d-flex align-items-start flex-column">
                                                                <p className="mb-1 text-muted">{item?.author?.first_name} {item?.author?.last_name}<small> {formatDate(item?.created_at)}</small></p>
                                                                <div className="message d-flex align-items-start flex-column">
                                                                    <div className="d-flex align-items-center mb-1 chat-msg">
                                                                        <div className="flex-grow-1 me-3">
                                                                            <div className="msg-content card mb-0">
                                                                                <p className="mb-0">{item?.note}</p>
                                                                            </div>
                                                                        </div>

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                        ))
                                    }


                                </div>
                            </div>
                            <div className="card-footer py-2 px-3">
                                <form className='d-flex gap-1' >
                                    <input name='note' value={note} onChange={(e) => { setNote(e.target.value) }} className="form-control border-0 shadow-none px-3" placeholder="Type a note..." rows={2} defaultValue={""} />
                                    <ul className="list-inline ms-auto mb-0">
                                        <li className="list-inline-item">
                                            <button onClick={(e) => { addClientNote(e) }} type='submit' style={{ borderColor: 'transparent' }} className="avtar avtar-s btn-link-primary">
                                                <i className="ti ti-send f-18" />
                                            </button>
                                        </li>
                                    </ul>
                                </form>
                            </div>
                        </div>
                    </div> </div>
            </div>
        </div>
    );
};

export default ClientNotes;
