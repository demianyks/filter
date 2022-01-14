import * as React from "react";


export default function Posts(props) {
    const {title, body} = props.data;
    return (
        <div>
            <div className='post__block'>
                <div><span>Title:</span> {title}</div>
                <div><span>Body:</span> {body}</div>
                <br/>
            </div>
        </div>
    );
}