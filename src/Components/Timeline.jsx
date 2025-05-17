import React from 'react';
import data from "../assests/data.json";

const Timeline = () => {
    return (
        <div id='timeline'>
            <div className="timelineBox">
                {
                    data.frameworks.map((item, index) => (
                        <TimelineItem
                            heading={item.title}
                            index={index}
                            key={item.key}

                        />
                    ))
                }
            </div>
        </div>
    );
};

const TimelineItem = ({ heading, text, index }) => (
    <div
        className={`timelineItem ${index % 2 === 0 ? "leftTimeline" : "rightTimeline"
            }`}
    >
        <div>
            <h2>{heading}</h2>
            <p>{text}</p>
        </div>
    </div>
);

export default Timeline;