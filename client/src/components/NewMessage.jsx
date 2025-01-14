import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createMessage } from "../fetching";


export default function NewMessage({sender, receiver, thread_id, updateMessages}) {
    // const [sender, setSenderId] = useState(null);
    // const [receiver, setReceiverId] = useState(null);
    // const [thread_id, setThreadId] = useState("");
    // const { thread_id } = useParams();
    const [message_content, setMessageContent] = useState("");
    const navigate = useNavigate();



    const handleSubmit = async (e) => {
        e.preventDefault();



        try {
            let data;

            if (thread_id) {

                data = await createMessage(sender, receiver, message_content, thread_id)

                if (updateMessages) {
                    updateMessages(data); // Pass the new message data to updateMessages
                  }
            } else {
                data = await createMessage(sender, receiver, message_content,)
            }
                console.log("message sent:", data);
                setMessageContent("");
                // navigate(`/:id/messages`);
                   
        } catch (error) {
            console.error('error:', error)
        }
    };

    return (
        <div className="py-5">
            <form onSubmit={handleSubmit}>
                <input
                    className="w-full bg-gray-300 py-5 px-3 rounded-xl"
                    type="text"
                    placeholder="type message here"
                    value={message_content}
                    onChange={(e) => setMessageContent(e.target.value)}
                />
                <br />
                <div>
                    {/* <button type="submit">send</button> */}
                </div>
            </form>
            <div>

            </div>
        </div>
    );
}