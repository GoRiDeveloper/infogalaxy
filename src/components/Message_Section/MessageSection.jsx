import { MessageContainer } from "../Message_Container/MessageContainer";
import "./MessageSection.css";

export function MessageSection ({ quote, author, planet, change }) {

    return (

        <section className="message">

            <h1 className="message__heading"> INFOGALAX </h1>
            <MessageContainer quote={quote} change={change} />
            <footer className="message__footer">
                <img className="message__image" src={planet} alt="planeta" />
                <p className="message__source"> Fuente: {author} </p>
            </footer>

        </section>

    );

};